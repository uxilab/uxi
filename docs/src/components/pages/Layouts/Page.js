import React from 'react';
import CodeExample from '../../CodeExample';

import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';

import ExampleContentWithExtra from './ExampleContentWithExtra';
import RAWExampleContentWithExtra from '!raw-loader!./ExampleContentWithExtra';

import {
  Spacer
} from 'uxi/Base';
import {
  H1,
  H2,
  H3,
  P
} from 'uxi/Classic';

const Layouts = () => (
  <div>
     <Spacer margin="stack-l">
      <H1>Layout</H1>
      <H2>Intro</H2>
      <P>
        UXI has a simple user interface hierarchy, designed to make the user interaction easy and intuitive.
      </P>
      <P>
        Most page designs in UXI should be based on one of three basic layout types:
      </P>
      <ul>
        <li>Dashboard Layout (a 1 column layout)</li>
        <li>List Layout (typically a 1, 2 column layout)</li>
        <li>Task Layout (typically a 1, 2, 3 column layout)</li>
      </ul>
      <P>
        The dashboard layout contains only one floorplan. The list layout generally contains 1 or 2 flooplans next to each other, the main flooplan being on the left. The task layout is more flexible and can have a more flexible numbers of floorplan.
      </P>
      <P>
        A layout must always contain 1 dynamic panel. A dynamic panel is an element which takes the full space available.
      </P>
      <P>
        The dynamic panel generally contains the more important piece of information for your layout. Typically, a list, a form, some tiles,...
      </P>
    </Spacer>
    <Spacer margin="stack-l">
      <H2>Floorplan</H2>
      <P>
        The floorplan defines the structure of the controls used, and how to handle different use cases.
      </P>
      <P>
        The floorplan is the place where you can put other UXI Elements to built your page.
      </P>
    </Spacer>

    <CodeExample
      code={RAWExampleContentWithExtra}
      component
      title="Layout"
      hasPadding
    >
      <ExampleContentWithExtra />
    </CodeExample>
    <br />
    <CodeExample
      code={RAWExampleSimple}
      component
      title="Layout"
      hasPadding
    >
      <ExampleSimple />
    </CodeExample>
  </div>
);

export default Layouts;
