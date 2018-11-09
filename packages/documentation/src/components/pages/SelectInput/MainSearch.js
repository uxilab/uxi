import React from 'react';
import { Flex } from 'uxi/Layout';
import { buttonResetStylesCSSString } from 'uxi/Button/buttonResetStyles';
import { Search } from 'uxi/Icons';
import MainInputSearchBadge from './MainInputSearchBadge';
import {
  SelectInputEntityPoolStyleOverload,
} from './MainSearchInputStyle';
import AutoComplete from './AutoComplete';
import styled from 'styled-components';
import SearchBoxPoolSelectIdentifier from './SearchBoxPoolSelectIdentifier';
import SearchSuggestionItem from './SearchSuggestionItem';

const backgroundColor = 'rgba(253, 253, 253, .12)';

const SearchBarUI = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchBoxUI = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  position: relative;
  border-radius: 0 3px 3px 0;
  background: ${backgroundColor};
  color: #fff;
  height: 34px;
`;

const SubmitInputUI = styled.button.attrs({
  type: 'submit',
  tabIndex: -1,
})`
  ${buttonResetStylesCSSString};
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 0 3px 3px 0;

  & {
    background: transparent;
    * {
      fill: #ffffff;
    }
    &:hover, &:focus {
      background: #cecece;
      background: rgba(253, 253, 253, .4);
      * {
        fill: #ffffff;
        fill: ${({ theme: { palette } }) => palette.primary.main};
      }
    }
  }
  flex-shrink: 1;
  flex-grow: 1;
`;


const InputUI = styled.input`
  ${buttonResetStylesCSSString};
  color: inherit;
  color: white;
  font-weight: 100;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  padding: 8px;
  height: 34px;
  width: 100%;
  flex-shrink: 1;
  flex-grow: 9;
  border-radius: 3px 0 0 3px;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    color: #cecece;
  }
  &:focus {

  }
  text-overflow: ellipsis;
  /* overflow: hidden; */
  white-space: nowrap;
  ${({ entityTypePoolIdentifier }) => (entityTypePoolIdentifier === '' // eslint-disable-line no-nested-ternary
    ? 'padding-right: 38px;'
    : entityTypePoolIdentifier === 'organization' ? 'padding-right: 164px;' : 'padding-right: 130px;')
  };
`;

const MainSearch = ({
  entityTypePoolIdentifier = [],
  onEntityPoolChange,
  suggestions = [],
  onSuggestionChange,
  onClick,
}) => {
  return (
    <SearchBarUI>
      <SelectInputEntityPoolStyleOverload>
        <SearchBoxPoolSelectIdentifier
          value={entityTypePoolIdentifier}
          onEntityPoolChange={onEntityPoolChange}
        />
      </SelectInputEntityPoolStyleOverload>
      <AutoComplete
        onChange={onSuggestionChange}
        Input={InputUI}
        placeholder="Search..."
      >
      {
        (suggestions || []).map((suggestion) => (
          <SearchSuggestionItem
            value={suggestion.Name}
            suggestion={suggestion}
          />
        ))
      }
      </AutoComplete>
      <SubmitInputUI onClick={onClick}>
        <Search size="18" />
      </SubmitInputUI>
  </SearchBarUI>
  )
};

export default MainSearch;
