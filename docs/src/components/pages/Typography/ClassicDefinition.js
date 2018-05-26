import React from 'react';
import Text from 'uxi/Text';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
} from 'uxi/Classic';

const ClassicDefinition = () => (
  <table>
    <tbody>
      <tr>
        <td>
          <H1>
            Header 1
          </H1>
        </td>
        <td>
          28px
        </td>
      </tr>
      <tr>
        <td>
          <H2>
            Header 2
          </H2>
        </td>
        <td>
          22px
        </td>
      </tr>
      <tr>
        <td>
          <H3>
            Header 3
          </H3>
        </td>
        <td>
          20px
        </td>
      </tr>
      <tr>
        <td>
          <H4>
            Header 4
          </H4>
        </td>
        <td>
          18px
        </td>
      </tr>
      <tr>
        <td>
          <H5>
            Header 5
          </H5>
        </td>
        <td>
          16px
        </td>
      </tr>
      <tr>
        <td>
          <H6>
            Header 6
          </H6>
        </td>
        <td>
          14px
        </td>
      </tr>
        <tr>
          <td>
            <P>
              Paragraph
            </P>
          </td>
          <td>
            14px
          </td>
        </tr>
    </tbody>
  </table>
);

export default ClassicDefinition;
