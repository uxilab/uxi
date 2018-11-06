import React from 'react';
import HorizontalMenu from 'uxi/Menu/HorizontalMenu';
import VerticalMenu from 'uxi/Menu/VerticalMenu';
import {
  DropDownMenu,
  Separator,
} from 'uxi/Menu';
import {
  DropDown,
} from 'uxi/internal/DropDown';
import { Button } from 'uxi/Button';
import { Merge, Arrowdown } from 'uxi/Icons';
import MenuItem from 'uxi/Menu/MenuItem';

const ExampleSimple = () => (
<div>
  <h3>Horizontal menu:</h3>
  <HorizontalMenu>
    <MenuItem style={{ backgroundColor: 'red' }}>Stuff goes here</MenuItem>
    <MenuItem>and here</MenuItem>
    <MenuItem>or here</MenuItem>
  </HorizontalMenu>
  <h3>VerticalMenu menu:</h3>
  <VerticalMenu>
    <MenuItem>Stuff goes here</MenuItem>
    <MenuItem>and here</MenuItem>
    <MenuItem>or here</MenuItem>
  </VerticalMenu>
  <ul>
    <li>
      <h3>{'<DropDownMenu>'}</h3>
      <DropDownMenu button={<div>{'I\'m the button'} </div>} anchor="right">
        <MenuItem>
          <a href="#">other children</a>
        </MenuItem>
        <MenuItem>
          <a href="#">are just items</a>
        </MenuItem>
        <Separator label="I'm a separator" />
        <MenuItem>
          <div>not a link</div>
        </MenuItem>
        <MenuItem>
          <div>not a link</div>
        </MenuItem>
      </DropDownMenu>
    </li>
    <li>
      <h3>{'<DropDownMenu>'}</h3>
      <DropDownMenu
        button={<div style={{ border: '1px solid black', padding: '4px' }}><div>{'I\'m the button'} </div> </div>}
      >
        <Separator label="NO COLOR" />
        <MenuItem>
          <a href="#">other children</a>
        </MenuItem>
        <MenuItem>
          <a href="#">are just items</a>
        </MenuItem>

        <Separator label="BLUE" />
        <MenuItem>
          <a href="#">someOtherChildren</a>
        </MenuItem>
        <MenuItem>
          <a href="#">another one</a>
        </MenuItem>

        <Separator label="RED" />
        <MenuItem>
          <a href="#">someOtherChildren</a>
        </MenuItem>
        <MenuItem>
          <a href="#">another one</a>
        </MenuItem>

        <Separator />
        <MenuItem>
          <a href="#">someOtherChildren</a>
        </MenuItem>
        <MenuItem>
          <a href="#">another one</a>
        </MenuItem>
      </DropDownMenu>
    </li>
    <li>
      <h3>{'<DropDown />:'} (leaveOpenOnClickOutside = true)</h3>
      <DropDown
        leaveOpenOnClickOutside
        main={<span>Trigger</span>}
        items={[
          <div key="1">stuff goes here</div>,
          <div key="2">and here</div>,
          <div key="3">or here</div>,
        ]}
      />
    </li>
    <li>
      <h3>Drop Down with button (not working) :</h3>
      <DropDown
        main={<Button onClick={() => window.alert('###########')} icon={<Merge />}>Trigger</Button>}
        items={[
          <div key="1">stuff goes here</div>,
          <div key="2">and here</div>,
          <div key="3">or here</div>,
        ]}
      />
    </li>
    <li>
      <h3>{'Drop Down with button (button needs to be inert: Button({ inert: true })) :'}</h3>
      <DropDown
        main={<Button inert onClick={() => window.alert('###########')} icon={<Merge />}>Trigger</Button>}
        items={[
          <div key="1">stuff goes here</div>,
          <div key="2">and here</div>,
          <div key="3">or here</div>,
        ]}
      />
    </li>
    <li>
      <h3>Drop Down:</h3>
      <DropDown
        main={<a >Trigger <Arrowdown size="14" /></a>}
        items={[
          <div key="1">stuff goes here</div>,
          <div key="2">and here</div>,
          <div key="3">or here</div>,
        ]}
      />
    </li>
  </ul>
  </div>
);

export default ExampleSimple;
