import earthReducer from './earth';
import venusReducer from './venus';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  earthReducer,
  venusReducer
});

export default rootReducer;
