import { combineReducers } from 'redux';

import posts from './posts';
import read from './readbooks';
import auth from './auth';
export default combineReducers({ posts, read, auth });
