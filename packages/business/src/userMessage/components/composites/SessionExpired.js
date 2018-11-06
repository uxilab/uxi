import React, { Component } from 'react';
import Alert from 'uxi/Alert';
import Button from 'uxi/Button';
import { FormattedMessage } from 'react-intl';

class SessionExpired extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countDown: 10,
    };
  }

  deCrementCountDown() {
    const { countDown } = this.state;
    this.setState({
      countDown: (countDown > 0) ? countDown - 1 : 0,
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.deCrementCountDown();
    }, 1000);
  }

  componentWillReceiveProps() {
    const { onSessionExpired } = this.props;
    const { countDown } = this.state;
    if (countDown === 1) {
      onSessionExpired();
    }
  }

  render() {
    const { onSessionExpired } = this.props;
    const { countDown } = this.state;

    return (
      (
        <Alert isBanner type="error">
          <FormattedMessage id="module-error-sessionExpiredExplanation" />
          <br />
          <FormattedMessage id="module-error-sessionExpiredcountDown" values={{ value: countDown }} />
          <br />
          <FormattedMessage id="module-error-sessionExpriredNotWorry" />
          <br />
          <FormattedMessage id="module-error-sessionExpiredBringBackToCurrent" />
          <div style={{ marginTop: '12px' }}>
            <Button
              text="Log back in"
              type="primary"
              onClick={onSessionExpired}
            />
          </div>
        </Alert>
      )
    );
  }
}

export default SessionExpired;
