import { Request, Response } from "express";
import { createUser, getUserByEmail, loginUser } from "../Services/User.service";





export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
     res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = await createUser(fullname, email, password);

     res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Register error:", error);
     res.status(500).json({ message: "Internal Server Error" });
  }
};


export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Call the loginUser service
    const token = await loginUser(email, password);

    if (!token) {
       res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};