import React from 'react';
import HorizontalMenu from '../../../../../src/Menu/HorizontalMenu';
import VerticalMenu from '../../../../../src/Menu/VerticalMenu';
import {
  DropDownMenu,
  Separator,
} from '../../../../../src/Menu';
import {
  DropDown,
} from '../../../../../src/internal/DropDown';
import { Button } from '../../../../../src/Button';
import { Merge, Arrowdown } from '../../../../../src/Icons';
import MenuItem from 'uxi/Menu/MenuItem';

const ExampleSimple = () => (
  <ul>
    {/* Those menus are broken : where does isDarkTheme comes
      from it's supposed to be on the context */}
    {/*
          <li>
          <h3>Horizontal menu:</h3>
          <HorizontalMenu>
            <ul>
              <li>stuff goes here</li>
              <li>and here</li>
              <li>or here</li>
            </ul>
          </HorizontalMenu>
        </li>
        <li>
          <h3>VerticalMenu menu:</h3>
          <VerticalMenu>
            <ul>
              <li>stuff goes here</li>
              <li>and here</li>
              <li>or here</li>
            </ul>
          </VerticalMenu>
        </li>
    */}
    <li>
      <h3>{'<DropDownMenu>'}</h3>
      <DropDownMenu button={<div>{'I\'m the button'} </div>} >
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
);

export default ExampleSimple;
