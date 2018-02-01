import React from 'react';
import styled from 'styled-components';

const OptionsUI = styled.div`
  display: border-box;
  cursor: pointer;
  padding: 2px 2px 2px 6px;
  background: white;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  &:hover {
    background-color: #f4f4f4;
  };
  &:active {
    background-color: #fff;
  };
`;

const Options = (props) => (
  <OptionsUI {...props} />
);

Options.displayName = 'Options';

export default Options;
