import React from 'react';
import { Flex } from 'uxi/Layout';
import { SearchSuggestionButton } from './SearchSuggestionButton';
import RelativeTextPlaceholder from
  '../Placeholder/RelativeTextPlaceholder';


const SuggestionsLoader = ({ style }) => (
  <Flex style={{ justifyContent: 'flex-start', ...style }} >
    <SearchSuggestionButton style={{ paddingLeft: 0 }}>
      <RelativeTextPlaceholder style={{ width: '80px' }} />
    </SearchSuggestionButton>
  </Flex>
);

export default SuggestionsLoader;
