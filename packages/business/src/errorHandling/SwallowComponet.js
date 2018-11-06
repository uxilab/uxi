import React from 'react';

class CatchErrorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }
  componentDidCatch(error) {
    const { log } = this.props;

    log(error);

    this.setState({
      error,
    });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if(error) {
      return (
        <DefaultErrorMessage
          error={error}
        />
      )
    }

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default CatchErrorComponent;
