import React from 'react';
import Text, { MarketingText, Title } from 'uxi/Text';
import Box from 'uxi/Box';

const FontPage = () => (
  <div>
    <Title text="Font" />
    <Text type="paragraph">
      Cluedin uses two types of font famillies Source Sans and Fyra Sans.
    </Text>
    <Title text="Size and style" />
    <Text type="paragraph">
      For our website we use both Fira Sans and Source Sans, this was done in order to create visual separation between titles, headings and body text.
    </Text>
    <Box hasBorder>
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
    </Box>
    <Text type="paragraph">
      For our app we use only Source Sans.
    </Text>
    <Box hasBorder>
      <table>
        <tbody>
          <tr>
            <td>
              <Text type="caption">
              Title
              </Text>
            </td>
            <td>
              <Text type="title">
                24px
              </Text>
            </td>
            <td>
              <Text type="title">
                Source Sans bold
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="caption">
              Heading
              </Text>
            </td>
            <td>
              <Text type="heading">
                16px
              </Text>
            </td>
            <td>
              <Text type="heading">
                Source Sans semi bold
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="caption">
                Body
              </Text>
            </td>
            <td>
              <Text>
                14px
              </Text>
            </td>
            <td>
              <Text>
                Source Sans regular
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="caption">
                Button
              </Text>
            </td>
            <td>
              <Text type="button">
                14px
              </Text>
            </td>
            <td>
              <Text type="button">
                Source Sans regular
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="caption">
                Button
              </Text>
            </td>
            <td>
              <Text type="caption">
                12px
              </Text>
            </td>
            <td>
              <Text type="caption">
                Source Sans regular
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="link">
                Link
              </Text>
            </td>
            <td>
              <Text type="caption">
                12px
              </Text>
            </td>
            <td>
              <Text type="caption">
                Source Sans regular
              </Text>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
    <Title text="Colors" />
    <Box hasBorder>
      <table>
        <tbody>
          <tr>
            <td>
              <Text type="caption">
                Title
              </Text>
            </td>
            <td>
              <Text>
                Black 89%
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="caption">
              Heading
              </Text>
            </td>
            <td>
              <Text>
                Black 89%
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="caption">
                Body
              </Text>
            </td>
            <td>
              <Text>
                Black 89%
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="caption">
                Caption
              </Text>
            </td>
            <td>
              <Text>
                Black 55%
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="caption">
                Disabled
              </Text>
            </td>
            <td>
              <Text>
                Black 40%
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="caption">
                Link
              </Text>
            </td>
            <td>
              <Text>
                Green #15a9a9
              </Text>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  </div>
);

export default FontPage;
