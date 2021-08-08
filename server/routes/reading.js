import express from "express";

import { readingPosts, createreadingPost } from "../controllers/posts.js";
const router = express.Router();

router.get("/", readingPosts);
router.post("/", createreadingPost);

export default router;
