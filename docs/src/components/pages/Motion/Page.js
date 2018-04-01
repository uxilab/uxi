import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';

import CodeExample from '../../CodeExample';
import SlideUpInWhenInBoundExample from './SlideUpInWhenInBoundExample';
import RAWSlideUpInWhenInBoundExample from '!raw-loader!./SlideUpInWhenInBoundExample';

const MotionPage = () => (
  <div>
    <Title text="Motion" />
    <P>
      Element with Motion (animation/transition).
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWSlideUpInWhenInBoundExample}
          component
          title="SlideUpInWhenInBoundExample"
          hasPadding
        >
          <SlideUpInWhenInBoundExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default MotionPage;
