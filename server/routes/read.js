import express from 'express';

import { readPosts, createReadPost } from '../controllers/readposts.js';
const router = express.Router();

router.get('/', readPosts);
router.post('/', createReadPost);
export default router;
