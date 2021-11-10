import axios from 'axios';

const API = axios.create({ baseURL: 'https://blookify.herokuapp.com' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

// Reading route functions
export const fetchPosts = () => API.get('/reading');
export const createPost = (newPost) => API.post('/reading', newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/reading/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/reading/${id}`);

// Read route functions
export const fetchReadBooks = () => API.get('/read');
export const createReadBook = (newReadBook) => API.post('/read', newReadBook);
export const deleteReadBook = (id2) => API.delete(`/read/${id2}`);

// To be read route functions
export const fetchTbrBook = () => API.get('/read');
export const createTbrBook = (newTbrBook) => API.post('/read', newTbrBook);
export const deleteTbrBook = (id3) => API.delete(`/read/${id3}`);

// Auth sign in and sign out
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
