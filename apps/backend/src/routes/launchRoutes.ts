import express from 'express';
import { getLaunches, getLaunchById } from '../controllers/launchController';

const router = express.Router();

router.get('/', getLaunches);
router.get('/:id', getLaunchById);

export default router;