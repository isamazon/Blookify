import express from 'express';
// imported controller functions
import {
  readingPosts,
  createreadingPost,
  updatePost,
  deletePost,
} from '../controllers/posts.js';
const router = express.Router();

router.get('/', readingPosts);
router.post('/', createreadingPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
