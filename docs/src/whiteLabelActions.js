import { createActions, handleActions, combineActions } from 'redux-actions';

export const {
  setPrimary,
  setSecondary,
} = createActions({
  SET_PRIMARY: (hexColor) => ({ color: hexColor }),
  SET_SECONDARY: (hexColor) => ({ color: hexColor })
});
