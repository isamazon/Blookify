import { combineReducers } from 'redux';

import posts from './posts';
import read from './readbooks';
export default combineReducers({ posts, read });
