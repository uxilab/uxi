import React from 'react';
import styled from 'styled-components';
import SuggestAnEdit from './components/SuggestAnEdit';
import { Flex, flexCSSString } from 'uxi/Layout';
import { Externallink } from 'uxi/Icons';
import { ButtonLink } from 'uxi/Button';
import MarkdownElement from './components/MarkdownElement/MarkDownElement';

const ExtendedFlex = styled.div`
  /* margin-right: auto; */
  ${flexCSSString};
  & a {
    display: flex;
  }
`;

const Footer = props => (
  <footer style={{ marginTop: '128px' }}>
    <hr />
    <Flex style={{ flexFlow: 'row wrap', justifyContent: 'space-between' }}>
      <ExtendedFlex>
        <MarkdownElement
          style={{ border: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}
          text={'[![npm version](https://badge.fury.io/js/uxi.svg)](https://badge.fury.io/js/uxi)'}
        />
      </ExtendedFlex>
      <Flex>
        <ButtonLink
          onClick={() => {
            window.open('https://github.com/uxilab');
          }}
          iconAfter
          icon={<Externallink />}
          text="uxilab"
        />
        {/* <a
          href="https://github.com/uxilab"
          target="__blank"
          rel="noreferrer"
        >
          <Flex style={{ paddingLeft: '6px', paddingBottom: '1px' }}>
            uxilab
            <Externallink size="11" />
          </Flex>
        </a> */}
      </Flex>
      <SuggestAnEdit />
    </Flex>
  </footer>
);

export default Footer;
