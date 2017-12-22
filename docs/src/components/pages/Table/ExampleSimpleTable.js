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
    <h3>Condensed table</h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn onClick={() => console.log('Name')}>Name</TableHeaderColumn>
          <TableHeaderColumn onClick={() => console.log('Chosen Entities')}>Chosen Entities</TableHeaderColumn>
          <TableHeaderColumn onClick={() => console.log('Added By')}>Added By</TableHeaderColumn>
          <TableHeaderColumn onClick={() => console.log('Is only For Admin')}>Is only For Admin</TableHeaderColumn>
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
