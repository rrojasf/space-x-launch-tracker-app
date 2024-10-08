import express from "express";
import { getRecentTweets } from "../controllers/twitterController";

const router = express.Router();

router.get("/recent", getRecentTweets);

export default router;
