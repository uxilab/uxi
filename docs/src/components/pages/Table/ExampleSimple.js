import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
} from '../../../../../src/Table';
import Button from '../../../../../src/Button';
import {
  Arrowup as ArrowUp,
  Arrowdown as ArrowDown,
} from '../../../../../src/Icons';

const ExampleSimple = () => (
  <div>
    <div style={{ paddingLeft: '80px' }}>
      <Button click={() => { }} disabled message="Delete" />
    </div>
    <Table multiSelectable selectable >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Chosen Entities</TableHeaderColumn>
          <TableHeaderColumn>Added By</TableHeaderColumn>
          <TableHeaderColumn>Is only For Admin</TableHeaderColumn>
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow readOnlyText="System Filter Cannot Be Modified" readOnly>
          <TableRowColumn>All</TableRowColumn>
          <TableRowColumn>All Entities</TableRowColumn>
          <TableRowColumn>
            <span style={{ color: 'rgb(158, 158, 158)' }}>
              System
            </span>
          </TableRowColumn>
          <TableRowColumn>False</TableRowColumn>
          <TableRowColumn style={{ float: 'right', paddingRight: '30px' }}>
            <div style={{ marginTop: '15px' }}>
              <div style={{ marginBottom: '5px' }}>
                <ArrowUp size={7} style={{ cursor: 'pointer' }} />
              </div>
              <div>
                <ArrowDown size={7} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </TableRowColumn>
        </TableRow>
        <TableRow readOnly>
          <TableRowColumn>Company</TableRowColumn>
          <TableRowColumn>/Company</TableRowColumn>
          <TableRowColumn>
            <span style={{ color: 'rgb(158, 158, 158)' }}>
              System
            </span>
          </TableRowColumn>
          <TableRowColumn>False</TableRowColumn>
          <TableRowColumn style={{ float: 'right', paddingRight: '30px' }}>
            <div style={{ marginTop: '15px' }}>
              <div style={{ marginBottom: '5px' }}>
                <ArrowUp size={7} style={{ cursor: 'pointer' }} />
              </div>
              <div>
                <ArrowDown size={7} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </TableRowColumn>
        </TableRow>
        <TableRow readOnly>
          <TableRowColumn>Person</TableRowColumn>
          <TableRowColumn>/Company</TableRowColumn>
          <TableRowColumn>
            <span style={{ color: 'rgb(158, 158, 158)' }}>
              System
            </span>
          </TableRowColumn>
          <TableRowColumn>False</TableRowColumn>
          <TableRowColumn style={{ float: 'right', paddingRight: '30px' }}>
            <div style={{ marginTop: '15px' }}>
              <div style={{ marginBottom: '5px' }}>
                <ArrowUp size={7} style={{ cursor: 'pointer' }} />
              </div>
              <div>
                <ArrowDown size={7} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </TableRowColumn>
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
          <TableRowColumn style={{ float: 'right', paddingRight: '30px' }}>
            <div style={{ marginTop: '15px' }}>
              <div style={{ marginBottom: '5px' }}>
                <ArrowUp size={7} style={{ cursor: 'pointer' }} />
              </div>
              <div>
                <ArrowDown size={7} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default ExampleSimple;
