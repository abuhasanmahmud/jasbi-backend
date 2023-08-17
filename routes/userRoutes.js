import express from "express";

import {
  authUser,
  getUserProfile,
  logOut,
  registerUser,
  updateProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/register", registerUser);
router.post("/logout", logOut);
router.put("/update/:id", updateProfile);
router.route("/profile").get(protect, getUserProfile).put(protect, updateProfile);

export default router;
