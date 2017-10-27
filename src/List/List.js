import React from 'react';
import PropTypes from 'prop-types';

let count = 0;
const getKey = () => count++;
/**
 *  This compo is just a "repeater" it has not styling option
 *  it "just maps stuff" and render in provided compo and DO NOT wraps it
 */
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
      // UPDATE :
      // let's forgot this expactation is too constrianing
      <ComponentToRender key={getKey()} {...item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return content;
};

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default List;
