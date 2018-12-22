import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import PanelExample from './PanelExample';
import RAWPanelExample from '!raw-loader!./PanelExample';
import RAWMDPanelExample from '!raw-loader!./PanelExample.md';

const PanelPage = () => (
  <div>
  <Title text="Panel" />
    <ul>
      <li>
        <CodeExample
          code={RAWPanelExample}
          component
          title="Simple Panel"
          description={RAWMDPanelExample}
          hasPadding
        >
          <PanelExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default PanelPage;
