import express from "express";
import {register,login } from "../Controllers/User.controller";
import { getUsers } from "../Controllers/User.controller";

const router = express.Router();

router
.get("/",getUsers)
.post("/register", register)
.post("/login",login)


export default router;
