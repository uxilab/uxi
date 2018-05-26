import React from 'react';
import Box from 'uxi/Box';
import CodeExample from '../../CodeExample';
import { SimpleLayout } from 'uxi/Layout';
import ClassicDefinition from './ClassicDefinition';
import RAWClassicDefinition from '!raw-loader!./ClassicDefinition';
import TextDefinition from './TextDefinition';
import RAWTextDefinition from '!raw-loader!./TextDefinition'
import {
  Spacer
} from 'uxi/Base';
import {
  H1,
  H2,
  P
} from 'uxi/Classic';

const FontPage = () => (
  <div>
    <Spacer margin="stack-l">
      <H1>Typography</H1>
      <H2>Intro</H2>
      <P>
        UXI uses a set of open-sans system fonts. Our font stack in CSS includes Open-sans and sans-serif. These fonts are available for all languages supported by UXI.
      </P>
      <P>
        Using these simple and clean fonts ensures a minimalist style for all UXI applications. Their design also works well across all browsers, devices, and platforms.
      </P>
      <P>
        The font stack comes with a full unicode solution for special characters. Since the typography is integrated into the control set, customization is easy.
      </P>
    </Spacer>
    <Spacer margin="stack-l">
      <H2>Basic Font Style</H2>
      <CodeExample
          description="The following components are made for text oriented pages. It comes with a default style and a default margin to help your quickly designed nice pages without worrying about the spacing, sizing. We try to keep a fresh and minimalist style so your pages are readable for your users."
          code={RAWClassicDefinition}
          component
          hasPadding
        >
          <div style={{ display:'flex', flexDirection: 'column' }}>
          <ClassicDefinition />
          </div>
      </CodeExample>
    </Spacer>
    <Spacer margin="stack-l">
      <H2>Extra Font Style</H2>
      <CodeExample
          description="The following components are made mainly when you want to use Text inside your own components and do not want any spacing invovled. It comes with some default style in order to keep consistency accorss your application."
          code={RAWTextDefinition}
          component
          hasPadding
        > 
          <TextDefinition />
      </CodeExample>
    </Spacer>
  </div>
);

export default FontPage;
