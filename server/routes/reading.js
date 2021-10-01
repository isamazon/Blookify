import express from 'express';
// imported controller functions
import {
  readingPosts,
  createreadingPost,
  updatePost,
  deletePost,
} from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', readingPosts);
router.post('/', auth, createreadingPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;
