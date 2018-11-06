import React from 'react';
import { connect } from 'react-redux';
import {
  selectErrorMessage
} from '../selector';
import GlobalErrorMessage from './composites/GlobalErrorMessage';
import GlobalSuccessMessage from './composites/GlobalSuccessMessage';
import GlobalWarningMessage from './composites/GlobalWarningMessage';
import GlobalInfoMessage from './composites/GlobalInfoMessage';

import {
  shouldClearError,
  shouldClearSuccess,
  shouldClearWarnings,
  shouldClearInfo,
} from '../actions';

const DefaultUserFeedback = ({
  errorMessages,
  successMessages,
  warningMessages,
  globalInfoMessages,
  clearErrors,
  clearSuccess,
  clearWarning,
  clearInfo,
  contextId,
}) => (
  <div>
      {
          errorMessages &&
          errorMessages.length > 0 &&
          (
            <GlobalErrorMessage
              messages={errorMessages}
              onClose={clearErrors}
            />
          )
        }
        {
          successMessages &&
          successMessages.length > 0 &&
          (
            <GlobalSuccessMessage
              messages={successMessages}
              onClose={clearSuccess}
            />
          )
        }
        {
          warningMessages &&
          warningMessages.length > 0 &&
          (
            <GlobalWarningMessage
              messages={warningMessages}
              onClose={clearWarning}
            />
          )
        }
        {
          globalInfoMessages &&
          globalInfoMessages.length > 0 &&
          (
            <GlobalInfoMessage
              messages={globalInfoMessages}
              onClose={clearInfo}
            />
          )
        }
    </div>
);

const mapStateToProps = ({
  userMessage: {
    messages,
  },
 }, {
   contextId,
   messagesFromProps,
  }
) => {
  const messageStore = contextId ? messages[contextId] : messages.global;
  const store = selectErrorMessage(messageStore);

  return {
    ...store,
    contextId,
  };
};

const mapDispatchToProps = (dispatch, { contextId }) => ({
  clearErrors() {
    dispatch(shouldClearError({ context: contextId }));
  },
  clearSuccess() {
    dispatch(shouldClearSuccess({ context: contextId }));
  },
  clearWarning() {
    dispatch(shouldClearWarnings({ context: contextId }));
  },
  clearInfo() {
    dispatch(shouldClearInfo({ context: contextId }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultUserFeedback);
