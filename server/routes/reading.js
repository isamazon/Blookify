import express from 'express';
// imported controller functions
import {
  readingPosts,
  createreadingPost,
  updatePost,
} from '../controllers/posts.js';
const router = express.Router();

router.get('/', readingPosts);
router.post('/', createreadingPost);
router.patch('/:id', updatePost);

export default router;
