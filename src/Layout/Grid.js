import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import PropsMapperContainerQueries from '../internal/PropsMapperContainerQueries';
import { GridUI } from './SimpleGrid';

/* eslint-disable indent */
const ExtendedGridUI = GridUI.extend`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;  /* for IE11 only */
  flex-flow: row wrap;  /* for IE11 only */
  display: grid;
  grid-gap: ${({ gap }) => `${gap}px`};
  grid-template-columns: ${({ itemWidth }) => `repeat(auto-fill, minmax(${itemWidth}px, 1fr));`};
  font-size: inherit;
  & > * {
    box-sizing: border-box;
    ${({ itemWidth }) => `min-width: ${itemWidth}px`};
    ${({ itemHeight }) => `height: ${itemHeight}px`};
  }

  /**
   * add gap for flax layout, (no margin collapse with flex)
   * Target exclusively IE10 and above: */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    & {
      padding: ${({ gap }) => `${gap / 2}px`};
      margin-left: auto !important;
      margin-right: auto !important;
      width: ${({ columns, itemWidth, gap }) => (
          `${(
              ((columns) * (itemWidth + gap)) + (gap)
          )}px;`
        )
      };
      /* width: ${({ columns, itemWidth, gap }) => `calc(${columns} * calc(${itemWidth}px + ${2 * gap}px))`}; */
    }
    & > * {
      margin: ${({ gap }) => `${gap / 2}px`};
      ${({ itemWidth }) => `max-width: ${itemWidth}px`};
      ${({ itemWidth }) => `width: ${itemWidth}px`};    }
  }
`;
/* eslint-enable indent */

const rules = [
  {
    minWidth: 0,
    mapper: ({ itemWidth, containerWidth, gap }) => {
      const columns = Math.floor(
        (Math.floor(containerWidth) / (itemWidth + gap))
      );

      return {
        columns,
      };
    },
  },
];

const Grid = ({ children, ...restOfProps }) => (
  <PropsMapperContainerQueries
    {...restOfProps}
    rules={rules}
  >
    <ExtendedGridUI>
      {children}
    </ExtendedGridUI>
  </PropsMapperContainerQueries>
);

Grid.propTypes = {
  itemWidth: PropTypes.number,
  itemHeight: PropTypes.number,
  gap: PropTypes.number,
  style: PropTypes.object,
};

Grid.defaultProps = {
  itemWidth: 96,
  itemHeight: undefined,
  gap: 16,
  style: {},
};

Grid.displayName = 'Grid';

export default Grid;
