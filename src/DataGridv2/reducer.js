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

  isReordering: null,

  cRectHeight: undefined,

  baseCellWidth: 240,

  display: 'table',

  extraColWidth: null,

  selected: [],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case C.SET_SELECTED:
      return {
        ...state,
        selected: payload,
      };

    case C.SET_DISPLAY:
      return {
        ...state,
        display: payload,
      };

    case C.SET_EXTRA_COL_WIDTH:
      return {
        ...state,
        extraColWidth: payload > 0 ? payload : null,
      };

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
        columns: state.columns
          .map(c => (c.property === payload
            ? console.log(c.property, c.width) || {
              ...c,
              hide: false,
              // when display is table, intrinsic width will be added upon showing new column
              // see Th.componentDidUpdate
              // width: c.width || state.display !== 'table' ? state.baseCellWidth : undefined,
              ...(
                // eslint-disable-next-line no-nested-ternary
                c.width === undefined
                  ? state.display !== 'table' ? { width: state.baseCellWidth } : {}
                  : {}
              ),
            }
            : c
          )),
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
      if (state.isResizing) {
        return {
          ...state,
          isReordering: null,
        };
      }

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

      // const hasBeenResizedOnce = (
      //   newCols.filter(x => x.width !== undefined).length
      //   === newCols.length
      // );

      return {
        ...state,
        // hasBeenResizedOnce,
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
