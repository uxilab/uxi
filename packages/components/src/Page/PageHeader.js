import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  padding-left: 30px;
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

const PageHeader = ({ title, icon, children }) => (
  <Container>
    <TitleContainer>
      {icon && <IconWrapper>
        {icon}
      </IconWrapper>}
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
