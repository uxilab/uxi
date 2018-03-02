import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';

import CodeExample from '../../CodeExample';

import ExampleCarrousel from './ExampleCarrousel';
import RAWExampleCarrousel from '!raw-loader!./ExampleCarrousel';

const ButtonPage = () => (
  <div>
    <Title text="Carrousel" />
    <P>
      Carrousel
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWExampleCarrousel}
          component
          title="Carrousel"
          hasPadding
        >
          <ExampleCarrousel />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default ButtonPage;
