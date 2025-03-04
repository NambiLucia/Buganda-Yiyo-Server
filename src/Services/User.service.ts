import prisma from "../prisma";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config()


export const createUser = async (fullname: string, email: string, password: string): Promise<User> => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.user.create({
    data: {
      fullname,
      email,
      password: hashedPassword,
    },
  });
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { email },
  });
};


export const loginUser = async (email: string, password: string): Promise<string | null> => {

  const user = await getUserByEmail(email);

  if (!user) {
    console.log("User not found");  
    return null;  
  }

  // Compare passwords
  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    console.log("Incorrect password"); 
    return null;  // Prevents login with incorrect password
  }

  //  Generate JWT token after checking that user exists
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.SECRET_KEY as string, 
    { expiresIn: "1h" }
  );

  return token; 
};