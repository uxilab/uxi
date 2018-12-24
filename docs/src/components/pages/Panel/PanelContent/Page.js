import React from 'react';
import { Title } from 'uxi/Text';
import RAWPanelContent from '!raw-loader!uxi/Panel/PanelContent';
import CodeExample from '../../../CodeExample';
import { componentInfoToMD } from '../../../componentInfoToMD';

import PanelContentExample from './PanelContentExample';
import RAWPanelContentExample from '!raw-loader!./PanelContentExample';
import RAWMDPanelContentExample from '!raw-loader!./PanelContentExample.md';


const PanelContentPage = () => (
  <div>
    <Title text="PanelContent" />
    <ul>
      <li>
        <CodeExample
          code={RAWPanelContent}
          component
          title="PanelContent"
          description={componentInfoToMD(RAWPanelContent)}
          hasPadding
        >
        </CodeExample>
      </li>
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
