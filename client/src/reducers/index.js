import { combineReducers } from 'redux';

import posts from './posts';
import read from './readbooks';
import tbr from './tbr';
import auth from './auth';
export default combineReducers({ posts, read, auth, tbr });
