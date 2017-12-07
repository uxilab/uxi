import React from 'react';
import TextField from './TextField';
import styled from 'styled-components';
import { IconButton } from 'uxi/Button';
import { Merge } from 'uxi/Icons';

const TextFieldWithIconUI = styled.div`
  disaply: flex;
  align-items: center;
`;

const TextFieldWithIcon = (props) => {
  const { icon } = props;
  return (
    <TextFieldWithIconUI>
      <TextField {...props} />
      <IconButton icon={<Merge />} />
      {icon}
    </TextFieldWithIconUI>
  );
};

TextFieldWithIcon.displayName = 'TextFieldWithIcon';

export default TextFieldWithIcon;
