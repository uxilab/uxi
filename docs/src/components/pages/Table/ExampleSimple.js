import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
} from '../../../../../src/Table';
import Button, { IconButton } from '../../../../../src/Button';
import {
  Arrowup as ArrowUp,
  Arrowdown as ArrowDown,
  Options as OptionsIcon,
} from '../../../../../src/Icons';
import { AvatarWithName } from '../../../../../src/Img';
import { DropDown } from '../../../../../src/Menu';
import { User } from 'uxi/Icons'

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
          <TableRowColumn style={{
            float: 'right',
            paddingRight: '30px',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <div>
              <div style={{ marginBottom: '5px' }}>
                <ArrowUp size={9} style={{ cursor: 'pointer' }} />
              </div>
              <div>
                <ArrowDown size={9} style={{ cursor: 'pointer' }} />
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
          <TableRowColumn style={{
            float: 'right',
            paddingRight: '30px',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <div>
              <div style={{ marginBottom: '5px' }}>
                <ArrowUp size={9} style={{ cursor: 'pointer' }} />
              </div>
              <div>
                <ArrowDown size={9} style={{ cursor: 'pointer' }} />
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
          <TableRowColumn style={{
            float: 'right',
            paddingRight: '30px',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <div>
              <div style={{ marginBottom: '5px' }}>
                <ArrowUp size={9} style={{ cursor: 'pointer' }} />
              </div>
              <div>
                <ArrowDown size={9} style={{ cursor: 'pointer' }} />
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
          <TableRowColumn style={{
            float: 'right',
            paddingRight: '30px',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <div>
              <div style={{ marginBottom: '5px' }}>
                <ArrowUp size={9} style={{ cursor: 'pointer' }} />
              </div>
              <div>
                <ArrowDown size={9} style={{ cursor: 'pointer' }} />
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
          <TableRowColumn style={{
            float: 'right',
            paddingRight: '30px',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <div>
              <div style={{ marginBottom: '5px' }}>
                <ArrowUp size={9} style={{ cursor: 'pointer' }} />
              </div>
              <div>
                <ArrowDown size={9} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    <br />
    <br />
    <hr />
    <br />
    <br />
    <Table multiSelectable selectable >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>First Name</TableHeaderColumn>
          <TableHeaderColumn>Last Name</TableHeaderColumn>
          <TableHeaderColumn>Job Title</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Phone number</TableHeaderColumn>
          <TableHeaderColumn>{/* actions menu */}</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn>
            <AvatarWithName
              imgSize="42"
              src="https://i.pinimg.com/originals/51/cd/7b/51cd7bce077ddd20cf09f3654d8d0eb1.png"
              name={<a href="google.com">Billy</a>}
            />
          </TableRowColumn>
          <TableRowColumn>
            Doe
          </TableRowColumn>
          <TableRowColumn>
            Boss
          </TableRowColumn>
          <TableRowColumn>
            Boss@boss.com
          </TableRowColumn>
          <TableRowColumn>
            555-555-555
          </TableRowColumn>
          <TableRowColumn>
            <DropDown
              style={{
                float: 'right',
                display: 'flex',
                alignItems: 'center',
              }}
              main={<div><OptionsIcon size="18" /></div>}
              items={[
                <a key="1" href="https://google.com" >action 1</a>,
                <a key="2" href="https://google.com" >action 2</a>,
                <a key="3" href="https://google.com" >action 3</a>,
              ]}
            />
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    <br />
    <br />
    <hr />
    <br />
    <br />
    <h3>TAble without select and without multiselect</h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>First Name</TableHeaderColumn>
          <TableHeaderColumn>Last Name</TableHeaderColumn>
          <TableHeaderColumn>Job Title</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Phone number</TableHeaderColumn>
          <TableHeaderColumn>Actions</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn>
            <AvatarWithName
              imgSize="42"
              src="https://i.pinimg.com/originals/51/cd/7b/51cd7bce077ddd20cf09f3654d8d0eb1.png"
              name={<a href="google.com">Billy</a>}
            />
          </TableRowColumn>
          <TableRowColumn>
            Doe
          </TableRowColumn>
          <TableRowColumn>
            Boss
          </TableRowColumn>
          <TableRowColumn>
            Boss@boss.com
          </TableRowColumn>
          <TableRowColumn>
            555-555-555
          </TableRowColumn>
          <TableRowColumn>
            <DropDown
              style={{
                // float: 'right',
                // display: 'flex',
                // alignItems: 'center',
              }}
              main={<Button inert><OptionsIcon size="18" /></Button>}
              items={[
                <a key="1" href="https://google.com" >action 1</a>,
                <a key="2" href="https://google.com" >action 2</a>,
                <a key="3" href="https://google.com" >action 3</a>,
              ]}
            />
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    <br />
    <br />
    <hr />
    <br />
    <br />
    <h3>TAble without multiselectable but WITH selectable</h3>
    <Table selectable>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>First Name</TableHeaderColumn>
          <TableHeaderColumn>Last Name</TableHeaderColumn>
          <TableHeaderColumn>Job Title</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Phone number</TableHeaderColumn>
          <TableHeaderColumn>Actions</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn>
            <AvatarWithName
              imgSize="42"
              // src="https://i.pinimg.com/originals/51/cd/7b/51cd7bce077ddd20cf09f3654d8d0eb1.png"
              icon={<User />}
              name={<a href="google.com">Billy</a>}
            />
          </TableRowColumn>
          <TableRowColumn>
            Doe
          </TableRowColumn>
          <TableRowColumn>
            Boss
          </TableRowColumn>
          <TableRowColumn>
            Boss@boss.com
          </TableRowColumn>
          <TableRowColumn>
            555-555-555
          </TableRowColumn>
          <TableRowColumn>
            <DropDown
              style={{
                // float: 'right',
                // display: 'flex',
                // alignItems: 'center',
              }}
              main={<Button inert><OptionsIcon size="18" /></Button>}
              items={[
                <a key="1" href="https://google.com" >action 1</a>,
                <a key="2" href="https://google.com" >action 2</a>,
                <a key="3" href="https://google.com" >action 3</a>,
              ]}
            />
          </TableRowColumn>
        </TableRow>

        <TableRow>
          <TableRowColumn>
            <AvatarWithName
              imgSize="42"
              src="https://i.pinimg.com/originals/51/cd/7b/51cd7bce077ddd20cf09f3654d8d0eb1.png"
              name={<a href="google.com">Billy</a>}
            />
          </TableRowColumn>
          <TableRowColumn>
            Doe
          </TableRowColumn>
          <TableRowColumn>
            Boss
          </TableRowColumn>
          <TableRowColumn>
            Boss@boss.com
          </TableRowColumn>
          <TableRowColumn>
            555-555-555
          </TableRowColumn>
          <TableRowColumn>
            <DropDown
              style={{
                // float: 'right',
                // display: 'flex',
                // alignItems: 'center',
              }}
              main={<Button inert><OptionsIcon size="18" /></Button>}
              items={[
                <a key="1" href="https://google.com" >action 1</a>,
                <a key="2" href="https://google.com" >action 2</a>,
                <a key="3" href="https://google.com" >action 3</a>,
              ]}
            />
          </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default ExampleSimple;
