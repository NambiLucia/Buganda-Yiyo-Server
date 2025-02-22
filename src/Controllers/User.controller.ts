import { Request, Response } from "express";
import { createUser, getUserByEmail } from "../Services/User.service";


export const register = async (req: Request, res: Response) => {
  try {
    const { fullname, email, password, role } = req.body;

    // Ensure we await the result from the database query
    const existingUser = await getUserByEmail(email); 

    if (existingUser) {
      
      return res.status(400).json({ message: "User already exists" });
    }

    // If user doesn't exist, create a new one
    const user = await createUser(fullname, email, password);
    return res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
