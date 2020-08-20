import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import middleware, { sagaMiddleware } from './middlewares/middleware.js';
import rootSaga from './sagas/rootSaga.js';

export default createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);
