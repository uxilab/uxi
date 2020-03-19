import { C } from './actions';

export const initialState = {
  columns: [],
  isResizing: false,
  isResizingProp: undefined,
  isResizingNextProp: undefined,
  pageX: undefined,
  // resizingColumnIndexes: undefined,
  currColWidth: undefined,
  nextColWidth: undefined,
  hasBeenResizedOnce: false,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case C.SET_COLUMNS:
      return {
        ...state,
        columns: [...payload],
      };

    case C.SHOW_COLUMN:
      return {
        ...state,
        columns: state.columns.map(c => (c.property === payload ? { ...c, show: true } : c)),
      };

    case C.HIDE_COLUMN:
      return {
        ...state,
        columns: state.columns.filter(c => c.show).length > 1
          ? state.columns.map(c => (c.property === payload ? { ...c, show: false } : c))
          : state.columns
        ,
      };

    // eslint-disable-next-line no-case-declarations
    case C.SET_IS_RESIZING:
      const propIdx = state.columns.findIndex(c => c.property === payload.property);
      const siblingsProp = propIdx > -1
        ? state.columns.slice(propIdx + 1).find(x => x.show)
        : undefined
      ;

      const nenwColumns = state.columns
        .map(c => (c.property === payload.property
          ? { ...c, width: payload.currColWidth }
          : c)
        )
        .map(c => (c.property === (siblingsProp || {}).property
          ? { ...c, width: payload.nextColWidth }
          : c)
        );

      return {
        ...state,
        hasBeenResizedOnce: true,
        isResizing: payload.isResizing,
        pageX: payload.pageX,
        isResizingProp: payload.property,
        isResizingNextProp: (siblingsProp || {}).property,
        // resizingColumnsIndex: payload.columnIndexes,
        currColWidth: payload.currColWidth,
        nextColWidth: payload.nextColWidth,
        columns: nenwColumns,
      };

    case C.SET_COLUMN_W:
      return {
        ...state,
        columns: state.columns
          .map(c => (c.property === payload.property ? { ...c, width: payload.width } : c)),
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
