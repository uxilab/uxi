import React from 'react';
import Menu from 'uxi/Menu/Menu';
import Process from 'uxi/Icons/Process';
import MlMenu from 'uxi/Menu/MlMenu/MlMenu';
import ButtonMenu from '../../../../../src/Menu/ButtonMenu/ButtonMenu';

const menuDescriptor = [
  {
    icon: <Process />,
    label: 'foobar - a way tooooooooooooooooooooooooooooooooooooo long label is clipped with ellipsis and a native tooltip',
    children: [
      {
        label: 'foo',
      }, {
        label: 'bar',
      },
    ],
  },
  { label: 'foobaz' },
  { label: 'barza' },
  { label: 'foobarza' },
  {
    label: 'barfoo',
    children: [
      {
        label: 'bar',
      }, {
        label: 'bar',
      }, {
        label: 'bar',
      }, {
        label: 'bar',
      }, {
        label: 'foo',
        children: [
          { label: 'f' },
          { label: 'o' },
          { label: 'o' },
          { label: 'b' },
          { label: 'a' },
          { label: 'r' },
          { label: 'z' },
          { label: 'a' },
        ],
      }, {
        label: 'bar',
      }, {
        label: 'bar',
      },
    ],
  },
];

const ExampleSimple = () => (
  <div>

    <MlMenu
      menuDescriptor={menuDescriptor}
    />


    <br />
    <br />
    <br />
    <br />


    <Menu menuDescriptor={menuDescriptor} />

    <br />
    <br />
    <br />
    <br />

    <ButtonMenu visibleOverflow>
      <Menu menuDescriptor={menuDescriptor} />
    </ButtonMenu>
  </div>
);

export default ExampleSimple;
