import React, { Component } from 'react';
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
import { P } from 'uxi/Classic';

class ExampleSelectableTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: [],
    };
  }
  onChangeHandler(event, selectedRows, selectedRowsValues) {
    this.setState({
      selection: selectedRowsValues,
    });
  }

  render() {
    const { selection } = this.state;
    return (
      <div>
        <P>
        Selection: {JSON.stringify(selection)}
        </P>
        <Table onChange={this.onChangeHandler.bind(this)} selectable>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Titles</TableHeaderColumn>
              <TableHeaderColumn>Allegiance</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow value="Jon Snow">
              <TableRowColumn>Jon Snow</TableRowColumn>
              <TableRowColumn>King in the North</TableRowColumn>
              <TableRowColumn>House Stark</TableRowColumn>
            </TableRow>
            <TableRow value="Daenerys Targaryen">
              <TableRowColumn>Daenerys Targaryen</TableRowColumn>
              <TableRowColumn>Queen of the Andals and the First Men</TableRowColumn>
              <TableRowColumn>House Targaryen </TableRowColumn>
            </TableRow>
            <TableRow value="Tyrion Lannister">
              <TableRowColumn>Tyrion Lannister</TableRowColumn>
              <TableRowColumn>Hand of the Queen</TableRowColumn>
              <TableRowColumn>House Lannister</TableRowColumn>
            </TableRow>
            <TableRow value="Jaime Lannister">
              <TableRowColumn>Jaime Lannister</TableRowColumn>
              <TableRowColumn>Lord Commander of the Kingsguard</TableRowColumn>
              <TableRowColumn>House Lannister</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ExampleSelectableTable;
