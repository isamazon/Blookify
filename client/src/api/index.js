import axios from 'axios';

const url = 'http://localhost:5000/reading';
const url2 = 'http://localhost:5000/read';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// Read route
export const fetchReadBooks = () => axios.get(url2);
export const createReadBook = (newPost) => axios.post(url2, newPost);
