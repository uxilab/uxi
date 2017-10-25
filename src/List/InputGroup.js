import React from 'react';

const styles = {
  overflow: 'hidden',
  display: 'inline-flex',
  borderRadius: '3px',
};

/**
 * TODO: what happens when the context does not provide enough width to render all ? -df
 */

let count = 0;
const getKey = () => count++;

const InputGroup = ({ children }) => (
  <div style={styles}>
    {React.Children.map(children, child => (
      React.cloneElement(child, {
        style: { ...child.props.style, borderRadius: 0 },
        key: getKey(),
      })
    ))}
  </div>
);

export default InputGroup;
