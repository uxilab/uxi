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
  AvatarWithName
} from 'uxi/Img';
import {
  ProgressBar
} from 'uxi/Indicator';

const ExampleSimple = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Titles</TableHeaderColumn>
        <TableHeaderColumn>Allegiance</TableHeaderColumn>
        <TableHeaderColumn>Swag Level</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>
          <AvatarWithName name="Jon Snow"/>
        </TableRowColumn>
        <TableRowColumn>
          <p>King in the North</p>
          <p>Lord Commander of the Night's Watch</p>
        </TableRowColumn>
        <TableRowColumn>House Stark</TableRowColumn>
        <TableRowColumn><ProgressBar min={0} max={100} value={40} /></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>
          <AvatarWithName name="Daenerys Targaryen"/>
        </TableRowColumn>
        <TableRowColumn>
          <p>Queen of the Andals and the First Men</p>
          <p>Lord Commander of the Night's Watch</p>
          <p>Princess of Dragonstone</p>
        </TableRowColumn>
        <TableRowColumn>
          House Targaryen
        </TableRowColumn>
        <TableRowColumn><ProgressBar min={0} max={100} value={45} /></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>
          <AvatarWithName name="Tyrion Lannister"/>
        </TableRowColumn>
        <TableRowColumn>
          <p>Hand of the Queen</p>
          <p>Lord of Casterly Rock</p>
        </TableRowColumn>
        <TableRowColumn>House Lannister</TableRowColumn>
        <TableRowColumn><ProgressBar min={0} max={100} value={80} /></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>
          <AvatarWithName name="Jaime Lannister"/>
        </TableRowColumn>
        <TableRowColumn>
          <p>Lord Commander of the Kingsguard</p>
          <p>Kingslayer</p>
        </TableRowColumn>
        <TableRowColumn>House Lannister</TableRowColumn>
        <TableRowColumn><ProgressBar min={0} max={100} value={50} /></TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default ExampleSimple;
