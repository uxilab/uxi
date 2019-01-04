import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import enhanceWithClickOutside from 'react-click-outside';
import styled from 'styled-components';
import { Arrowright } from '../Icons';
import { Flex } from '../Layout';

const Details = styled.details.attrs({
  onToggle: ({ onToggle }) => onToggle,
  open: ({ open }) => open,
})`
  width: 100%;
  position: relative;

`;

const SummaryIcon = Flex.extend`
  transform-origin: center;
  transform: rotate(0deg);
  ${({ isOpen }) => (isOpen ? 'transform: rotate(90deg)' : '')};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
`;


const Summary = styled.summary`
  display: flex;
  align-items : center;
  justify-content: center;


  list-style: none;
  list-style-type: none;
  &::-webkit-details-marker {
    display: none;
  }
;`;

const SubContent = styled.div`
  width: 100%;
  ${({ inline }) => (inline
    ? ''
    : 'position: absolute; box-shadow: 0 8px 16px 0 rgba(0,0,0,.1)'
  )};

  background: white;
`;

class Disclosure extends Component {
  static PropTypes = {
    isOpen: PropTypes.bool,
  }

  static defaultProps = {
    isOpen: undefined,
    inline: true,
    closeOnClickOutside: true,
  }

  constructor(props) {
    super(props);

    this.isControlled = this.props.isOpen !== undefined;

    this.state = {
      isOpen: this.isControlled ? this.props.isOpen : false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.isOpen !== this.props.isOpen
      || prevState.isOpen !== this.state.isOpen
    ) {
      const isOpen = this.isControlled
        ? this.props.isOpen
        : this.state.isOpen;

      if (this.ref) {
        if (isOpen) {
          this.ref.setAttribute('open', true);
        } else {
          this.ref.removeAttribute('open');
        }
      }
    }
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // handleClickOutside() {
  //   const { closeOnClickOutside } = this.props;

  //   if (closeOnClickOutside) {
  //     this.setState({ isOpen: false });
  //   }
  // }

  render() {
    const {
      isOpen: isOpenProp,
      content,
      subContent,
      inline,
    } = this.props;

    const isOpen = this.isControlled
      ? isOpenProp
      : this.state.isOpen;

    return (
      <Details
        innerRef={(node) => { this.ref = node; }}
        onToggle={({ target = {} }) => this.setState({ isOpen: target.open })}
      >
        <Summary>
          <SummaryIcon isOpen={isOpen}>
            <Arrowright size="12" />
          </SummaryIcon>
          {content}
        </Summary>
        <SubContent inline={inline} >
          {subContent}
        </SubContent>
      </Details>
    );
  }
}


// export default enhanceWithClickOutside(Disclosure);
export default Disclosure;
