import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Arrowdown from '../Icons/Arrowdown';
import Arrowright from '../Icons/Arrowright';
import Checkbox from './Checkbox';

const TreeNodeContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const ToogleLink = styled.a`
  width: 30px;
`;
class TreeNode extends Component {
  static propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    node: PropTypes.shape({
      Id: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
      IsChecked: PropTypes.bool,
      Parent: PropTypes.any,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      isChecked: props.isChecked || false,
    };
    this.select = this.select.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProp) {
    this.setState({ isChecked: nextProp.isChecked });
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  }

  select = (event, isChecked) => {
    const { onSelect, node } = this.props;

    if (onSelect) {
      onSelect({
        node,
        isChecked,
      });
    }
  }

  render() {
    const {
      node,
      onSelect,
      className,
      style,
    } = this.props;

    let childNodes;
    let content;

    if(!node) {
      return (
        <div className={className} style={style || {}}>
          {content}
        </div>
      );
    }

    const nodeValue = node.IsChecked || false;

    if (node && node.childNodes != null) {
      childNodes = node.childNodes.map(
        (n, index) => (
          <li key={index}>
            <TreeNode onSelect={onSelect} node={n} />
          </li>
        )
      );
    }

    const title = node.title || node.Name;

    if (this.state.visible) {
      let icon;

      if (node.childNodes && node.childNodes.length) {
        icon = (
          <ToogleLink onClick={this.toggle}>
            <Arrowdown />
          </ToogleLink>
        );
      }

      content = (
        <TreeNodeContainer>
          {icon}
          <Checkbox checked={nodeValue} onCheck={this.select} />
          {title}
        </TreeNodeContainer>
      );
    } else {
      let iconNotVisible;

      if (node.childNodes && node.childNodes.length) {
        iconNotVisible = (
          <ToogleLink onClick={this.toggle}>
            <Arrowright />
          </ToogleLink>
        );
      }

      content = (
        <TreeNodeContainer>
          {iconNotVisible}
          <Checkbox
            checked={nodeValue}
            onCheck={this.select}
          />
          {title}
        </TreeNodeContainer>
      );
    }

    return (
      <div className={className} style={style || {}}>
        {content}
        <ul>
          {childNodes}
        </ul>
      </div>
    );
  }
}

export default TreeNode;
