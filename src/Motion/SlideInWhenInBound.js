
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlideInWhenInBoundUI from './SlideInWhenInBoundUI';
import debounce from 'lodash/debounce';

class SlideInWhenInBound extends Component {
  static defaultProps = {
    anchor: 'bottom',
  }

  static propTypes = {
    anchor: PropTypes.oneOf([
      'bottom', 'top', 'left', 'right'
    ])
  }

  constructor(props) {
    super(props);

    this.node = null;
    this.storeRef = this.storeRef.bind(this);
    this.handleScrollDebounced = debounce(this.handleScroll, 8);
    this.handleResizeDebounced = debounce(this.handleResize, 80);
    this.attachListeners = this.attachListeners.bind(this);
    this.removeListeners = this.removeListeners.bind(this);

    this.state = {
      viewportHeight: null,
      className: 'scroll-anim-before load-anim animIn'
    };
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.className !== nextState.className) {
      return true;
    }
    return false;
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

  attachListeners() {
    if (window && window.document) {
      const { scrollElementSelector } = this.props;
      const theElementToWatchScrollOn = (
        document.querySelector(scrollElementSelector) || window.document
      );
      window.addEventListener('resize', this.handleResizeDebounced.bind(this))
      theElementToWatchScrollOn.addEventListener('scroll', this.handleScrollDebounced.bind(this))
    }
  }

  removeListeners() {
    if (window && window.document) {
      const { scrollElementSelector } = this.props;
      const theElementToWatchScrollOn = (
        document.querySelector(scrollElementSelector) || window.document
      );
      window.removeEventListener('resize', this.handleResizeDebounced.bind(this))
      theElementToWatchScrollOn.removeEventListener('scroll', this.handleScrollDebounced.bind(this))
    }
  }

  componentDidMount() { this.attachListeners() }

  componentWillUnmount() { this.removeListeners() }


  render() {
    const { className } = this.state;
    const { anchor } = this.props;

    return (
      <SlideInWhenInBoundUI anchor={anchor} >
        <div
          className={`${className}`}
          ref={this.storeRef}
        >
          {React.Children.only(this.props.children)}
        </div>
      </SlideInWhenInBoundUI>
    );
  }
}


export default SlideInWhenInBound;
