
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import SlideInWhenInBoundUI from './SlideInWhenInBoundUI';

class SlideInWhenInBound extends Component {
  static defaultProps = {
    anchor: 'bottom',
  }

  static propTypes = {
    anchor: PropTypes.oneOf([
      'bottom', 'top', 'left', 'right',
    ]),
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
      className: 'scroll-anim-before load-anim animIn',
    };
  }

  componentDidMount() { this.attachListeners(); }


  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.className !== nextState.className) {
      return true;
    }
    return false;
  }

  componentWillUnmount() { this.removeListeners(); }

  readDOMPosition(viewportHeightParam) {
    console.log('readDOMPosition (viewportHeightParam)', viewportHeightParam);

    const { node } = this;
    if (!node) {
      return null;
    }
    const viewportHeight = (
      this.state.viewportHeight || viewportHeightParam || 2000
    );
    const { top, height } = this.node.getBoundingClientRect();
    const isInBound = (viewportHeight - top) >= (height / 10);
    // const isOutBound = top >= viewportHeight * 1.5;
    console.log('top, height', top, height);
    console.log('isInBound', isInBound);
    const className = `scroll-anim-before load-anim ${isInBound ? ' animIn ' : ''}`;

    this.setState({ className });

    return null;
  }

  storeRef(node) {
    this.node = node;
    this.setState({ viewportHeight: window.innerHeight });
    this.readDOMPosition(window.innerHeight);
  }

  handleScroll() {
    console.log('handleScroll');

    this.readDOMPosition();
  }

  handleResize(e) {
    console.log('handleResize');

    this.setState({
      viewportHeight: e.target.innerHeight,
    });
  }

  attachListeners() {
    console.log('attachListener');
    if (window && window.document) {
      console.log('found a window and a window.document');
      const { scrollElementSelector } = this.props;
      const theElementToWatchScrollOn = (
        document.querySelector(scrollElementSelector) || window.document
      );
      console.log('theElementToWatchScrollOn', theElementToWatchScrollOn);
      window.addEventListener('resize', this.handleResizeDebounced.bind(this));
      theElementToWatchScrollOn.addEventListener('scroll', this.handleScrollDebounced.bind(this));
    }
  }

  removeListeners() {
    if (window && window.document) {
      const { scrollElementSelector } = this.props;
      const theElementToWatchScrollOn = (
        document.querySelector(scrollElementSelector) || window.document
      );
      window.removeEventListener('resize', this.handleResizeDebounced.bind(this));
      theElementToWatchScrollOn.removeEventListener('scroll', this.handleScrollDebounced.bind(this));
    }
  }

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
