import express from 'express';

import {
  readPosts,
  createReadPost,
  deleteReadBook,
} from '../controllers/readposts.js';
const router = express.Router();

router.get('/', readPosts);
router.post('/', createReadPost);
router.delete('/:id', deleteReadBook);
export default router;
