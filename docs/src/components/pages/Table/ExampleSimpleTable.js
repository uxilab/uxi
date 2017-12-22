import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
} from 'uxi/Table';
import Button, { IconButton } from 'uxi/Button';
import {
  Arrowup as ArrowUp,
  Arrowdown as ArrowDown,
  Options as OptionsIcon,
} from 'uxi/Icons';
import { AvatarWithName } from 'uxi/Img';
import { DropDown } from 'uxi/internal/DropDown';
import { User } from 'uxi/Icons';

const ExampleSimple = () => (
  <div>
    <Table>
      <TableHeader>
        <TableRow onClick={() => console.log('clicked header row')}>
          <TableHeaderColumn onClick={() => console.log('clicked Name')}>Name</TableHeaderColumn>
          <TableHeaderColumn onClick={() => console.log('clicked Chosen Entities')}>Chosen Entities</TableHeaderColumn>
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
        <TableRow onClick={() => console.log('clicked 2nd row')}>
          <TableRowColumn onClick={() => console.log('clicked 2nd row 1st cell')}>Email Thread</TableRowColumn>
          <TableRowColumn onClick={() => console.log('clicked 2nd row 2nd cell')}>
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
    <br />
  </div>
);

export default ExampleSimple;
