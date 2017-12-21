import React, { PropTypes } from 'react';
import { Code } from 'uxi/Icons';

const styles = {
  display: 'flex',
  alignItems: 'center',
};

const CodeBlockTitle = props => (
  <div style={{ ...styles, padding: '8px' }}>
    <div style={{ ...styles, padding: '8px' }}>
      {props.title || 'Example'}
    </div>
    <div style={{ ...styles, marginLeft: 'auto', padding: '4px' }}>
      {props.tooltip}
      <Code style={{ paddingLeft: '6px' }} size="20" />
    </div>
  </div>
);

CodeBlockTitle.propTypes = {
  title: PropTypes.string,
  tooltip: PropTypes.string,
};

export default CodeBlockTitle;
