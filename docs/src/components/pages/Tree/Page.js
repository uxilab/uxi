import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import ExampleSimple from './ExampleSimple';
import ExampleEmptyTree from './ExampleEmptyTree';

const TreePage = () => (
  <div>
    <Title text="Tree Component" />
    <P>
      The tree component helps you selecting values in a tree structure like folders and files.
    </P>
    <ExampleSimple />
    <P>
      Empty tree
    </P>
    <ExampleEmptyTree />
  </div>
);

export default TreePage;
