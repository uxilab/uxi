import React, { Component } from 'react';

class DropDown2 extends Component {
  constructor(props) {
    super(props);

    this.ref = null;

    this.isControlled = this.props.isOpen !== undefined;

    this.state = {
      isOpen: this.isControlled ? this.props.isOpen : false,
      scrollOffset: 0,
      rect: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 0,
        width: 0,
      },
    };

    this.update = this.update.bind(this);
    this.storeRef = this.storeRef.bind(this);
    this.findScrollingContextRef = this.findScrollingContextRef.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  componentWillUnmount() {
    this.scrollingContextRef = null;

    window.cancelAnimationFrame(this.rafRef);
  }

  findScrollingContextRef() {
    if (!this.scrollingContextRef) {
      this.scrollingContextRef = this.props.mainScrollingElementSelector
        ? document.querySelector(this.props.mainScrollingElementSelector)
        : window;
    }
  }

  toggleVisibility() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  update() {
    this.findScrollingContextRef();
    if (this.ref && this.scrollingContextRef) {
      this.setState({
        rect: this.ref.getBoundingClientRect(),
        scrollOffset: this.scrollingContextRef.scrollTop,
      });

      this.rafRef = requestAnimationFrame(this.update);
    }
  }

  storeRef(node) {
    this.ref = node;
    this.update();
  }

  render() {
    const {
      trigger,
      children,
    } = this.props;

    const {
      isOpen,
      rect,
    } = this.state;

    const style = {
      maxHeight: 0,
      maxHeight: isOpen ? `${rect.height}px` : '0px', // eslint-disable-line
      overflow: isOpen ? 'auto' : 'hidden',
      // overflow: 'auto',
    };

    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {trigger}
        </button>
        <div style={style}>
          <div ref={this.storeRef}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default DropDown2;
