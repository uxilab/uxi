import React from 'react';
import Text, { MarketingText } from 'uxi/Text';

const MarketingFontDefinition = () => (
  <table>
    <tbody>
      <tr>
        <td>
          <Text type="caption">
        Title
          </Text>
        </td>
        <td>
          <MarketingText type="title">
        30px
          </MarketingText>
        </td>
        <td>
          <MarketingText type="title">
        Fira Sans Bold
          </MarketingText>
        </td>
      </tr>
      <tr>
        <td>
          <Text type="caption">
        Heading
          </Text>
        </td>
        <td>
          <MarketingText type="heading">
        18px
          </MarketingText>
        </td>
        <td>
          <MarketingText type="heading">
        Fira Sans medium
          </MarketingText>
        </td>
      </tr>
      <tr>
        <td>
          <Text type="caption">
        Body
          </Text>
        </td>
        <td>
          <MarketingText>
        16px
          </MarketingText>
        </td>
        <td>
          <MarketingText>
        Source Sans regular
          </MarketingText>
        </td>
      </tr>
      <tr>
        <td>
          <Text type="caption">
        Button
          </Text>
        </td>
        <td>
          <MarketingText type="button">
        14px
          </MarketingText>
        </td>
        <td>
          <MarketingText type="button">
        Source Sans regular
          </MarketingText>
        </td>
      </tr>
    </tbody>
  </table>
);

export default MarketingFontDefinition;
