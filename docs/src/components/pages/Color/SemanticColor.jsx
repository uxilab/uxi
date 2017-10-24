import React from 'react';
import { palette } from 'uxi/Theme';
import Box from 'uxi/Box';
import Text, { Title } from 'uxi/Text';
import { SimpleLayout } from 'uxi/Layout';

const SemanticColor = () => (
  <Box>
    <Title text="Semantic Colors" />
    <Text type="paragraph">
        These colors are used for error, success, warning and information messages.
    </Text>
    <SimpleLayout columnNumber={3}>
      <Box style={{ background: palette.semantic.error }} margin="S" padding="M" isDark>
        <Text type="button">Error {palette.semantic.error}</Text>
      </Box>
      <Box style={{ background: palette.semantic.warning }} margin="S" padding="M">
        <Text type="button">Warning {palette.semantic.warning}</Text>
      </Box>
      <Box style={{ background: palette.semantic.info }} margin="S" padding="M" isDark>
        <Text type="button">Info {palette.semantic.info}</Text>
      </Box>
    </SimpleLayout>
  </Box>
);

export default SemanticColor;
