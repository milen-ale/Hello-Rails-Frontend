import {
  applyMiddleware,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greeting/greetingSlice';

// Redux store
const store = configureStore(
  {
    reducer: {
      greeting: greetingReducer,
    },
  },
  applyMiddleware(logger, thunk),
);

export default store;
