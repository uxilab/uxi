import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UnstyledButton } from '../Button';
import { Flex } from '../Layout/Flex';
import Arrowleft from '../Icons/Arrowleft';


const Container = styled.div`
  background: #fff;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  border: 1px solid #D4DAD1;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  padding-left: ${({ onGoBack }) => (onGoBack ? 0 : '32px')};
  align-items: center;
`;

const IconWrapper = styled.div`
  padding-right: 15px;
`;

const Title = styled.div`
  display: inline-block;
  color: #37373a;
  font-size: 18px;
  font-family: 'Fira sans', sans-serif;
`;

const PageHeader = ({ title, icon, children, onGoBack, backLabel }) => (
  <Container>
    <TitleContainer onGoBack={onGoBack} >
      {
        onGoBack && (
          <React.Fragment>
            <UnstyledButton
              onClick={onGoBack}
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#8c8c8c',
              }}
            >
              <Flex
                style={{
                  boxSizing: 'border-box',
                  width: '80px',
                  height: '58px',
                  padding: '0 16px',
                }}
              >
                <Arrowleft size="13" style={{ color: '#26a29a', paddingRight: '6px' }} />
                { backLabel || 'Back'}
              </Flex>
            </UnstyledButton>
            <span
              style={{
                marginRight: '8px',
                fontSize: '16px',
                // fontWeight: 600,
                color: '#cecece',
              }}
            > | </span>
          </React.Fragment>
        )
      }
      {
        icon && (
          <IconWrapper>
            {icon}
          </IconWrapper>
        )
      }
      <Title>{title}</Title>
    </TitleContainer>
    <div>
      {children}
    </div>
  </Container>
);

PageHeader.disaplyName = 'PageHeader';

PageHeader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  icon: PropTypes.node,
};

PageHeader.defaultProps = {
  children: null,
  title: '',
  icon: null,
};

export default PageHeader;
