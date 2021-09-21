import express from 'express';

import { readPosts } from '../controllers/readposts.js';
const router = express.Router();

router.get('/', readPosts);
export default router;
