import React from 'react';
import { palette } from 'uxi/Theme';
import Box from 'uxi/Box';
import Text, { Title } from 'uxi/Text';
import { SimpleLayout } from 'uxi/Layout';

const ChartColor = () => (
  <Box>
    <Title text="Chart Colors" />
    <Text type="paragraph">
        This sequential color palette is used for data visualization.
    </Text>
    <SimpleLayout columnNumber={3}>
      <Box style={{ background: palette.charts.color1 }} margin="S" padding="M" isDark>
        <Text type="button">{palette.charts.color1}</Text>
      </Box>
      <Box style={{ background: palette.charts.color2 }} margin="S" padding="M" isDark>
        <Text type="button">{palette.charts.color2}</Text>
      </Box>
      <Box style={{ background: palette.charts.color3 }} margin="S" padding="M" isDark>
        <Text type="button">{palette.charts.color3}</Text>
      </Box>
      <Box style={{ background: palette.charts.color4 }} margin="S" padding="M" isDark>
        <Text type="button">{palette.charts.color4}</Text>
      </Box>
      <Box style={{ background: palette.charts.color5 }} margin="S" padding="M" isDark>
        <Text type="button">{palette.charts.color5}</Text>
      </Box>
      <Box style={{ background: palette.charts.color6 }} margin="S" padding="M" isDark>
        <Text type="button">{palette.charts.color6}</Text>
      </Box>
    </SimpleLayout>
  </Box>
);

export default ChartColor;
