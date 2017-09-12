import React, { PropTypes } from 'react';

const CodeBlockTitle = props => (
  <div>
    <div>
      {props.title || 'Example'}
    </div>
    <div>
      {props.tooltip}
      CodeIcon
    </div>
  </div>
);

CodeBlockTitle.propTypes = {
  title: PropTypes.string,
  tooltip: PropTypes.string,
};

export default CodeBlockTitle;
