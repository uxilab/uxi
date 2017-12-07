import React from 'react';

const styles = {
  overflow: 'hidden',
  display: 'inline-flex',
  borderRadius: '3px',
  border: '#dcdcdc',
};

/**
 * TODO: what happens when the context/parentDomBox does not provide enough width to render all inline ? -df
 */
let count = 0;
const getKey = () => count++;

const InputGroup = ({ children }) => (
  <div style={styles}>
    {
      React.Children.map(children, (child, i, list) => {
        'r';

        let rules = 0;
        if (i === 0) { rules = '3px 0 0 3px'; }
        if (i === React.Children.count(children) - 1) { rules = ' 0 3px 3px 0'; }

        return React.cloneElement(child, {
          style: { ...child.props.style, borderRadius: rules },
          key: getKey(),
        });
      })
    }
  </div>
);

export default InputGroup;
