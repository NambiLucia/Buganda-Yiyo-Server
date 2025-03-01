import express from "express";
import { register } from "../Controllers/User.controller";

const router = express.Router();

router.post("/register", register);

export default router;
