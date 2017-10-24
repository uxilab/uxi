import React from 'react';

const defaultListStyle = {
  margin: 0,
  padding: 0,
  listStyle: 'none',
};

const defaultItemListStyle = {
  margin: 0,
  padding: '5px 0',
};

const bulltItemListStyle = {
  listStyleType: 'circle',
  marginLeft: '20px',
  paddingLeft: '4px',
  paddingTop: '5px',
  paddingBottom: '5px',
};

export const SimpleList = ({ children, isBullet, style = {}, listItemStyle = {} }) => {
  const listStyle = Object.assign({}, defaultListStyle, style || {});
  let defaultListItemStyle = isBullet ? bulltItemListStyle : defaultItemListStyle;

  defaultListItemStyle = Object.assign({}, defaultListItemStyle, listItemStyle);

  const listItems = React.Children.map(children, (child, menuNumber) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: defaultListItemStyle,
        key: `menuItem-${menuNumber}`,
      });
    }
    return child;
  });


  return (
    <ul style={listStyle}>
      {listItems}
    </ul>
  );
};

export default SimpleList;
