import PostBook from "../model/postBook.js";

export const readingPosts = async (req, res) => {
  try {
    const postBooks = await PostBook.find();

    res.status(200).json(postBooks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createreadingPost = (req, res) => {
  res.send("Post Creation");
};
