import React from 'react';
import SuggestAnEdit from './components/SuggestAnEdit';
import { Flex } from 'uxi/Layout';
import MarkdownElement from './components/MarkdownElement/MarkDownElement';

const ExtendedFlex = Flex.extend`
  margin-right: auto;
  & a {
    display: flex;
  }
`;

const Footer = props => (
  <footer style={{ marginTop: '128px' }}>
    <hr />
    <Flex>
      <ExtendedFlex>
        <MarkdownElement
          style={{ border: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}
          text={`[![npm version](https://badge.fury.io/js/uxi.svg)](https://badge.fury.io/js/uxi)`}
        />
      </ExtendedFlex>
      <SuggestAnEdit />
    </Flex>
  </footer>
)

export default Footer;
