import React, { Component } from 'react';
import { List, ListItem, makeSelectable } from 'material-ui/List';

const SelectableList = makeSelectable(List);

export default class Home extends Component {
  handleChangeList(event, value) {

  }

  render() {
    return (<div>
      <SelectableList
        onChange={this.handleChangeList.bind(this)}
        value={location.pathname}
      >
        <ListItem
          primaryText="Components"
          primaryTogglesNestedList
          nestedItems={[
            <ListItem primaryText="Layout" value="/components/layout" href="#/components/layout"/>,
            <ListItem primaryText="Alert" value="/components/alert" href="#/components/alert"/>,
            <ListItem primaryText="Badge" value="/components/badge" href="#/components/badge"/>,
            <ListItem primaryText="Form" value="/components/form" href="#/components/form"/>,
            <ListItem primaryText="Button" value="/components/button" href="#/components/Button"/>,
            <ListItem primaryText="Toast" value="/components/toast" href="#/components/Toast"/>,
            <ListItem primaryText="MiniLoading" value="/components/miniloading" href="#/components/miniloading"/>,
            <ListItem primaryText="DockedContainer" value="/components/dockedcontainer"
                      href="#/components/dockedcontainer"/>,
            <ListItem primaryText="Tab" value="/components/Tab" href="#/components/Tab"/>,
            <ListItem primaryText="MainMenu" value="/components/MainMenu" href="#/components/MainMenu"/>,
            <ListItem primaryText="Widget" value="/components/Widget" href="#/components/Widget"/>,
            <ListItem primaryText="DataList" value="/components/DataList" href="#/components/DataList"/>,
            <ListItem primaryText="MainSearchInput" value="/components/MainSearchInput"
                      href="#/components/MainSearchInput"/>,
            <ListItem primaryText="Table" value="/components/Table" href="#/components/Table"/>,
            <ListItem primaryText="PageStructureHeader" value="/components/PageStructureHeader" href="#/components/PageStructureHeader"/>,
            <ListItem primaryText="WidgetAnalytics" value="/components/WidgetAnalytics" href="#/components/WidgetAnalytics"/>,
            <ListItem primaryText="Frame" value="/components/Frame" href="#/components/Frame"/>,
            <ListItem primaryText="NoEntityMessage" value="/components/NoEntityMessage" href="#/components/NoEntityMessage"/>,
            <ListItem primaryText="Icons" value="/components/Icons" href="#/components/Icons"/>,
            <ListItem primaryText="PlaceholderText" value="/components/placeholdertext" href="#/components/placeholdertext"/>,
            <ListItem primaryText="searchResult" value="/components/searchResult" href="#/components/searchResult"/>,
            <ListItem primaryText="searchfilter" value="/components/searchfilter" href="#/components/searchfilter"/>,
          ]}
        />
      </SelectableList>
    </div>);
  }
}
