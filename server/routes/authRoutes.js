import express from "express";
import { loginUser } from "../controllers/authController.js";
// import { RegisterUser } from "../controllers/authController.js";

const router = express.Router();

// Login route
router.post("/login", loginUser);
// router.post("/register", RegisterUser);

export default router;
