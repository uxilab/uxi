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

import IconsExample from './Icons';
import IconsExampleCode from '!raw-loader!./Icons';
import ColorSimple from './ColorSimple';
import ColorSimpleCode from '!raw-loader!./ColorSimple';
import CodeExample from '../../CodeExample';
import IconEvents from './IconEvents';
import IconEventsCode from '!raw-loader!./IconEvents';

export const Page = () => (
  <div>
     <Spacer margin="stack-l">
      <H1>Iconography</H1>
      <H2>Intro</H2>
      <P>
        UXI Icons have been created with a friendly, yet elegant style that is consistent in terms of size, stroke and balance. The icons are tailored for simple and direct user interaction, using metaphors that are easy to understand. Each icon has been hand-crafted, hand-hinted, and aligned in font format. The icons are essentially vector graphics which can be resized easily without compromising their appearance.
      </P>
    </Spacer>
    <Spacer margin="stack-l">
      <H2>Design Expression</H2>
      <P>
        The design expression for icons used within SAP products is created to work across all supported browsers, devices and operating systems. The style can be described as:
      </P>
      <ul>
        <li>Minimalistic</li>
        <li>Professional</li>
        <li>Neutral</li>
      </ul>
      <P>
        This approach is meant to communicate the simplicity, sophistication, and integrity represented by UXI. The style integrates basic geometric shapes in order to give a more prominent appearance.
      </P>
    </Spacer>
    <Spacer margin="stack-l">
      <H2>All Current Icons</H2>
      <P>
        An icon is missing missing? Contact us at <a href="mailto:hi@uxilab.eu">hi@uxilab.eu</a>. We would be happy to create it for you.
      </P>
      <CodeExample code={IconsExampleCode}>
        <IconsExample />
      </CodeExample>
    </Spacer>
    <Spacer margin="stack-l">
      <H2>Custom Color</H2>
      <P>
        Examples on how to override the icon color and the hover color for a given icon.
      </P>
      <CodeExample code={ColorSimpleCode}>
        <ColorSimple />
      </CodeExample>
    </Spacer>
    <Spacer margin="stack-l">
      <H2>Icon Events</H2>
      <P>
        Examples on how to interact with the Icon element.
      </P>
      <CodeExample code={IconEventsCode}>
        <IconEvents />
      </CodeExample>
    </Spacer>
  </div>
);

export default Page;
