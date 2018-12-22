import React from 'react';
import { P, H1 } from 'uxi/Classic';
import CodeExample from '../../CodeExample';

import BadgeExample from './BadgeExample';
import RAwBadgeExample from '!raw-loader!./BadgeExample';


const BadgePage = () => (
  <div>
    <H1>Badges</H1>
    <ul>
      <li>
        <CodeExample
          code={RAwBadgeExample}
          component
          title="Usage"
          // description={''}
          hasPadding
        >
          <BadgeExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default BadgePage;
