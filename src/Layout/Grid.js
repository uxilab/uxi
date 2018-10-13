import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import PropsMapperContainerQueries from '../internal/PropsMapperContainerQueries';

const rules = [
  {
    minWidth: 0,
    mapper: ({ itemWidth, containerWidth, gap }) => {
      console.log('itemWidth, containerWidth, gap');
      console.log(itemWidth, containerWidth, gap);
      console.log('containerWidth');
      console.log(Math.ceil(containerWidth));


      const columns = Math.floor(
        (Math.round(containerWidth - gap) / (itemWidth + (gap * 2)))
      );

      console.log('columns');
      console.log(columns);

      return {
        columns,
      };
    },
  },
];
/* eslint-disable indent */
const GridUI = styled.div`
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
      padding: 8px;
      width: ${({ columns, itemWidth, gap }) => (
        `${(
            (columns * (itemWidth + (gap * 2)))
            + (gap * 2)
        )}px`
      )
    };
    & > * { margin: 8px; }
  }
`;
/* eslint-enable indent */

const Grid = (props) => {
  const {
    style,
    children,
    gap,
    itemWidth,
    itemHeight,
  } = props;

  return (
    <PropsMapperContainerQueries
      rules={rules}
      itemWidth={itemWidth}
      gap={gap}
    >
      <GridUI
        itemHeight={itemHeight}
        style={style}
      >
        {children}
      </GridUI>
    </PropsMapperContainerQueries>
  );
};

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
