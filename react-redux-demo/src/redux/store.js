import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
// import cakeReducer from './cake/cakeReducer';

// const store = createStore(cakeReducer);
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
