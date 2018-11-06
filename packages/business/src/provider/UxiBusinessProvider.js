import React, { Component } from 'react';

export const AppContext = React.createContext();

class UxiBusinessProvider extends Component {
  constructor(props) {
    super(props);

    const loginUrl = props.loginUrl ? props.loginUrl : '/login';
    const logoutUrl = props.logoutUrl ? props.logoutUrl : '/logout';

    this.state = {
      loginUrl,
      logoutUrl,
      onSessionExpired: props.onSessionExpired ? props.onSessionExpired : () => {
        window.location = logoutUrl;
      },
      log: props.log ? props.log : (e) => {
        console.log(e);
      },
    };
  }

  render() {
    const { children } = this.props;

    return (
      <AppContext.Provider value={this.state}>
        {children}
      </AppContext.Provider>
    );
  }
};

export default UxiBusinessProvider
