import React from 'react';
import { palette } from 'uxi/Theme';
import Box from 'uxi/Box';
import Text, { Title } from 'uxi/Text';
import { SimpleLayout } from 'uxi/Layout';

const PrimaryColor = () => (
  <Box>
    <SimpleLayout columnNumber={3}>
      <Box style={{ background: palette.primary.dark }} margin="S" padding="M" isDark>
        <Text>Dark {palette.primary.dark}</Text>
      </Box>
      <Box style={{ background: palette.primary.main }} margin="S" padding="M" isDark>
        <Text>Main {palette.primary.main}</Text>
      </Box>
      <Box style={{ background: palette.primary.light }} margin="S" padding="M" isDark>
        <Text>Light {palette.primary.light}</Text>
      </Box>
    </SimpleLayout>
  </Box>
);

export default PrimaryColor;
