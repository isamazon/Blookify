import * as api from '../api';

// Action creators
export const getReadBook = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReadBooks();
    dispatch({ type: 'FETCH_READ_BOOKS', payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Create post function
export const createReadBook = (post) => async (dispatch) => {
  try {
    const { data } = await api.createReadBook(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
