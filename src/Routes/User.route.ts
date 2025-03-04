import express from "express";
import { register,login } from "../Controllers/User.controller";

const router = express.Router();

router
.post("/register", register)
.post("/login",login)


export default router;
