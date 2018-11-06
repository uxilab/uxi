import React from 'react';
import { FormattedMessage } from 'react-intl';
import SingleMessage from './message/SingleMessage';
import MultipleMessage from './message/MultipleMessage';

const findAppropriateErrorMessage = (errorMessage) => {
  if (errorMessage.errorMessage) {
    return (
      <span>
        {errorMessage.errorMessage}
      </span>
    );
  }

  if (errorMessage.message) {
    return (
      <span>
        {errorMessage.message}
      </span>
    );
  }

  if (errorMessage.type === 'accessDenied') {
    return (
      <span>
        <FormattedMessage
          id="module-error-accessDenied"
          defaultMessage="You do not have access to this ressource"
        />
      </span>
    );
  }

  if (errorMessage.type === 'noFound') {
    return (
      <span>
        <FormattedMessage
          id="module-error-didNofoundError"
          defaultMessage="It seems we did not found the data"
        />
      </span>
    );
  }

  if(errorMessage.type === 'conflicted') {
    return (
      <span>
        <FormattedMessage
          id="module-error-entityConflict"
          defaultMessage="An error occured, you are probably trying to create the same Entity"
        />
      </span>
    );
  }

  return (
    <span>
      <FormattedMessage
        id="module-error-unknownErrorOccured"
        defaultMessage="An unknown error occured"
      />
    </span>
  );
};

const GlobalErrorMessage = ({
  messages = [],
  onClose,
}) => {
  const isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  const messagesWithDetails = messages.filter(messageWithDetails => (
    messageWithDetails.status || messageWithDetails.url || messageWithDetails.errorMessage || messageWithDetails.message
  )).map(errorMessage => ({
    ...errorMessage,
    message: findAppropriateErrorMessage(errorMessage),
  }));

  const extra = (
    <div style={{ marginTop: '6px' }}>
      <FormattedMessage
        id="module-error-feelFreeTo"
        defaultMessage="Feel free to contact our"
      />
      &nbsp;
      <a
        style={{ color: '#fff', textDecoration: 'underline' }}
        href="mailto:support@cluedin.com"
      >
        <FormattedMessage
          id="module-error-contactSupport"
          defaultMessage="support"
        />
      </a>
      &nbsp;
      <FormattedMessage
        id="module-core-toHaveImmediateAssistance"
        defaultMessage="to have immediate assistance."
      />
    </div>
  );

  if(messagesWithDetails.length === 1) {
    return (
      <SingleMessage
        type="error"
        message={messagesWithDetails[0]}
        extra={extra}
        onClose={onClose}
      />
    );
  }

  return (
    <MultipleMessage
      type="error"
      defaultTitle={
        <FormattedMessage
          id="module-error-defaultTitleMultiple"
          defaultMessage="Multiple errors occured"
        />
      }
      defaultExplanation={
        <FormattedMessage
          id="module-error-defaultMultiple"
          defaultMessage="You have {value} messages"
          values={{ value: messagesWithDetails.length }}
        />
      }
      extra={extra}
      messages={messagesWithDetails}
      onClose={onClose}
    />
  );
};

export default GlobalErrorMessage;
