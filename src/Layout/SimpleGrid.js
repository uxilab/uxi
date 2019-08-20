import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const getValueWithUnit = prop => (
  typeof prop === 'string'
    ? prop
    : `${prop}px`
);

/* eslint-disable indent */
export const gridUICSSString = css`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;  /* for IE11 only */
  flex-flow: row wrap;  /* for IE11 only */
  display: grid;
  grid-gap: ${({ gap }) => `${getValueWithUnit(gap)}`};
  grid-template-columns: ${({ itemWidth, columnAutoSizing }) =>
    `repeat(auto-${columnAutoSizing}, minmax(${getValueWithUnit(itemWidth)}, 1fr));`
  };
  grid-template-rows: ${({ itemHeight, rowAutoSizing }) =>
    `repeat(auto-${rowAutoSizing}, minmax(${getValueWithUnit(itemHeight)}, 1fr));`
  };
  font-size: inherit;
  & > * {
    box-sizing: border-box;
    ${({ itemWidth }) => `min-width: ${getValueWithUnit(itemWidth)}`};
    ${({ itemHeight }) => `height: ${getValueWithUnit(itemHeight)} !important`};
  }

  /**
   * add gap for flax layout, (no margin collapse with flex)
   * Target exclusively IE10 and above: */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    & {
      padding: ${({ gap }) => `${getValueWithUnit(gap)}`};
    }
    & > * {
      margin: ${({ gap }) => (gap ? getValueWithUnit(gap) : '0')};
      ${({ itemWidth }) => `max-width: ${getValueWithUnit(itemWidth)}`};
      ${({ itemWidth }) => `width: ${getValueWithUnit(itemWidth)}`};
      ${({ itemHeight }) => `max-height: ${getValueWithUnit(itemHeight)}`};
      ${({ itemHeight }) => `height: ${getValueWithUnit(itemHeight)} !important`};
      ${({ itemHeight }) => `min-height: ${getValueWithUnit(itemHeight)} !important`};
    }
  }
`;

export const GridUI = styled.div`
  ${gridUICSSString};
`;
/* eslint-enable indent */

GridUI.defaultProps = {
  style: {},
  itemWidth: '100%',
  gap: 0,
  columnAutoSizing: 'fill',
  rowAutoSizing: 'fill',
};

GridUI.propTypes = {
  style: PropTypes.object,
  itemWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  columnAutoSizing: PropTypes.string,
  rowAutoSizing: PropTypes.string,
};

export default GridUI;
