import express from "express";
import {
  getAllLaunches,
  getLaunchById,
  getLaunches,
} from "../controllers/launchController";

const router = express.Router();

router.get("/", getLaunches);
router.get("/all", getAllLaunches);
router.get("/:id", getLaunchById);

export default router;
