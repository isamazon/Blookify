import axios from 'axios';

const url = 'http://localhost:5000/reading';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
