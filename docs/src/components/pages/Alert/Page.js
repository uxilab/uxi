import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import AlertSemanticExample from './AlertSemanticExample';
import RAWAlertSemanticExample from '!raw-loader!./AlertSemanticExample';
import RAWMDAlertSemanticExample from '!raw-loader!./AlertSemanticExample.md';

import AlertBannerExample from './AlertBannerExample';
import RAWAlertBannerExample from '!raw-loader!./AlertBannerExample';
import RAWMDAlertBannerExample from '!raw-loader!./AlertBannerExample.md';

const AlertPage = () => (
  <div>
    <Title text="Alerts" />
    <ul>
      <li>
        <CodeExample
          code={RAWAlertSemanticExample}
          component
          title="Semantic alerts"
          description={RAWMDAlertSemanticExample}
          hasPadding
        >
          <AlertSemanticExample />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWAlertBannerExample}
          component
          title="Semantic alerts"
          description={RAWMDAlertBannerExample}
          hasPadding
        >
          <AlertBannerExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default AlertPage;
