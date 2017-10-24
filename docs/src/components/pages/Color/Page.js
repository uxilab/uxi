import React from 'react';
import Text, { Title } from 'uxi/Text';
import PrimaryColor from './PrimaryColor';
import AccentColor from './AccentColor';
import SemanticColor from './SemanticColor';
import NeutralColor from './NeutralColor';
import ChartColor from './ChartColor';

const FontPage = () => (
  <div>
    <Title text="Color" />
    <Text type="paragraph">
      Cluedin uses a specific color palette to create brand recognition. Our palette consists of primary, accent, semantic, neutral and visual colors.
    </Text>
    <Title text="Primary Colors" />
    <Text type="paragraph">
      Our primary color is usually used for headers
    </Text>
    <PrimaryColor />
    <AccentColor />
    <SemanticColor />
    <NeutralColor />
    <ChartColor />
  </div>
);

export default FontPage;
