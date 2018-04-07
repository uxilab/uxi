import React from 'react';
import Text, { MarketingText, Title } from 'uxi/Text';
import Box from 'uxi/Box';
import { SimpleLayout } from 'uxi/Layout';
import FontDefinition from './FontDefinition';
import MarketingFontDefinition from './MarketingFontDefinition';
import ColorLightTheme from './ColorLightTheme';
import ColorDarkTheme from './ColorDarkTheme';
import { ErrorText } from '../../../../../src/Text';

const FontPage = () => (
  <div>
    <Title text="Font" />
    <Text type="paragraph">
      uxi uses Open Sans.
    </Text>
    { /*
    <ErrorText text="Error text" />
    <Text>
      Cluedin uses two types of font famillies Source Sans and Fyra Sans.
    </Text>
    <ErrorText inline> I'm an inline error text </ErrorText>
    <Text>
      Cluedin uses two types of font famillies Source Sans and Fyra Sans.
    </Text>

    <Title text="Size and style" />
    <Text type="paragraph">
      For our website we use both Fira Sans and Source Sans, this was done in order to create visual separation between titles, headings and body text.
    </Text>
    <Box hasBorder>
      <MarketingFontDefinition />
    </Box>
    <Text type="paragraph">
      For our app we use only Source Sans.
    </Text>
    <Box hasBorder>
      <FontDefinition />
    </Box>
    <Title text="Colors" />
    <SimpleLayout columnNumber={2}>
      <Box hasBorder>
        <ColorLightTheme />
      </Box>
      <Box isDark hasBorder>
        <ColorDarkTheme />
      </Box>
    </SimpleLayout>
    */ }
  </div>
);

export default FontPage;
