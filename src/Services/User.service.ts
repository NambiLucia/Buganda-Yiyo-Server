import prisma from '../prisma';
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

export const createUser=async(fullname: string, email: string, password: string) =>{
    const hashedPassword = await bcrypt.hash(password,10)
    
   return await prisma.user.create({
        data:{
            fullname,
            email,
            password:hashedPassword,
           
        }
    })
}

    export const getUserByEmail =async(email:string): Promise<User | null> => {
        // Simulating database query with Prisma
        const user = await prisma.user.findUnique({ 
            where: { email } 
        });
    
        return user;  // Will return either a User or null if not found
    }


