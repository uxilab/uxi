import React from 'react';
import { FormattedMessage } from 'react-intl';

const MessageDetails = ({ message }) => (
  <div style={{ marginTop: '6px' }}>
    <div style={{ fontSize: '12px', marginTop: '5px', marginBottom: '5px' }}>
      <FormattedMessage
        id="module-error-supportInformation"
        defaultMessage="Message Detail"
      />
    </div>
    <div style={{ fontSize: '12px', fontStyle: 'italic' }}>
      {
        message.message ? <div>
          <span>
            {message.message}
          </span>
        </div> : null
      }
      {
        message.url ? <div>
          <FormattedMessage
            id="module-error-urlTitle"
            defaultMessage="Url:"
          />
          <span style={{ marginLeft:'6px' }}>
            {message.url}
          </span>
        </div> : null
      }
      {
        message.status ? <div>
          <FormattedMessage
            id="module-error-statusTitle"
            defaultMessage="Status code:"
          />
          <span style={{ marginLeft:'6px' }}>
            {message.status}
          </span>
        </div> : null
      }
    </div>
  </div>
);

export default MessageDetails;
