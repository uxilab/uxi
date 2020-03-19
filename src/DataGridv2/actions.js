
export const C = {
  SET_COLUMNS: 'SET_COLUMNS',
  SHOW_COLUMN: 'SHOW_COLUMN',
  HIDE_COLUMN: 'HIDE_COLUMN',
  SET_IS_RESIZING: 'SET_IS_RESIZING',
  SET_COLUMN_W: 'SET_COLUMN_W',
  SET_CURR_COLUMN_W: 'SET_CURR_COLUMN_W',
  SET_NEXT_COLUMN_W: 'SET_NEXT_COLUMN_W',
};

export const setColumns = payload => ({ type: C.SET_COLUMNS, payload });

export const showColumn = payload => ({ type: C.SHOW_COLUMN, payload });
export const hideColumn = payload => ({ type: C.HIDE_COLUMN, payload });

export const setIsResizing = payload => ({ type: C.SET_IS_RESIZING, payload });
export const setColumnWidth = payload => ({ type: C.SET_COLUMN_W, payload });
export const setCurrColumnWidth = payload => ({ type: C.SET_CURR_COLUMN_W, payload });
export const setNextColumnWidth = payload => ({ type: C.SET_NEXT_COLUMN_W, payload });


export default {
  showColumn,
  hideColumn,
  setIsResizing,
  setColumnWidth,
};
