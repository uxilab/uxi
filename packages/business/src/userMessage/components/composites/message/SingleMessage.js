import React from 'react';
import styled from 'styled-components';
import {
  FormattedMessage,
} from 'react-intl';
import Alert from 'uxi/Alert';
import MessageTitle from './MessageTitle';

const SingleMessage = ({
  message,
  type,
  onClose,
  extra,
}) => (
    <Alert
      onClose={onClose}
      style={{ fontSize: '14px', minWidth: '280px', width:'400px', maxWidth: '680px' }}
      type={type}
      showClose
    >
      {
        message.title &&
        (
          <MessageTitle>
            {message.title}
          </MessageTitle>
        )
      }
      {
        message.message &&
        (
          <div>
            {message.message}
          </div>
        )
      }
      {
        extra ? extra : null
      }
  </Alert>
);

export default SingleMessage;
