import { Request, Response } from "express";
import { createUser, getUserByEmail } from "../Services/User.service";

export const register = async (req: Request, res: Response): Promise<any> => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = await createUser(fullname, email, password);

    return res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
