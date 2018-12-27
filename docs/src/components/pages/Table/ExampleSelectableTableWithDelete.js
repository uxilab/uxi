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

const getRandomString = () => Math.random().toString(36).substring(7);

class ExampleSelectableTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: [
        'Tyrion Lannister',
      ],
      characters: [
        {
          name: 'Jon Snow',
          title: 'King in the North',
          allegiance: 'House Stark',
        },
        {
          name: 'Daenerys Targaryen',
          title: 'Queen of the Andals and the First Men',
          allegiance: 'House Stark',
        },
        {
          name: 'Tyrion Lannister',
          title: 'Hand of the Queen',
          allegiance: 'House Lannister',
        },
        {
          name: 'Jaime Lannister',
          title: 'Lord Commander of the Kingsguard',
          allegiance: 'House Lannister',
        },
      ],
    };
  }
  onChangeHandler(event, selectedRows, selectedRowsValues) {
    this.setState({
      selection: selectedRowsValues,
    });
  }

  deletedSelectedHandler() {
    const { selection, characters } = this.state;
    const result = [];

    characters.forEach((character) => {
      const hasDeleted = selection.find(s => s === character.name);
      if (!hasDeleted) {
        result.push(character);
      }
    });

    this.setState({
      selection: [],
      characters: result,
    });
  }

  addRow() {
    this.setState({
      characters: [...this.state.characters, { name: getRandomString(), title: getRandomString(), allegiance: getRandomString() }],
    });
  }

  render() {
    const { selection, characters } = this.state;
    return (
      <div>
        <P>
          <Button disabled={!selection || selection.length === 0} onClick={() => { this.deletedSelectedHandler(); }}>
          Delete selected
          </Button>
          <Button style={{ marginLeft: '15px' }} onClick={() => { this.addRow(); }}>
          Add rows
          </Button>
        </P>
        <Table onChange={this.onChangeHandler.bind(this)} initialSelected={selection} multiSelectable selectable>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Titles</TableHeaderColumn>
              <TableHeaderColumn>Allegiance</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              characters.map(character => (
                <TableRow key={character.name} value={character.name}>
                  <TableRowColumn>{character.name}</TableRowColumn>
                  <TableRowColumn>{character.title}</TableRowColumn>
                  <TableRowColumn>{character.allegiance}</TableRowColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ExampleSelectableTable;
