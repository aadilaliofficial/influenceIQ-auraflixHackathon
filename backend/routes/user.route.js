import express from "express";
import { login, logout, register } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register); // Register a new user
router.post("/login", login); // Login
router.get("/logout", logout); // Logout

export default router; // Export router
