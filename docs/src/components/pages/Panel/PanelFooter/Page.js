import React from 'react';
import { Title } from 'uxi/Text';
import CodeExample from '../../../CodeExample';

import PanelFooterExample from './PanelFooterExample';
import RAWPanelFooterExample from '!raw-loader!./PanelFooterExample';
import RAWMDPanelFooterExample from '!raw-loader!./PanelFooterExample.md';

import PanelFooterWithExtraExample from './PanelFooterWithExtraExample';
import RAWPanelFooterWithExtraExample from '!raw-loader!./PanelFooterWithExtraExample';
import RAWMDPanelFooterWithExtraExample from '!raw-loader!./PanelFooterWithExtraExample.md';


const PanelFooterPage = () => (
  <div>
    <Title text="PanelFooter" />
    <ul>
      <li>
        <CodeExample
          code={RAWPanelFooterExample}
          component
          title="Simple PanelFooter"
          description={RAWMDPanelFooterExample}
          hasPadding
        >
          <PanelFooterExample />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWPanelFooterWithExtraExample}
          component
          title="PanelFooter with extra"
          description={RAWMDPanelFooterWithExtraExample}
          hasPadding
        >
          <PanelFooterWithExtraExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default PanelFooterPage;
