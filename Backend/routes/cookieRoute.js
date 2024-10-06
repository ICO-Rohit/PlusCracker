import express from "express";
import { getSingleCookie } from "../controllers/getSingleCookie.js";
import { createLink } from "../controllers/createLink.js";

const router = express.Router();

router.post('/:id', createLink);
router.get('/:id/:uniqueKey/get', getSingleCookie)

export default router;