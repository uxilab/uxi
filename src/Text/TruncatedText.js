import React from 'react';
import Tooltip from 'rc-tooltip';

const getTooltip = fullText => (
  <Tooltip
    overlay={<div style={{ maxWidth: '620px' }}>{fullText}</div>}
  >
    <span>&nbsp;<small style={{ textDecoration: 'underline' }}>(...)</small></span>
  </Tooltip>
);

const TruncatedText = ({ text = '', max = 150 }) => {
  let tooltip = null;
  let truncatedText = text;

  if (text.length > max) {
    truncatedText = text.slice(0, 144);
    tooltip = getTooltip(text);
  }

  return (
    <div>
      {truncatedText}
      {tooltip}
    </div>
  );
};

export default TruncatedText;
