import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';
import { componentInfoToMD } from '../../componentInfoToMD';
import RAWPanel from '!raw-loader!uxi/Panel/Panel';

import PanelExample from './PanelExample';
import RAWPanelExample from '!raw-loader!./PanelExample';
import RAWMDPanelExample from '!raw-loader!./PanelExample.md';

const PanelPage = () => (
  <div>
    <Title text="Panel" />
    <ul>
      <li>
        <CodeExample
          code={RAWPanel}
          component
          title="Panel"
          description={componentInfoToMD(RAWPanel)}
          hasPadding
        >
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWPanelExample}
          component
          title="Panel example"
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
