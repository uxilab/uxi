# uxi-business

Common business component that are 'ready' to use and follow UX best practises.

- signin ok
- forgot ok
- find client by id : ok
- save url : ok
- signup user :
- reset pwd : ok

## Provider

In order to use uxi-business component library you need to se the UxiBusinessProvider component.

It comes with a default context which does 'nothing'. It is up to the consumer to configue how the list of component should behave.

Example:

```
   import { UxiBusinessProvider } from 'uxi-business';

   const MyApp = () => (
     <UxiBusinessProvider log={(e) => {console.log(e)}} onSessionExpired={() => {alert('test)}}>
       <Application />
     </UxiBusinessProvider>
   )
```

Here are the list of contextual props that you can override:

- log: used when you want to log something
- onSessionExpired: used when the session of the user has overidden or because a defualt handler throws a 401 in a REST API request.
- logoutUrl: the URL used to logout the user.
- loginUrl: the URL used to redirect ot a signin page.

## Error Handling

Module related on how to handle errors in your application.

### withDefaultErrorHandler

HOC which decorates any component and show an Error Message if the component throw a JS exception.
This component has the duty to avoid having the whole page breaking due to an violation error.

You can use it this way:

```
   import { withDefaultErrorHandler } from 'uxi-business/errorHandling';

   const MyComponent = () => {

     throw new Error("Oh snap");
   };

   export default withDefaultErrorHandler(MyComponent);
```


### withDefaultCatch

Takes a promise and add a default catch for a `fetch` method.

```
const fetchUser = withDefaultCatch(fetch('/users.json'));
```

The defaultCatch provides a default behaviors in terms of error for a `fetch` request.

Used from the action `withDefaultErrorHandlingActions` from User Message module, it will give you a set of default messages for common succes/error messages.

## User Message

Module related to the Message you want to send to your user (success/warning/error/info).

```
import {
  reducer as userMessage,
  UserMessageProvider,
} from 'uxi-business/userMessage';
import { showSuccess, showWarning, showError, showInfo } from 'uxi-business/userMessage/actions';

const rootReducer = combineReducers({
  form: formReducer,
  userMessage,
});

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <UserMessageProvider>
      <h1>Title</h1>
      <button onClick={() => {dispatch(showSuccess('Good job!'))}}>Trigger some actions</button>
    </UserMessageProvider>
  </Provider>
);

render(<App />, document.getElementById('root'));
```

### Redux Actions

**showSuccess**

Show a sucess message

**showWarning**

Show a warning message

**showError**

Show an Error message

**showInfo**

Show an info message


### Default REST error handling

- HTTP Status : 200 => success message
- HTTP Status : 202 => warning queue message
- HTTP Status : 403 => access denied error message
- HTTP Status : 404 => entity notfound error message
- HTTP Status : 409 => conflict error message
- HTTP Status : 5xx => unknow error message
- HTTP Status : 4xx => unknow error message

**How to decorate my action to receive the default User Message behavior?**

- User the method `withDefaultCatch`
- Decorate your thunk (redux) with `withDefaultErrorHandlingActions`

Example:

```
import { withDefaultCatch } from 'uxi-business/errorHandling';
import { withDefaultErrorHandlingActions } from 'uxi-business/userMessage/actions';


export const shouldFetchUser = withDefaultErrorHandlingActions((dispatch) => (
  withDefaultCatch(fetch('/users.json')).then((data) => {
    dispatch({
      type: 'RECEIVE_USER',
      data,
    })
  }))
));
```


