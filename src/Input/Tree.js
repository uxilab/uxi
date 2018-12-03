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

const searchTree = (element, predicate) => {
  if (predicate(element)) {
    return element;
  }

  let result = null;
  (element.childNodes || []).forEach((child) => {
    if(!result) {
      result = searchTree(child, predicate);
    }
  });

  return result;
};

const updateTree = (node, checked, selectedId) => {
  const foundNode = searchTree(node, (n) => n.Id === selectedId);

  //when false we chould update the tree backwards
  foundNode.isChecked = checked;

  if(foundNode.childNodes) {
    forEachTreeElement(
      foundNode,
      (n) => {
        n.isChecked = checked;
      }
    );
  }

  return node;
};

const getUpdatedSelection = (node) => {
  
};
const arrayToTree = (arr, parentId = null) => {
  return (!arr || !arr.filter) ? [] : arr
    .filter(n => n.Parent === parentId)
    .map(n => ({ ...n, childNodes: arrayToTree(arr, n.Id) }));
}

const forEachTreeElement = (tree, cb, predicate) => {
  if (tree.childNodes) {
    tree.childNodes.forEach((n) => {
      forEachTreeElement(n, cb, predicate);
    });
  }

  if ((!predicate || predicate(tree)) && cb) {
    cb(tree);
  }
}

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
      node: props.defaultNode || {},
    };

    this.select = this.select.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onSelectElement = this.onSelectElement.bind(this);

  }
  onTreeSelectNode(name, tree, valuesFromTree) {
    const currentValues = this.props.feedValues[name];
    const checkedStates = {};

    forEachTreeElement(
      valuesFromTree.node,
      n => n.id === valuesFromTree.node.id,
      nn => checkedStates[nn.Id] = valuesFromTree.isChecked //eslint-disable-line
    );

    const nextValues = currentValues.map(cv => ({ ...cv, IsChecked: !!checkedStates[cv.Id] }));

  }


  toggle() {
    this.setState({ visible: !this.state.visible });
  }

  select (currentNode, isChecked) {
    const { node } = this.state;
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(
        currentNode,
        isChecked,
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
          ): (
          <Arrowright size={16} style={{ paddingLeft: '5px' }} />
          )
        }
      </ToogleLink>
    );
  }

  getNodeContent() {
    const { node, visible } = this.state;
    const { onSelectElement, isChild } = this.props;

    const nodeValue = node.isChecked || false;
    const title = node.title || node.Name;
    const expanderIconContent = this.getToggleLink();

    if (visible) {
     return (
        <TreeNodeContainer>
          {expanderIconContent}
          <Checkbox
            checked={nodeValue}
            onChange={(e, isChecked) => { isChild ? onSelectElement(node, isChecked) : this.onSelectElement(node, isChecked); }}
            label={title}
          />
        </TreeNodeContainer>
      );
    }

    return (
      <TreeNodeContainer>
        {expanderIconContent}
        <Checkbox
          checked={nodeValue}
          onChange={(e, isChecked) => { isChild ? onSelectElement(node, isChecked) : this.onSelectElement(node, isChecked); }}
          label={title}
        />
      </TreeNodeContainer>
    );
  }

  onSelectElement(selectedNode, isChecked) {
    alert('test')
    const { node } = this.state;
    const { onSelect } = this.props;

    const updateNodes = updateTree(node, isChecked, selectedNode.Id);
    const selectedNodes = getUpdatedSelection(updateNodes) || [];

    this.setState({
      node: updateNodes,
      selectedNodes,
    });

    if(onSelect) {
      onSelect(selectedNodes);
    }
  }

  render() {
    const {
      onSelect,
      className,
      style,
    } = this.props;
    const {
      node,
      visible
    } = this.state;

    let childNodes;
    let content;

    if(!node) {
      return (
        <div className={className} style={style || {}}>
          {content}
        </div>
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
                        onSelectElement={this.onSelectElement}
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
