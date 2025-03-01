import prisma from "../prisma";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

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
