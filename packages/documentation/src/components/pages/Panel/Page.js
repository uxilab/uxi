import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import PanelExample from './PanelExample';
import RAWPanelExample from '!raw-loader!./PanelExample';

import LightPanelExample from './LightPanelExample';
import RAWLightPanelExample from '!raw-loader!./LightPanelExample';

import LightPanelControlledScrollExample from './LightPanelControlledScrollExample';
import RAWLightPanelControlledScrollExample from '!raw-loader!./LightPanelControlledScrollExample';


const ButtonPage = () => (
  <div>
  <Title text="Panels" />
  <P>
    Panel rocks!
  </P>
    <ul>
      <li>
      <Title text="Panel" />
      <P>
        Simple Panel.
      </P>
        <CodeExample
          code={RAWPanelExample}
          component
          title="Panel"
          hasPadding
        >
          <PanelExample />
        </CodeExample>
      </li>
      <li>
        <Title text="Light Panel" />
        <P>
          Panel.
        </P>
        <CodeExample
          code={RAWLightPanelExample}
          component
          title="Light Panel"
          hasPadding
        >
          <LightPanelExample />
        </CodeExample>
      </li>
      <li>
        <Title text="Light Panel controlled height/scroll" />
        <P>
          Panel with a height and a content that scrolls while keeping the header and footer 'sticky'.
        </P>
        <CodeExample
          code={RAWLightPanelControlledScrollExample}
          component
          title="Light Panel controlled height/scroll"
          hasPadding
        >
          <LightPanelControlledScrollExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default ButtonPage;
