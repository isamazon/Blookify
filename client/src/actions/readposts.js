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
export const createReadBook = (read) => async (dispatch) => {
  try {
    const { data } = await api.createReadBook(read);

    dispatch({ type: 'CREATE_READ_BOOK', payload: data });
  } catch (error) {
    console.log(error);
  }
};
