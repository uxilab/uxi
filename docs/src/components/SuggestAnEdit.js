import React from 'react';
import { FlatButton } from 'uxi/Button';
import { Github, Externallink } from 'uxi/Icons';
import { Flex } from 'uxi/Layout';

const SuggestAnEdit = props => (
  <FlatButton
    icon={<Github />}
    text={(
      <Flex>
          suggest an Edit
        <Flex style={{ paddingLeft: '6px', paddingBottom: '1px' }}>
          <Externallink size="11" />
        </Flex>
      </Flex>
    )}
    onClick={(e) => {
      const href = window.location && window.location.href;

      window.open(
        encodeURI(
          `https://github.com/uxilab/uxi/issues/new?title=Suggestion&body=${href}`
        )
      );
    }}
  />
);

export default SuggestAnEdit;
