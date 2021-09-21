import mongoose from 'mongoose';
import ReadBook from '../model/readBooks.js';

// function to retrieving posts
export const readPosts = async (req, res) => {
  try {
    const readBooks = await ReadBook.find();
    console.log(readBooks);
    res.status(200).json(readBooks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Functionality to add/create new posts
export const createReadPost = async (req, res) => {
  const bookPost = req.body;

  const newReadPost = new ReadBook(bookPost);

  try {
    await newReadPost.save();

    res.status(201).json(newReadPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};
