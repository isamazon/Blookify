import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
  try {
    //   sign in user
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // Sign up the user
  } catch (error) {
    console.log(error);
  }
};
