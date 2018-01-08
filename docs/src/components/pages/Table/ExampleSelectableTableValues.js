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
import { Switch } from 'uxi/Input';

const handleChange = (event, selectedRows, selectedRowsValues, availableRows, availableRowsValues) => {
  console.log('event', event)
  console.log('selectedRows', selectedRows)
  console.log('availableRows', availableRows)
  console.log('rows ' + selectedRows.map(x => x + 1).join(', ') + ' are selected')
  console.log('rows values ' + selectedRowsValues.join(', ') + ' are selected')
}

const ExampleSelectableTable = () => (
  <Table multiSelectable selectable onChange={handleChange}>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Chosen Entities</TableHeaderColumn>
        <TableHeaderColumn>Added By</TableHeaderColumn>
        <TableHeaderColumn>Is only For Admin</TableHeaderColumn>
        <TableHeaderColumn>Active</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow value={'false'} readOnly>
        <TableRowColumn>Person</TableRowColumn>
        <TableRowColumn>/Company</TableRowColumn>
        <TableRowColumn>
          <span style={{ color: 'rgb(158, 158, 158)' }}>
            System
          </span>
        </TableRowColumn>
        <TableRowColumn>False</TableRowColumn>
        <TableRowColumn><Switch /></TableRowColumn>
      </TableRow>
      <TableRow value={'foo'} locked readOnly>
        <TableRowColumn>Email Thread</TableRowColumn>
        <TableRowColumn>
          <span>/EmailThread</span>
          <br />
          <span>/Email</span>
        </TableRowColumn>
        <TableRowColumn>
          <span style={{ color: 'rgb(158, 158, 158)' }}>
            System
          </span>
        </TableRowColumn>
        <TableRowColumn>False</TableRowColumn>
        <TableRowColumn><Switch /></TableRowColumn>
      </TableRow>
      <TableRow value={{ o: 'value' }} locked>
        <TableRowColumn>Email Thread</TableRowColumn>
        <TableRowColumn>
          <span>/EmailThread</span>
          <br />
          <span>/Email</span>
        </TableRowColumn>
        <TableRowColumn>Simona Superstart</TableRowColumn>
        <TableRowColumn>False</TableRowColumn>
        <TableRowColumn><Switch /></TableRowColumn>
      </TableRow>
      <TableRow value={'bar'}>
        <TableRowColumn>Email Thread</TableRowColumn>
        <TableRowColumn>
          <span>/EmailThread</span>
          <br />
          <span>/Email</span>
        </TableRowColumn>
        <TableRowColumn>Simona Superstart</TableRowColumn>
        <TableRowColumn>False</TableRowColumn>
        <TableRowColumn><Switch /></TableRowColumn>
      </TableRow>
      <TableRow value='fooobar'>
        <TableRowColumn>Email Thread</TableRowColumn>
        <TableRowColumn>
          <span>/EmailThread</span>
          <br />
          <span>/Email</span>
        </TableRowColumn>
        <TableRowColumn>Simona Superstart</TableRowColumn>
        <TableRowColumn>False</TableRowColumn>
        <TableRowColumn><Switch /></TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default ExampleSelectableTable;
