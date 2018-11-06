import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
} from 'uxi/Table';

const ExampleSimpleTableWithSeparateRow = () => (
  <Table sperateRows>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Titles</TableHeaderColumn>
        <TableHeaderColumn>Allegiance</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>Jon Snow</TableRowColumn>
        <TableRowColumn>King in the North</TableRowColumn>
        <TableRowColumn>House Stark</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Daenerys Targaryen</TableRowColumn>
        <TableRowColumn>Queen of the Andals and the First Men</TableRowColumn>
        <TableRowColumn>House Targaryen </TableRowColumn>
      </TableRow>
      <TableRow locked>
        <TableRowColumn>Tyrion Lannister</TableRowColumn>
        <TableRowColumn>Hand of the Queen</TableRowColumn>
        <TableRowColumn>House Lannister</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Jaime Lannister</TableRowColumn>
        <TableRowColumn>Lord Commander of the Kingsguard</TableRowColumn>
        <TableRowColumn>House Lannister</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default ExampleSimpleTableWithSeparateRow;
