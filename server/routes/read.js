import express from 'express';

import {
  readPosts,
  createReadPost,
  deleteReadBook,
} from '../controllers/readposts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', auth, readPosts);
router.post('/', auth, createReadPost);
router.delete('/:id', auth, deleteReadBook);
export default router;
