import {
  generalAccessDenied,
  generalSessionExpired,
  generalUnknownError,
  generalNetworkError,
  generalEntityNotFound,
  generalQueued,
  generalConflictedEntity,
  clearError,
  showSuccess,
} from '../userMessage/actions';
import uuid from 'uuid/v4';

class DefaultErrorRequest extends Error {
  constructor(requestError = {}, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DefaultErrorRequest);
    }

    // Custom debugging information
    this.requestError = requestError;
    this.date = new Date();
  }
}

export const withDefaultErrorHandler = (Comp) => (props) => (
  <AppContext.Consumer>
    {({log})=> (
      <SwallowComponet log={log}>
        <Comp {...props} />
      </SwallowComponet>
    )}
  </AppContext.Consumer>
);

export const defaultCatch = (response) => {
  if (!response.ok) {
    return response.text().then((text) => {
      throw new DefaultErrorRequest({
        isError: true,
        status: response.status,
        message: text,
        original: response,
      });
    });
  }

  return response;
};

export const withDefaultCatch = (promise) => (promise.then(defaultCatch));


const defaultMutationHandling = (dispatch, options = {}) => (resp) => {
  const successMessage = options.successMessage;
  const id = uuid();
  if(resp.ok) {
    dispatch(
      options.success ?
        options.success({ id, message: successMessage}) :
        showSuccess({ id, message: successMessage})
    )

    setTimeout(() => {
      dispatch(clearError(id));
    }, 10000);
  }
}

export const defaultErrorHandling = (dispatch, params, options = {}, context) => (e) => {
  const response = e.requestError || {};
  const errorMessage = response.message || e.message;
  const requestURL = response && response.original ? response.original.url : '';
  const id = uuid();

  setTimeout(() => {
    dispatch(clearError(id));
  }, 10000);

  if (options.onErrorAction) {
    dispatch(options.onErrorAction());
    return;
  }

  if (response.original && response.original.status === 401) {
    options.log && options.log(`Error 401 - unauthorized - for ${response.original.url}`)

    const unauthorizedMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 401,
      context,
    };

    return dispatch(
      options.sessionExpired ?
      options.sessionExpired(unauthorizedMessage) :
        generalSessionExpired(unauthorizedMessage)
    );
  }

  if (response.original && response.original.status === 403) {
    options.log && options.log(`Error 403 - access denied - for ${response.original.url}`);

    const accessDeniedMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 403,
      context,
    };

    return dispatch(
      options.accessDenied ?
      options.accessDenied(accessDeniedMessage) :
        generalAccessDenied(accessDeniedMessage)
    );
  }

  if (response.original && response.original.status === 404) {
    options.log && options.log(`Error 404 - Not Found - for ${response.original.url}`);

    const notFoundMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 404,
      context,
    };

    return dispatch(
      options.notFound ?
      options.notFound(notFoundMessage) :
        generalEntityNotFound(notFoundMessage)
    );
  }

  if (response.original && response.original.status === 202) {
    options.log && options.log(`Error 202 - Queued - for ${response.original.url}`);

    const queuedMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: 202,
      context,
    };

    return dispatch(
      options.queued ?
      options.queued(queuedMessage) :
        generalQueued(queuedMessage)
    );
  }

  if (
    response.original &&
    response.original.status &&
    response.original.status >= 400 &&
    response.original.status <= 599
  ) {
    options.log && options.log(`Error ${response.original.status} - Unknown - for ${response.original.url}`);

    const unknownErrorMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      status: response.original.status,
      context,
    };

    return dispatch(
      options.networkError ?
      options.networkError(unknownErrorMessage) :
      generalNetworkError(unknownErrorMessage)
    );
  }

  if (response.isError) {
    options.log && options.log(`Uknow Error - Unknown status - for ${response.original.url}`);

    const unknownErrorMessage = {
      id,
      params,
      errorMessage,
      url: requestURL,
      context,
    };

    if(response.original.status === 409) {
      return dispatch(
        options.conflictedEntity ?
        options.conflictedEntity(unknownErrorMessage) :
        generalConflictedEntity(unknownErrorMessage)
      );
    }

    return dispatch(
      options.networkError ?
      options.networkError(unknownErrorMessage) :
      generalNetworkError(unknownErrorMessage)
    );
  }

  if (errorMessage) {
    return dispatch(
      options.unknownError ?
      options.unknownError({
          id,
          params,
          errorMessage,
          context,
        }) :
        generalUnknownError({
          id,
          params,
          errorMessage,
          context,
        })
    );
  }

  return null;
};
/**
 * Decorate an action that fetch Data and ensure there is a default actions handler.
 * errorActions {
 *    sessionExpired,
 *    accessDenied,
 *    notFound,
 *    unknownError,
 *    queued,
 * }
 */
export const withDefaultErrorHandlingActions = (
  thunk, options = {},
) => (params, context) => dispatch => {
  if(options.withMutation) {
    return thunk(params)(dispatch).then(defaultMutationHandling).catch(defaultErrorHandling(dispatch, params, options, context));
  }

  return thunk(params)(dispatch).catch(defaultErrorHandling(dispatch, params, options, context));
}
