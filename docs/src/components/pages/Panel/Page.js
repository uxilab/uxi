import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';
import PanelExample from './PanelExample';
import RAWPanelExample from '!file-loader!isomorphic-loader!./PanelExample.js'


const ButtonPage = () => (
  <div>
    <Title text="Panel" />
    <P>
      Panel.
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWPanelExample}
          component
          title="Playground"
          hasPadding
        >
          <PanelExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default ButtonPage;
