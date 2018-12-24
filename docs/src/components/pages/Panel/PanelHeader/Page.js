import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../../CodeExample';
import { componentInfoToMD } from '../../../componentInfoToMD';
import RAWPanelHeader from '!raw-loader!uxi/Panel/PanelHeader';

// import PanelExample from './PanelExample';
// import RAWPanelExample from '!raw-loader!./PanelExample';

// import LightPanelExample from './LightPanelExample';
// import RAWLightPanelExample from '!raw-loader!./LightPanelExample';

import PanelHeaderExample from './PanelHeaderExample';
import RAWPanelHeaderExample from '!raw-loader!./PanelHeaderExample';

import PanelHeaderWithExtraExample from './PanelHeaderWithExtraExample';
import RAWPanelHeaderWithExtraExample from '!raw-loader!./PanelHeaderWithExtraExample';


const PanelHeaderPage = () => (
  <div>
  <Title text="PanelHeader" />
    <ul>
      <li>
        <CodeExample
          code={RAWPanelHeader}
          component
          title="PanelHeader"
          description={componentInfoToMD(RAWPanelHeader)}
          hasPadding
        >
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWPanelHeaderExample}
          component
          title="Panel Header"
          hasPadding
        >
          <PanelHeaderExample />
        </CodeExample>
      </li>
      <li>
        <P>

        </P>
        <CodeExample
          code={RAWPanelHeaderWithExtraExample}
          component
          title="Panel Header with extra"
          hasPadding
        >
          <PanelHeaderWithExtraExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default PanelHeaderPage;
