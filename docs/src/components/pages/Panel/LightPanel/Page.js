import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../../CodeExample';

import LightPanelExample from './LightPanelExample';
import RAWLightPanelExample from '!raw-loader!./LightPanelExample';
import RAWMDLightPanelExample from '!raw-loader!./LightPanelExample.md';

import LightPanelControlledScrollExample from './LightPanelControlledScrollExample';
import RAWLightPanelControlledScrollExample from '!raw-loader!./LightPanelControlledScrollExample';
import RAWMDLightPanelControlledScrollExample from '!raw-loader!./LightPanelControlledScrollExample.md';


const LightPanelPage = () => (
  <div>
  <Title text="LightPanel" />
    <ul>
      <li>
        <CodeExample
          code={RAWLightPanelExample}
          component
          title="Light Panel"
          description={RAWMDLightPanelExample}
          hasPadding
        >
          <LightPanelExample />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWLightPanelControlledScrollExample}
          component
          title="Light Panel (controlled height/scroll)"
          description={RAWMDLightPanelControlledScrollExample}
          hasPadding
        >
          <LightPanelControlledScrollExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default LightPanelPage;
