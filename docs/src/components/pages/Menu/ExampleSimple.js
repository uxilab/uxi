import React from 'react';
import Menu from 'uxi/Menu/Menu';
import ButtonMenu from '../../../../../src/Menu/ButtonMenu/ButtonMenu';

const menuDescriptor = [
  {
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
    <Menu menuDescriptor={menuDescriptor} />

    <br />
    <br />
    <br />
    <br />

    <ButtonMenu visibleOverflow={true}>
      <Menu menuDescriptor={menuDescriptor} />
    </ButtonMenu>
  </div>
);

export default ExampleSimple;
