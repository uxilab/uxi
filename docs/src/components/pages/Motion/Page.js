import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import SlideInWhenInBoundExample from './SlideInWhenInBoundExample';
import RAWSlideInWhenInBoundExample from '!raw-loader!./SlideInWhenInBoundExample';

import SlideInWhenInBoundOutOftheBox from './SlideInWhenInBoundOutOftheBox';
import RAWSlideInWhenInBoundOutOftheBox from '!raw-loader!./SlideInWhenInBoundOutOftheBox';

import LoaderExample from './LoaderExample';
import RAWLoaderExample from '!raw-loader!./LoaderExample';

const MotionPage = () => (
  <div>
    <Title text="Motion" />
    <P>
      Element with Motion (animation/transition).
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWLoaderExample}
          component
          title="Loader"
          description={'loaders'}
          hasPadding
        >
          <LoaderExample />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          code={RAWSlideInWhenInBoundOutOftheBox}
          component
          title="SlideInWhenInBound"
          description={' out of the box, no props, default "slideUpIn"'}
          hasPadding
        >
          <SlideInWhenInBoundOutOftheBox />
        </CodeExample>
      </li>
      <br />
      {/* <li>
        <CodeExample
          code={RAWSlideInWhenInBoundExample}
          component
          title="SlideInWhenInBound"
          description={'specifying `anchor` props'}
          hasPadding
        >
          <SlideInWhenInBoundExample />
        </CodeExample>
      </li> */}

    </ul>
  </div>
);

export default MotionPage;
