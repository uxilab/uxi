import { createActions, handleActions, combineActions } from 'redux-actions';
import {
  setPrimary,
  setSecondary,
} from './whiteLabelActions';

const defaultState = {
  theme: 'theme',
};

const reducer = handleActions(
  {
    [setPrimary]: (state, { payload: { color } }) => ({
      ...state,
      primary: color,
    }),
    [setSecondary]: (state, { payload: { color } }) => ({
      ...state,
      secondary: color,
    }),
  },
  defaultState
);

export default reducer;
