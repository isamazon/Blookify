import express from 'express';

import { tbrPosts, createTbrPost, deleteTbrBook } from '../controllers/tbr.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', auth, tbrPosts);
router.post('/', auth, createTbrPost);
router.delete('/', auth, deleteTbrBook);
export default router;
