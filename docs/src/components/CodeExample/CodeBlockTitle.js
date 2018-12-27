import React from 'react';
import PropTypes from 'prop-types';
import { Code } from 'uxi/Icons';
import { H3 } from 'uxi/Classic';

const styles = {
  display: 'flex',
  alignItems: 'center',
};

const CodeBlockTitle = props => (
  <div style={{ ...styles, padding: '8px' }}>
    <div style={{ ...styles, padding: '8px' }}>
      {<H3 style={{ margin: 0 }}>{props.title || 'Example' }</H3> }
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
