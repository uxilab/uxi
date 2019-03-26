import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import enhanceWithClickOutside from 'react-click-outside';
import styled from 'styled-components';
import { flexStylesCSSString } from '../Layout/flexStyles';
import { Arrowright } from '../Icons';

/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
const Details = styled.details.attrs({
  onToggle: ({ onToggle }) => onToggle,
  open: ({ open }) => open,
})`
  &, & * {
    ${({ theme: { transition } }) => transition.defaultAll};
  }

  width: 100%;
  position: relative;
  ${({ anchor }) => (anchor === 'top'
    ? ''
    : 'min-height: 18px;')
  };
  ${({ anchor, isOpen }) => (anchor === 'top'
    ? ''
    : isOpen ? 'margin-bottom: 18px;' : '')
  };
`;

const SummaryIcon = styled.div`
  ${flexStylesCSSString};
  transform-origin: center;
  transform: rotate(0deg);
  ${({ isOpen }) => (isOpen ? 'transform: rotate(90deg)' : '')};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  margin-left: 6px;
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

  ${({ anchor, isOpen }) => (anchor === 'top'
    ? ''
    : `position: absolute; bottom: ${isOpen ? '-18px' : 0}; left: 0; right: 0;`)
  };
;`;

const SubContent = styled.div`
  width: 100%;
`;
/* eslint-enable indent */
/* eslint-enable no-nested-ternary */


class Disclosure extends Component {
  static PropTypes = {
    isOpen: PropTypes.bool,
  }

  static defaultProps = {
    // isOpen: undefined,
    anchor: 'bottom',
  }

  constructor(props) {
    super(props);

    // this.isControlled = this.props.isOpen !== undefined;

    this.state = {
      isOpen: /* this.isControlled ? this.props.isOpen : */ false,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isOpen !== this.state.isOpen) {
      if (this.ref) {
        if (this.state.isOpen) {
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

  render() {
    const {
      isOpen: isOpenProp,
      detail,
      summary,
      anchor,
    } = this.props;

    const isOpen = this.isControlled
      ? isOpenProp
      : this.state.isOpen;

    return (
      <Details
        innerRef={(node) => { this.ref = node; }}
        onToggle={({ target = {} }) => this.setState({ isOpen: target.open })}
        anchor={anchor}
        isOpen={isOpen}
      >
        <Summary anchor={anchor} isOpen={isOpen}>
          {summary || (isOpen ? 'Show less' : 'Show more')}
          <SummaryIcon isOpen={isOpen}>
            <Arrowright size="12" />
          </SummaryIcon>
        </Summary>
        <SubContent>
          {detail}
        </SubContent>
      </Details>
    );
  }
}


// export default enhanceWithClickOutside(Disclosure);
export default Disclosure;
