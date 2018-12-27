import React from 'react';
import { P } from 'uxi/Classic';
import RAWThemeProvider from '!raw-loader!uxi/theme/ThemeProvider';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';
import { componentInfoToMD } from '../../componentInfoToMD';
import ShowCase from './ShowCase';


import PrimaryColor from './color/PrimaryColor';
import AccentColor from './color/AccentColor';
import SemanticColor from './color/SemanticColor';
import NeutralColor from './color/NeutralColor';
// import ChartColor from './color/ChartColor';

import RAWReadme from '!raw-loader!./theme.md';

console.log('RAWReadme', RAWReadme);


const Page = () => (
  <div>
    <Title text="Theme" />
    <ul>
      <li>
        <CodeExample
          code={RAWThemeProvider}
          component
          title="ThemeProvider"
          description={RAWReadme}
          hasPadding
        />
      </li>
      <li>
        <Title text="ShowCase" />
        <ShowCase />
      </li>
      <li>
        <Title text="Color" />
        <P type="paragraph">
          Cluedin uses a specific color palette to create brand recognition.
          Our palette consists of primary, accent, semantic, neutral and visual colors.
        </P>
        <Title text="Primary Colors" />
        <P type="paragraph">
          Our primary color is usually used for headers
        </P>
        <PrimaryColor />
        <AccentColor />
        <SemanticColor />
        <NeutralColor />
        {/* <ChartColor /> */}
      </li>
    </ul>
  </div>
);

export default Page;
