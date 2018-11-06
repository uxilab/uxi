import React from 'react';
import styled from 'styled-components';

const RequiredFieldWrapper = styled.span`
  font-weight: bold;
  color: red;
`;

const RequiredField = () => (
  <RequiredFieldWrapper>*</RequiredFieldWrapper>
);

export default RequiredField;
