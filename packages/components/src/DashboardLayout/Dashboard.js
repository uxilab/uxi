import React from 'react';

/**
 *
 *   column width = 100% / column width.
 *   height row = unit = 200px
 *
 *  column = 2, row = 2
 *  A1 = 50%, 200px
 *  A2 = 50%, 200px
 *  B1 = 50%, 200px
 *  B2 = 50%, 200px
 *
 *  Cell:
 *  position:absolute
 *  left: 0,
 *  width: 50%
 *  height: 200px
 *
 *  A2:A3
 *
 *  position:absolute
 *  left: (X start * (column / total column) )
 *  width = (X end - X start ) * (100/total column),
 *  height: (row end - row start) * unit
 *  top: (row start & Y unit)
 *
 *  positionX: 2:3
 *  positionY: A:C
 *  left: (X start * (column / total column) )
 *  width = (X end - X start ) * (100/total column),
 *  height: (row end - row start) * unit
 *
 */
const makeGrid = (column, row) => ( // eslint-disable-line no-unused-vars
  null
);
/**
 * Creating an XLS like Grid.
 *
 * If 1 Column is passed and 1 Grid is passed, it will create a A1 position.
 *  Where A is the X axis and 1 the Y axis
 * If 4 Column and 3 Rows, it wills create the position
 *  A1 A2 A3
 *  B1 B2 B3
 *  C1 C2 C3
 *  D1 D2 D3
 *
 * If a component has a position:
 *  - A1 : it will take the 1st row and 1st column
 *  - A1:C1 : it will take the position A1, B1, C1
 *  - A1:A3 : it will take the position A1, A2, A3
 *
 * If a component passed positionX and positionY
 *  - positionX = 1:3 and position Y = A:B
 *    it will take the position A1 A2 A3, B1, B2, C1, C2
 *
 * It is up to the developer to make sure there is no conflict.
 */

const Dashboard = ({ children, column = 1, row = 1 }) => ( // eslint-disable-line no-unused-vars
  <div>
    {children}
  </div>
);

export default Dashboard;
