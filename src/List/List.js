import React from 'react';
import PropTypes from 'prop-types';

let count = 0;
const getKey = () => count++;

const List = ({ items, component }) => {
  const ComponentToRender = component;
  let content = (<div />);

  if (!ComponentToRender) { return []; }

  // If we have items, render them
  if (items) {
    content = items.map(item => (
      // yes there's some expactaction here,
      // we expet the compoentToRender will be some sort of listItem
      // that handles a receving item data in an item props
      <ComponentToRender key={getKey()} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <ul>
      {content}
    </ul>
  );
};

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default List;
