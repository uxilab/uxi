import React from 'react';
import { render } from 'react-dom';
import {
  SignInForm,
  ForgotPasswordForm,
  ResetPasswordForm,
  UxiBusinessProvider,
} from 'uxi-business';
import {
  reducer as userMessage,
  UserMessageProvider,
} from 'uxi-business/userMessage';
import thunkMiddleware from 'redux-thunk';
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import FormWithCusomtInput from './examples/FormWithCusomtInput';
import FormWithFieldAsyncValidation from './examples/FormWithFieldAsyncValidation';

import GlobalUserMessageExample from './examples/UserMessage/GlobalUserMessageExample';
import ContextualUserMessageExample from './examples/UserMessage/ContextualUserMessageExample';

const rootReducer = combineReducers({
  form: formReducer,
  userMessage,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

const App = () => (
  <Provider store={store}>
    <IntlProvider locale="en">
      <ThemeProvider>
        <UxiBusinessProvider
          onSessionExpired={()=> {alert('logout ')}}
        >
          <UserMessageProvider>
            <h1>Title</h1>
            <GlobalUserMessageExample />
            <div style={{padding:'150px'}}>
              <ContextualUserMessageExample />
            </div>
          </UserMessageProvider>
        </UxiBusinessProvider>
       <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <SignInForm
            onClick={(value) => {alert(JSON.stringify(value))}}
          />
        </div> 
          <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <ForgotPasswordForm
            onClick={(value) => {alert(JSON.stringify(value))}}
          />
        </div> 
        <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <FormWithCusomtInput />
      </div>
      <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <ResetPasswordForm
            onClick={(value) => {alert(JSON.stringify(value))}}
          />
      </div>
      {/* <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
        <FormWithFieldAsyncValidation
          onClick={(value) => {alert(JSON.stringify(value))}}
          />
      </div> */}
      </ThemeProvider>
    </IntlProvider>
  </Provider>
);

export default App;
