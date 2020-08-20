import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk];

export default applyMiddleware(...middleware);
