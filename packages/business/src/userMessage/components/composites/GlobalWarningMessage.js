import React from 'react';
import { FormattedMessage } from 'react-intl';
import SingleMessage from './message/SingleMessage';
import MultipleMessage from './message/MultipleMessage';

const findAppropriateWarningMessage = (successMessage) => {
  if (successMessage.message) {
    return (
      <span>
        {successMessage.message}
      </span>
    );
  }

  return (
    <span>
      <FormattedMessage
        id="module-sucesss-defaultMessage"
        defaultMessage="You operation has been queued successfuly"
      />
    </span>
  );
};

const GlobalWarningMessage = ({
  messages = [],
  onClose,
}) => {
  const isEmpty = messages.length === 0;

  if (isEmpty) {
    return null;
  }

  const messagesWithDetails = messages.map(warning => ({
    ...warning,
    message: findAppropriateWarningMessage(warning),
  }));

  if(messages.length === 1) {
    return (
      <SingleMessage
        type="warning"
        message={messages[0]}
        onClose={onClose}
      />
    );
  }

  return (
    <MultipleMessage
      type="warning"
      defaultTitle={
        <FormattedMessage
          id="module-warning-defaultTitleMultiple"
          defaultMessage="Warning"
        />
      }
      defaultExplanation={
        <FormattedMessage
          id="module-warning-defaultMultiple"
          defaultMessage="You have {value} warnings"
          values={{ value: messagesWithDetails.length }}
        />
      }
      messages={messagesWithDetails}
      onClose={onClose}
    />
  );
};

export default GlobalWarningMessage;
