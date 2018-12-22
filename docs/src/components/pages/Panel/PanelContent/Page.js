import React from 'react';
import { Title } from 'uxi/Text';
import CodeExample from '../../../CodeExample';

import PanelContentExample from './PanelContentExample';
import RAWPanelContentExample from '!raw-loader!./PanelContentExample';
import RAWMDPanelContentExample from '!raw-loader!./PanelContentExample.md';


const PanelContentPage = () => (
  <div>
    <Title text="PanelContent" />
    <ul>
      <li>
        <CodeExample
          code={RAWPanelContentExample}
          component
          title="Simple PanelContent"
          description={RAWMDPanelContentExample}
          hasPadding
        >
          <PanelContentExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default PanelContentPage;
