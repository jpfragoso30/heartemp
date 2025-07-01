/** @format */

import { Router } from "express";
import { HeartController } from "../controllers/HeartController.js";

const router = Router();

router.post("/measures", HeartController.saveData);
router.get("/measures/last-one", HeartController.getLastOne);

export default router;
