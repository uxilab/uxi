import React from 'react';
import {
  Text,
  Title,
  ErrorText,
} from 'uxi/Classic';

const TextDefinition = () => (
  <table>
    <tbody>
      <tr>
        <td>
          <Title>
            Title
          </Title>
        </td>
      </tr>
      <tr>
        <td>
          <Text type="caption">
            Caption
          </Text>
        </td>
      </tr>
      <tr>
        <td>
          <Text>
            Regular Text
          </Text>
        </td>
      </tr>
      <tr>
        <td>
          <Text size="s">
            Smaller Text
          </Text>
        </td>
      </tr>
      <tr>
        <td>
          <Text size="l">
            Larger Text
          </Text>
        </td>
      </tr>
      <tr>
        <td>
          <ErrorText>
            Error Text
          </ErrorText>
        </td>
      </tr>
    </tbody>
  </table>
);

export default TextDefinition;
