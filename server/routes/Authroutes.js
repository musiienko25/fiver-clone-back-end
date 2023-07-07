import { Router } from "express";
import { signUp } from "../controllers/AuthControllers.js";

const authroutes = Router();

authroutes.post("/signup", signUp);

export default authroutes;
