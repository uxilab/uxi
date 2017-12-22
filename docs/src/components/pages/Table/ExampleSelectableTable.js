import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
} from 'uxi/Table';
import {
  Arrowup as ArrowUp,
  Arrowdown as ArrowDown,
  Options as OptionsIcon,
} from 'uxi/Icons';
import Button, { IconButton } from 'uxi/Button';
import { AvatarWithName } from 'uxi/Img';
import { DropDown } from 'uxi/internal/DropDown';
import { User } from 'uxi/Icons';

const handleChange = (event, selectedRows, availableRows) => {
  console.log('event', event)
  console.log('selectedRows', selectedRows)
  console.log('availableRows', availableRows)
  console.log('rows ' + selectedRows.map(x => x + 1).join(', ') + ' are selected')
}

const ExampleSelectableTable = () => (
  <Table multiSelectable selectable onChange={handleChange}>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Chosen Entities</TableHeaderColumn>
        <TableHeaderColumn>Added By</TableHeaderColumn>
        <TableHeaderColumn>Is only For Admin</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow readOnly>
        <TableRowColumn>Person</TableRowColumn>
        <TableRowColumn>/Company</TableRowColumn>
        <TableRowColumn>
          <span style={{ color: 'rgb(158, 158, 158)' }}>
            System
          </span>
        </TableRowColumn>
        <TableRowColumn>False</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Email Thread</TableRowColumn>
        <TableRowColumn>
          <span>/EmailThread</span>
          <br />
          <span>/Email</span>
        </TableRowColumn>
        <TableRowColumn>Simona Superstart</TableRowColumn>
        <TableRowColumn>False</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Email Thread</TableRowColumn>
        <TableRowColumn>
          <span>/EmailThread</span>
          <br />
          <span>/Email</span>
        </TableRowColumn>
        <TableRowColumn>Simona Superstart</TableRowColumn>
        <TableRowColumn>False</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default ExampleSelectableTable;
