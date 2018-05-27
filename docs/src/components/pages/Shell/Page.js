import React from 'react';
import {
  Spacer
} from 'uxi/Base';
import {
  H1,
  H2,
  H3,
  P
} from 'uxi/Classic';
import CodeExample from '../../CodeExample';
import LayoutSimple from './LayoutSimple';
import LayoutSimpleRawCode from '!raw-loader!./LayoutSimple';

const Shell = () => {
  return (
    <div>
      <Spacer margin="stack-l">
        <H1>Application Shell</H1>
        <H2>Intro</H2>
        <P>
          An application shell (or shell) architecture is one way to build a progressive web app that reliably and instantly loads on your users' screens, similar to what you see in native applications.
        </P>
        <P>
          The app "shell" is the minimal HTML, CSS and JavaScript required to power the user interface and when cached offline can ensure instant, reliably good performance to users on repeat visits. This means the application shell is not loaded from the network every time the user visits. Only the necessary content is needed from the network.
        </P>
        <P>
          For single-page applications with JavaScript-heavy architectures, an application shell is a go-to approach. This approach relies on aggressively caching the shell (using a service worker) to get the application running. Next, the dynamic content loads for each page using JavaScript. An app shell is useful for getting some initial HTML to the screen fast without a network.
        </P>
      </Spacer>
      <Spacer margin="stack-l">
        <H2>Specifications</H2>
        <P>
          This component takes 3 children and make a simple fully responsive, always at least full-height/width vertical header-content-footer layout.
        </P>
        <P>
          If you want to use it for the entire viewport, it's up to you to make the space around available. e.g. remove body margin, make the html and body full height...
        </P>
        <P>
          Same goes if you want a certain width or height you need to constrict/constrain the available space yourself.
        </P>
        <P>
          The current page you are reading is actually made of this Layout, you can inspect using reactDEvTool to see this
        </P>
      </Spacer>
      <CodeExample
        title="Base Shell"
        code={LayoutSimpleRawCode}
        component
        hasPadding
      >
        <LayoutSimple />
      </CodeExample>
    </div>
  );
};

export default Shell;
