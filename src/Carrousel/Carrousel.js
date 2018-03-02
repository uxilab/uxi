import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Arrowleft,
  Arrowright,
} from 'uxi/Icons';
import CarrouselItem from './CarrouselItem';

const NavigationUI = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  border-radius: 0;
  display: none;
  outline: none;
  &:first-of-type {
    margin-right: 16px;
    &:hover { transform-origin: right center }
  }
  &:nth-of-type(2) {
    margin-left: 16px;
    &:hover { transform-origin: left center }
  }
  @media (min-width: 1024px) {
    display: inherit;
  }
  &:hover {
    transform: scale(1.1);
    transition: ${({ theme: { transition } }) => transition.defaultAll}
  }
`;

const OutterWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px auto;
  @media (min-width: 1024px) {
    margin: 48px auto;
    flex-direction: row;
    align-items: stretch;
  }
}`;

const WrapperUI = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-flow: row nowrap;
    /* max-width: (3 * 280 + (6 * 8)) ;*/
    max-width: 888px;
    overflow: hidden;
    justify-content: start;
  }
`;

class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.canScrollLeft = false;
    this.canScrollRight = false;

    this.state = {
      scrollableTowardsNext: false,
      scrollableTowardsPrevious: false,
    };
  }


  componentDidMount() {
    this.updateScrollableState();
  }

  updateScrollableState() {
    if (this.ref) {
      const { children, scrollLeft } = this.ref;
      const refRect = this.ref.getBoundingClientRect();

      if (children) {
        const totalInnerWidth = [...children].reduce((accu, x) => {
          const width = x.getBoundingClientRect().width;
          return accu + width;
        }, 0);

        this.setState({
          scrollableTowardsNext: totalInnerWidth - scrollLeft - refRect.width > 0,
          scrollableTowardsPrevious: scrollLeft > 0,
        });
      }
    }
  }

  handleNext() {
    if (this.ref) {
      const width = this.ref.getBoundingClientRect().width;
      this.ref.scrollLeft = this.ref.scrollLeft + width;
    }
    this.updateScrollableState();
  }

  handlePrevious() {
    if (this.ref) {
      const width = this.ref.getBoundingClientRect().width;
      this.ref.scrollLeft = this.ref.scrollLeft - width;
    }
    this.updateScrollableState();
  }

  render() {
    const { children } = this.props;
    const { scrollableTowardsNext, scrollableTowardsPrevious } = this.state;
    const color = '#26a29a';

    const shouldDisplayNavArrows = scrollableTowardsNext > 0 || scrollableTowardsPrevious > 0

    const prev = shouldDisplayNavArrows && (
      <NavigationUI onClick={this.handlePrevious}>
        <Arrowleft color={scrollableTowardsPrevious ? color : undefined} size={32} />
      </NavigationUI>
    );

    const next = shouldDisplayNavArrows && (
      <NavigationUI onClick={this.handleNext}>
        <Arrowright color={scrollableTowardsNext ? color : undefined} size={32} />
      </NavigationUI>
    );

    return (
      <OutterWrapperUI>
        {prev}

        <WrapperUI innerRef={(node) => { this.ref = node; }}>
          {/* {items.map(caseStudy => (
            <CarrouselItem {...caseStudy} />
          ))} */}

          {
            React.Children.map(children, child => {
              if (child.type === 'CarrouselItem') {
                return React.cloneElement(child)
              }
              return <CarrouselItem> { React.cloneElement(child) } </CarrouselItem>
            })
          }
        </WrapperUI>

        {next}
      </OutterWrapperUI>
    );
  }
}

Carrousel.defaultProps = {
  items: [],
};

export default Carrousel;
