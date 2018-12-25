import React, { Component } from 'react';

class WithBoundingRect extends Component {
  constructor(props) {
    super(props)

    this.ref = null

    this.state = {
      scrollOffset: 0,
      rect: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 0,
        width: 0,
      }
    }

    this.update = this.update.bind(this);
    this.storeRef = this.storeRef.bind(this);
    this.findScrollingContextRef = this.findScrollingContextRef.bind(this);

  }

  componentDidMount() {
    this.update()
  }

  findScrollingContextRef() {
    if (!this.scrollingContextRef) {
      this.scrollingContextRef = this.props.mainScrollingElementSelector
        ? document.querySelector(this.props.mainScrollingElementSelector)
        : window
    }
  }

  componentWillUnmount() {
    this.scrollingContextRef = null

    window.cancelAnimationFrame(this.rafRef)
  }

  update() {
    this.findScrollingContextRef()
    if (this.ref && this.scrollingContextRef) {
      this.setState({
        rect: this.ref.getBoundingClientRect(),
        scrollOffset: this.scrollingContextRef.scrollTop,
      })

      this.rafRef = requestAnimationFrame(this.update)
    }
  }

  storeRef(node) {
    this.ref = node
    this.update()
  }

  render() {
    return (
      <div ref={this.storeRef}>
        {
          React.cloneElement(this.props.children, {
            rect: this.state.rect,
            scrollOffset: this.state.scrollOffset,
            ...(this.props || {}),
          })
        }
      </div>
    )
  }
}

export default WithBoundingRect
