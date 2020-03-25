/* eslint-disable no-case-declarations */
import { C } from './actions';

export const initialState = {
  columns: [],
  isResizing: false,
  isResizingProp: undefined,
  isResizingNextProp: undefined,
  pageX: undefined,
  currColWidth: undefined,
  nextColWidth: undefined,
  hasBeenResizedOnce: false,

  isReordering: undefined,

  cRectHeight: undefined,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case C.STORE_C_RECT_HEIGHT:
      return {
        ...state,
        cRectHeight: payload,
      };

    case C.SET_COLUMNS:
      return {
        ...state,
        columns: [...payload],
      };

    case C.SHOW_COLUMN:
      return {
        ...state,
        columns: state.columns.map(c => (c.property === payload ? { ...c, hide: false } : c)),
      };

    case C.HIDE_COLUMN:
      return {
        ...state,
        columns: state.columns.filter(c => !c.hide).length > 1
          ? state.columns.map(c => (c.property === payload ? { ...c, hide: true } : c))
          : state.columns
        ,
      };

    case C.SET_IS_REORDERING:
      return {
        ...state,
        isReordering: payload,
      };
    case C.SET_COLUMN_ORDER: {
      const [propA, propB] = payload;

      const newCols = [...state.columns];
      const idxA = newCols.findIndex(c => c.property === propA);
      const idxB = newCols.findIndex(c => c.property === propB);

      newCols.splice(idxA, 1, state.columns[idxB]);
      newCols.splice(idxB, 1, state.columns[idxA]);

      const idxBVisibleOnly = newCols.filter(x => !x.hide).findIndex(c => c.property === propA);

      return {
        ...state,
        columns: newCols,
        isReordering: idxBVisibleOnly,
        // isReordering: payload,
      };
    }
    case C.SET_IS_RESIZING:
      const propIdx = state.columns.findIndex(c => c.property === payload.property);
      const siblingsProp = propIdx > -1
        ? state.columns.slice(propIdx + 1).find(x => !x.hide)
        : undefined
      ;

      const nenwColumns = state.columns
        .map(c => (c.property === payload.property
          ? { ...c, width: payload.currColWidth }
          : c)
        )
        .map(c => (c.property === (siblingsProp || {}).property
          ? { ...c, width: payload.nextColWidth ? payload.nextColWidth : c.width }
          : c)
        );

      return {
        ...state,
        hasBeenResizedOnce: true,
        isResizing: payload.isResizing,
        pageX: payload.pageX,
        isResizingProp: payload.property,
        isResizingNextProp: (siblingsProp || {}).property,
        currColWidth: payload.currColWidth,
        nextColWidth: payload.nextColWidth,
        columns: nenwColumns,
      };

    case C.SET_COLUMN_W:
      const newCols = state.columns
        .map(c => (c.property === payload.property ? { ...c, width: payload.width } : c));

      const hasBeenResizedOnce = (
        newCols.filter(x => x.width !== undefined).length
        === newCols.length
      );

      return {
        ...state,
        hasBeenResizedOnce,
        columns: newCols,
      };

    case C.SET_CURR_COLUMN_W:
      return {
        ...state,
        columns: state.columns
          .map(c => (c.property === state.isResizingProp ? { ...c, width: payload } : c)),
      };

    case C.SET_NEXT_COLUMN_W:
      return {
        ...state,
        columns: state.columns
          .map(c => (c.property === state.isResizingNextProp ? { ...c, width: payload } : c)),
      };

    default:
      return { ...state };
  }
};


/*
*/


/*
// eslint-disable-next-line no-shadow
const middleware = reducer => (state, { type, payload }) => {
  console.log('––––––––––––––––––––––––––––', '\n');
  console.log(`ACTION ${type} PREV STATE  :`, '\n', state);
  console.log(`ACTION ${type} WITH PAYLOAD:`, '\n', JSON.parse(JSON.stringify(payload)));
  const newState = reducer(state, { type, payload });
  console.log(`ACTION ${type} NEXT STATE  :`, '\n', newState);
  return newState;
};

export default middleware(reducer);
 */

export default reducer;
