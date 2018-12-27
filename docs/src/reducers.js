// reducers.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import whiteLabel from './whiteLabelReducer';


export default history => combineReducers({
  router: connectRouter(history),
  whiteLabel,
  // ... // rest of your reducers
});
