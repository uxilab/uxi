import { connect } from "react-redux";
import React from 'react';
import uuid from 'uuid/v4';
import {
  showSuccess,
  showWarning,
  showError,
  showInfo,
  shouldClearError,
  shouldClearSuccess,
  shouldClearWarnings,
  shouldClearInfo,
} from './actions';
import DefaultUserFeedback  from './components/DefaultUserFeedback';

export reducer from './reducer';
export withDefaultErrorHandlingActions from './actions';
export withUserMessage from './components/hocs/withUserMessage';
export UserMessageProvider from './components/UserMessageProvider';

export const withUserMessageAction = (Comp, contextId) => {

  const mapDispatchToProps = (dispatch) => ({
    success(message) {
      dispatch(showSuccess({ ...message, context: contextId }));
    },
    warning(message) {
      dispatch(showWarning({ ...message, context: contextId }));
    },
    error(message) {
      dispatch(showError({ ...message, context: contextId }));
    },
    info(message) {
      dispatch(showInfo({ ...message, context: contextId }));
    },
    dispatchWithContext(action, params) {
      dispatch(action(params, contextId));
    },
  });

  return connect(
    null,
    mapDispatchToProps,
  )(
    (props) => (<Comp {...props} />)
  );
};


export const withContainedUserFeedback = (Comp, options) => {
  const uniqueID = uuid();

  return withUserMessageAction(
    (props) => (
      <div>
        <DefaultUserFeedback
          contextId={uniqueID}
          messagesFromProps={props.userMessage}
        />
        <Comp {...props} contextId={uniqueID}/>
      </div>
    ),
    uniqueID,
  );
};

const showAndHide = (showFn, hideFn) => {
  showFn();

  setTimeout(hideFn, 5000);
};

export const showAlert = alert => (dispatch) => {
  const id = uuid();
  const alertWithId = {
    ...alert,
    id,
    type: alert.type || 'info',
  };

  let alertToUser = showInfo;
  let hideToUser = shouldClearInfo;

  if (alert.type === 'success') {
    alertToUser = showSuccess;
    hideToUser = shouldClearSuccess;
  }

  if (alert.type === 'error') {
    alertToUser = showError;
    hideToUser = shouldClearError;
  }

  if (alert.type === 'warning') {
    alertToUser = showWarning;
    hideToUser = shouldClearWarnings;
  }

  return showAndHide(
    () => dispatch(alertToUser(alertWithId)),
    () => dispatch(hideToUser(alertWithId))
  );
};

export const showSuccessAndHide = message => showAlert({
  ...message,
  type: 'success',
});

export const showErrorAndHide = message => showAlert({
  ...message,
  type: 'error',
});


export const showWarningAndHide = message => showAlert({
  ...message,
  type: 'warning',
});


export const showInfoAndHide = message => showAlert({
  ...message,
  type: 'info',
});
