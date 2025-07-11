import { Router } from "express";
import { userControllers } from "./user.controller";

export const userRoutes = Router();

userRoutes.post("/register", userControllers.createUser);
userRoutes.get("/all-users", userControllers.getAllUsers)
