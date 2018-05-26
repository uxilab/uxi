import React from 'react';
import { palette } from 'uxi/Theme';
import Box from 'uxi/Box';
import Text, { Title } from 'uxi/Text';
import { SimpleLayout } from 'uxi/Layout';

const AccentColor = () => (
  <Box>
    <SimpleLayout columnNumber={3}>
      <Box style={{ background: palette.accent.light }} margin="S" padding="M">
        <Text style={{ color: palette.pureWhite }}type="button">Dark {palette.accent.dark}</Text>
      </Box>
      <Box style={{ background: palette.accent.main }} margin="S" padding="M">
        <Text style={{ color: palette.white }}>Main {palette.accent.main}</Text>
      </Box>
      <Box style={{ background: palette.accent.dark }} margin="S" padding="M">
        <Text style={{ color: palette.lightGrey }}>Light {palette.accent.light}</Text>
      </Box>
    </SimpleLayout>
  </Box>
);

export default AccentColor;
