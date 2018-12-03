import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Arrowdown from '../Icons/Arrowdown';
import Arrowright from '../Icons/Arrowright';
import Checkbox from './Checkbox';

const TreeNodeContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const ToogleLink = styled.a`
  width: 30px;
  display: flex;
  align-items: center;
`;

const forEachTreeElement = (tree, cb, predicate) => {
  if (tree.childNodes) {
    tree.childNodes.forEach((n) => {
      forEachTreeElement(n, cb, predicate);
    });
  }

  if ((!predicate || predicate(tree)) && cb) {
    cb(tree);
  }
};

const searchTree = (element, predicate) => {
  if (predicate(element)) {
    return element;
  }

  let result = null;
  (element.childNodes || []).forEach((child) => {
    if (!result) {
      result = searchTree(child, predicate);
    }
  });

  return result;
};

const updateTree = (node, checked, selectedId) => {
  const foundNode = searchTree(node, n => n.id === selectedId);

  // when false we chould update the tree backwards
  foundNode.isChecked = checked;

  if (foundNode.childNodes) {
    forEachTreeElement(
      foundNode,
      (n) => {
        // eslint-disable-next-line no-param-reassign
        n.isChecked = checked;
      }
    );
  }

  return node;
};

const getUpdatedSelection = (node) => {
  const result = [];

  forEachTreeElement(node, (n) => {
    if (n.isChecked) {
      result.push(n.id);
    }
  });

  return result;
};

const arrayToTree = (arr, parentId = null) => ((!arr || !arr.filter) ? [] : arr
  .filter(n => n.Parent === parentId)
  .map(n => ({ ...n, childNodes: arrayToTree(arr, n.id) })));

class TreeNode extends Component {
  static propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    defaultNode: PropTypes.shape({
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
      node: props.defaultNode || {},
    };

    this.select = this.select.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onMainChange = this.onMainChange.bind(this);
  }
  onMainChange(selectedNode, isChecked) {
    const { onChange } = this.props;
    const { node } = this.state;

    const updateNodes = updateTree(node, isChecked, selectedNode.id);
    const selectedNodes = getUpdatedSelection(updateNodes) || [];

    this.setState({
      node: updateNodes,
      selectedNodes,
    });

    if (onChange) {
      onChange(updateNodes, selectedNodes);
    }
  }

  getNodeContent() {
    const { node, visible } = this.state;
    const { onSelectElement, isChild, onMainChange } = this.props;

    const nodeValue = node.isChecked || false;
    const title = node.title || node.Name;
    const expanderIconContent = this.getToggleLink();

      return (
        <TreeNodeContainer>
          {expanderIconContent}
          <Checkbox
            checked={nodeValue}
            onChange={
              (e, isChecked) => {
                if(onMainChange) {
                  onMainChange(node, isChecked);
                } else {
                  this.onMainChange(node, isChecked);
                }
              }
            }
            label={title}
          />
        </TreeNodeContainer>
      );
    }
  }
  getToggleLink() {
    const { visible, node } = this.state;

    if (
      !node ||
      !node.childNodes ||
      node.childNodes.length === 0
    ) {
      return <span style={{ paddingLeft: '30px' }} />;
    }

    return (
      <ToogleLink onClick={this.toggle}>
        {
          visible ? (
            <Arrowdown size={16} style={{ paddingLeft: '5px' }} />
          ) : (
            <Arrowright size={16} style={{ paddingLeft: '5px' }} />
          )
        }
      </ToogleLink>
    );
  }

  select(currentNode, isChecked) {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(
        currentNode,
        isChecked,
      );
    }
  }

  toggle() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const {
      className,
      style,
      isChild,
      onMainChange,
    } = this.props;
    const {
      node,
      visible,
    } = this.state;

    if (!node || !node.id) {
      return (
        <div className={className} style={style || {}} />
      );
    }

    const currentNodeContent = this.getNodeContent();

    return (
      <div className={className} style={style || {}}>
        {currentNodeContent}
        {
          node &&
          node.childNodes != null &&
          visible &&
          (
            <ul style={{ marginLeft: '30px' }}>
              {
                node.childNodes.map(
                  (n, index) => (
                    <li key={index}>
                      <TreeNode
                        isChild={true}
                        onMainChange={onMainChange ? onMainChange : this.onMainChange}
                        defaultNode={n}
                      />
                    </li>
                  )
                )
              }
            </ul>
          )
        }
      </div>
    );
  }
}

export default TreeNode;
