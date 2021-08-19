import { combineReducers } from 'redux';
import { mainReducer } from './main/main.reducers';

export const rootReducer = combineReducers({
  main: mainReducer,
});
