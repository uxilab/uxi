
import React, { Component } from 'react';
import SlideUpInWhenInBoundUI from './SlideUpInWhenInBoundUI';
import debounce from 'lodash/debounce';

class SlideUpInWhenInBound extends Component {
  constructor(props) {
    super(props);

    this.node = null;
    this.storeRef = this.storeRef.bind(this);
    this.handleScroll = debounce(this.handleScroll.bind(this), 8);
    this.handleResize = debounce(this.handleResize.bind(this), 80);

    this.state = {
      viewportHeight: null,
      className: 'scroll-anim-before load-anim'
    };
  }

  componentDidMount() { this.attachListeners() }

  componentWillUnmount() { this.removeListeners() }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.className !== nextState.className) {
      return true;
    }
    return false;
  }

  attachListeners() {
    if (window && window.document) {
      window.addEventListener('resize', this.handleResize)
      document.addEventListener('scroll', this.handleScroll)
    }
  }

  removeListeners() {
    if (window && window.document) {
      window.removeEventListener('resize', this.handleResize)
      document.removeEventListener('scroll', this.handleScroll)
    }
  }

  readDOMPosition(viewportHeightParam) {
    const { node } = this;
    if (!node) {
      return null;
    }
    const viewportHeight = (
      this.state.viewportHeight || viewportHeightParam || 2000
    );
    const { top, height } = this.node.getBoundingClientRect();
    const isInBound = (viewportHeight - top) >= (height / 10)
    const isOutBound = top >= viewportHeight * 1.5;

    const className = `scroll-anim-before load-anim ${isInBound ? ' animIn ' : ''}`;

    this.setState({ className });
  }

  storeRef(node) {
    this.node = node;
    this.setState({ viewportHeight: window.innerHeight })
    this.readDOMPosition(window.innerHeight)
  }

  handleScroll() {
    this.readDOMPosition()
  }

  handleResize(e) {
    this.setState({
      viewportHeight: e.target.innerHeight,
    })
  }

  render() {
    const { className } = this.state;

    return (
      <SlideUpInWhenInBoundUI>
        <div
          className={`${className}`}
          ref={this.storeRef}
        >
          {React.Children.only(this.props.children)}
        </div>
      </SlideUpInWhenInBoundUI>
    );
  }
}

export default SlideUpInWhenInBound;
