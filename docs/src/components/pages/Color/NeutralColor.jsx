import React from 'react';
import { palette } from 'uxi/Theme';
import Box from 'uxi/Box';
import Text, { Title } from 'uxi/Text';
import { SimpleLayout } from 'uxi/Layout';

const NeutralColor = () => (
  <Box>
    <SimpleLayout columnNumber={3}>
      <Box style={{ background: palette.neutral.darkest }} margin="S" padding="M">
        <Text style={{ color: palette.white }} type="button">Black 89%</Text>
      </Box>
      <Box style={{ background: palette.neutral.darker }} margin="S" padding="M">
        <Text style={{ color: palette.white }} type="button">Black 79%</Text>
      </Box>
      <Box style={{ background: palette.neutral.dark }} margin="S" padding="M">
        <Text style={{ color: palette.white }} type="button">Black 55%</Text>
      </Box>
      <Box style={{ background: palette.neutral.neutral }} margin="S" padding="M">
        <Text type="button">Black 40%</Text>
      </Box>
      <Box style={{ background: palette.neutral.lightDark }} margin="S" padding="M">
        <Text type="button">Black 15%</Text>
      </Box>
      <Box style={{ background: palette.neutral.lightestDark }} margin="S" padding="M">
        <Text type="button">Black 5%</Text>
      </Box>
    </SimpleLayout>
  </Box>
);

export default NeutralColor;
