import React from 'react';
import { palette } from 'uxi/Theme';
import Box from 'uxi/Box';
import Text, { Title } from 'uxi/Text';
import { SimpleLayout } from 'uxi/Layout';

const AccentColor = () => (
  <Box>
    <Title text="Accent Colors" />
    <Text type="paragraph">
        Our accent color is used to emphasize actions and highlighted information: text, call-to-action, progress bars, selection controls, special buttons, slider, links…
    </Text>
    <SimpleLayout columnNumber={3}>
      <Box style={{ background: palette.accent.light }} margin="S" padding="M" isDark>
        <Text type="button">Dark {palette.accent.dark}</Text>
      </Box>
      <Box style={{ background: palette.accent.main }} margin="S" padding="M" isDark>
        <Text type="button">Main {palette.accent.main}</Text>
      </Box>
      <Box style={{ background: palette.accent.dark }} margin="S" padding="M" isDark>
        <Text type="button">Light {palette.accent.light}</Text>
      </Box>
    </SimpleLayout>
  </Box>
);

export default AccentColor;
