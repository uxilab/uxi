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
      ...(console.log('state in reducer', state, 'color', color) || {}),
      ...state,
      primary: color,
    }),
    [setSecondary]: (state, { payload: { color } }) => ({
      ...(console.log('state in reducer', state, 'color', color) || {}),
      ...state,
      secondary: color,
    }),
  },
  defaultState
);

export default reducer;
