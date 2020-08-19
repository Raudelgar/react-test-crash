import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import middleware from './middlewares/middleware.js';

export default createStore(rootReducer, middleware);
