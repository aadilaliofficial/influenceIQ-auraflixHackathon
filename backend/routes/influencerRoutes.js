import express from "express";
import {
    getInfluencers,
    addInfluencer,
    deleteInfluencer,
} from "../controllers/influencerController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getInfluencers); // Get all influencers
router.post("/", authMiddleware, addInfluencer); // Add a new influencer
router.delete("/:id", authMiddleware, deleteInfluencer); // Delete an influencer

export default router;