import PostBook from "../model/postBook.js";

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

  const newBookPost = new postBooks(bookPost);

  try {
    await newBookPost.save();

    res.status(201).json(newBookPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};