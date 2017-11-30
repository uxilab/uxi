import React from 'react';
import HorizontalMenu from '../../../../../src/Menu/HorizontalMenu';
import VerticalMenu from '../../../../../src/Menu/VerticalMenu';
import {
  DropDown,
} from '../../../../../src/Menu';
import { Button } from '../../../../../src/Button';
import { Merge, Arrowdown } from '../../../../../src/Icons';

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
      <h3>Drop Down: (leaveOpenOnClickOutside = true)</h3>
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
