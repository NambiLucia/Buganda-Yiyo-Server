import express from "express";
import { getUsers,register,login } from "../Controllers/User.controller";

const router = express.Router();

router
.get("/",getUsers)
.post("/register", register)
.post("/login",login)


export default router;
