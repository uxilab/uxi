import React from 'react';
import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import { withContainedUserFeedback } from 'uxi-business/userMessage';
import { withDefaultErrorHandlingActions } from 'uxi-business/errorHandling';

const shouldFetch = (test) => (dispatch) => {
  dispatch(createAction('test'));
  return new Promise((accept, reject) => {
    setTimeout(() => {
      reject(new Error('Woulalal'));
    }, 2000);
  });
};

const shouldFetchWithErrorHandling = withDefaultErrorHandlingActions(shouldFetch);

const ContextualUserMessageExample = ({
  success,
  warning,
  error,
  info,
  dispatch,
  dispatchWithContext,
}) => {
  return (
    <div>
      <button onClick={() => {success({ message:'Yo!!' })}} >Show Success in context</button>
      <button onClick={() => {warning({ message:'Dooh!'})}} >Show Warning in context</button>
      <button onClick={() => {error({ message:'Dooh Error!'})}} >Show Error in context</button>
      <button onClick={() => {info({ message:'Just so you know!'})}} >Show Info in context</button>
      <button onClick={() => dispatchWithContext(shouldFetchWithErrorHandling, {})}>Show with dispatchWithContext</button>
    </div>
  );
};

export default withContainedUserFeedback(connect()(ContextualUserMessageExample));
