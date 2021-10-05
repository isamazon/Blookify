import mongoose from 'mongoose';
import PostBook from '../model/postBook.js';

// function to retrieving posts
export const readingPosts = async (req, res) => {
  try {
    const postBooks = await PostBook.find();
    console.log(postBooks);
    res.status(200).json(postBooks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Functionality to add/create new posts
export const createreadingPost = async (req, res) => {
  const bookPost = req.body;

  const newBookPost = new PostBook({
    ...bookPost,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newBookPost.save();

    res.status(201).json(newBookPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// Updating the posts
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  // const { title, author, pageLength, selectedFile, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with Id: `);

  // const updatedPost = {
  //   title,
  //   author,
  //   pageLength,
  //   selectedFile,
  //   description,
  //   _id: id,
  // };
  const updatedPost = await PostBook.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatedPost);
};

// Delete post
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostBook.findByIdAndRemove(id);

  res.json({ message: 'Post deleted successfully.' });
};
