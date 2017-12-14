import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { convertHexToRGBA } from '../Theme/colorManipulator';

const defaultBackgroundColor = '#ccc';

const isValidType = type => (
  type === 'error' ||
  type === 'warning' ||
  type === 'success' ||
  type === 'info' ||
  type === 'default'
);

const getPulse = theme =>
  keyframes`
   0% {
    box-shadow: 0 0 0 0 ${convertHexToRGBA(theme.palette.semantic.error, 0.9)};
    filter: brightness(98%);
  }
  50% {
    filter: brightness(106%);
  }
  70% {
    box-shadow: 0 0 0 5px rgba(204,169,44, 0);
    filter: brightness(110%);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    filter: brightness(98%);
  }
`;

const getGlowAnimation = (type, theme) => {
  const color = theme.palette.semantic[type];

  if (!color) { return keyframes``; }

  const t = keyframes`
      0% {
        user-select: ${props => console.log(props, color)};
        box-shadow: 0 0 4px transparent;
        filter: brightness(98%);
      }
      50% {
        filter: brightness(110%);
        box-shadow: 0 0 4px ${convertHexToRGBA(color, 0.9)};
      }
      100% {
        box-shadow: 0 0 4px transparent;
        filter: brightness(98%);
      }
    `;
  return t;
};

const StatusBadgeInlineWrapperUI = styled.div`
  display: inline-block;
`;

const StatusBadgeWrapperUI = styled.div`
  padding: 5px;
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: ${({ labelBefore }) => (labelBefore ? 'row-reverse' : 'row')};
`;

const StatusBadgeUI = styled.div`
  margin-right: 6px;
  width: 14px;
  height: 14px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${({ type, theme }) => (type === 'default'
    ? defaultBackgroundColor
    : theme.palette.semantic[type] || theme.palette.semantic.info // fallback
  )};
  animation: ${({ type, theme }) =>
    (type === 'error' ? getPulse(theme) : getGlowAnimation(type, theme))} 2s linear infinite;

`;

const StatusBadge = ({ label, type, labelBefore }) => {
  const cleanType = isValidType(type) ? type : 'default';

  return (
    <StatusBadgeInlineWrapperUI>
      <StatusBadgeWrapperUI labelBefore={labelBefore}>
        <StatusBadgeUI type={cleanType} label={label} labelBefore={labelBefore} />
        {label}
      </StatusBadgeWrapperUI>
    </StatusBadgeInlineWrapperUI>
  );
};

StatusBadge.propsTypes = {
  type: PropTypes.oneOf([
    'error', 'warning', 'info', 'success',
  ]),
  label: PropTypes.any,
};

StatusBadge.defaultProps = {
  type: 'default',
};

export default StatusBadge;
