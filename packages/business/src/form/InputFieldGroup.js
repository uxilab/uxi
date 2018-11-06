import React from 'react';
import styled from 'styled-components';

const WrapperInputGroup = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  flex:1;
`;

const PrefixWrapper = styled.div`
    line-height: 32px;
    padding-right: 6px;
`;

const SufixWrapper = styled.div`
    line-height: 32px;
    padding-left: 6px;
`;

const InputFieldGroup = ({ children, prefix, sufix }) => (
    <WrapperInputGroup>
        {
            prefix &&
            <PrefixWrapper>
                {prefix}
            </PrefixWrapper>
        }
        <InputWrapper>
            {children}
        </InputWrapper>
        {
            sufix &&
            <SufixWrapper>
                {sufix}
            </SufixWrapper>
        }
    </WrapperInputGroup>
);

export default InputFieldGroup;
