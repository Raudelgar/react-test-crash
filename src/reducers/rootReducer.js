import { combineReducers } from 'redux';
import successReducer from './successReducer.js';
import postReducer from '../components/posts/reducer.js';

const STATE = {
	posts: postReducer,
};

export default combineReducers(STATE);
