import { loadingBarReducer } from 'react-redux-loading-bar';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import transferReducer from '../reducers/reducers';

const loggerMiddleware = createLogger();
const mergeReducer = {
  transfers: transferReducer,
  form: formReducer,
  loadingBar: loadingBarReducer,
};
const reducers = combineReducers(mergeReducer);

export default function configureStore(preloadedState) {
  return createStore(
    reducers,
    applyMiddleware(
      thunk,
      loggerMiddleware
    )
  );
}
