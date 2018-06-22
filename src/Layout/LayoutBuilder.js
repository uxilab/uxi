import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, TabList, TabPanel, Tabs } from '../Tabs';
import Col from './Col';
import Row from './Row';

const defaultPlaceHolder = 'main';
const defaultGridSize = 4;

const defaultLayout = {
  name: 'Default',
  children: [
    {
      type: 'row',
      columns: [
        { size: 12, name: 'main' },
      ],
    },
  ],
};

const DefaultComponent = props => (
  <div>
      LayoutName: {props.identifier}<br />
      RenderingContext: {JSON.stringify(props || {})}
  </div>
);

const DebugComponentRenderer = ({ identifier, renderingContext, componentDefinition }) => (
  React.createElement(
    componentDefinition.component || DefaultComponent,
    Object.assign({ identifier }, renderingContext),
  )
);

class Layout extends Component {
  static defaultProps = {
    ComponentRenderer: DebugComponentRenderer,
    componentDefinitions: [],
    isMain: true,
  };

  static contextTypes = {
    layouts: PropTypes.array,
  };

  static filterComponents(componentDefinitions, placeHolderName) {
    return componentDefinitions.filter((componentDefinition) => {
      if (componentDefinition.place) {
        return componentDefinition.place === placeHolderName;
      }

      return defaultPlaceHolder === placeHolderName;
    });
  }
  static buildTabMenu(tab, index) {
    return (
      <Tab key={index}>{tab.displayName || tab.name}</Tab>
    );
  }

  getTabMenu(tabs) {
    return tabs.map(Layout.buildTabMenu, this);
  }

  getLayoutLayoutConfiguration() {
    const { layoutName } = this.props;
    if (!layoutName) {
      return defaultLayout;
    }
    const foundLayout = this.findLayout(layoutName);

    return foundLayout || defaultLayout;
  }

  getTabConfig(tab) {
    const { componentDefinitions, renderingContext } = this.props;

    return {
      renderingContext: Object.assign({}, renderingContext, {
        ignoreContext: tab.skipContext,
        includeSuggestedSearches: tab.includeSuggestedSearches,
        suggestedSearchFilter: tab.suggestedSearchFilter,
      }),
      layoutName: tab.layout ? tab.layout.name : '',
      componentDefinitions,
    };
  }

  getTabContent(tabs) {
    const { layoutName } = this.props;
    return tabs.map((tab) => {
      // TODO: separate the rendering Context from the Components to render
      const tabConfiguration = this.getTabConfig(tab);
      const layoutNameWithTab = `${layoutName}-${tab.name || tab.displayName}`;
      return (
        <TabPanel key={layoutNameWithTab}>
          <div className="cluedIn_container">
            <Layout
              componentDefinitions={tabConfiguration.componentDefinitions}
              renderingContext={tabConfiguration.renderingContext}
              layoutName={tab.layout ? tab.layout.name : ''}
              id={layoutNameWithTab}
              currentPlaceholderName={tab.name}
              isMain={false}
            />
          </div>
        </TabPanel>
      );
    });
  }

  findLayout(layoutName) {
    if (!this.context && !this.context.layouts) {
      return undefined;
    }

    return this.context.layouts.find(l => l.code === layoutName);
  }

  renderComponent(layoutName, componentDefinition) {
    const { renderingContext, ComponentRenderer } = this.props;

    return (
      <ComponentRenderer
        layoutName={layoutName}
        renderingContext={renderingContext}
        componentDefinition={componentDefinition}
      />
    );
  }

  renderComponents(parentPlaceholderName, placeHolderName, componentDefinitions) {
    const { renderingContext, ComponentRenderer } = this.props;
    const currentPlaceholderName = parentPlaceholderName ? `${parentPlaceholderName}.${placeHolderName}` : placeHolderName;

    const filteredComponents = Layout
      .filterComponents(componentDefinitions, currentPlaceholderName);

    return filteredComponents.map(componentDefinition => (
      <ComponentRenderer
        key={currentPlaceholderName}
        identifier={currentPlaceholderName}
        renderingContext={renderingContext}
        componentDefinition={componentDefinition}
      />
    ));
  }

  render() {
    const { componentDefinitions, layoutName, isMain, tabs, currentPlaceholderName } = this.props;
    const mainLayoutConfiguration = this.getLayoutLayoutConfiguration();
    const hasTab = (tabs && tabs[0] && tabs[0].children);

    let letTabContent;
    let tabContentPlaceholder;

    if (hasTab) {
      tabContentPlaceholder = tabs.place || 'main';

      const tabMenuContent = this.getTabMenu(tabs[0].children);
      const tabListContent = this.getTabContent(tabs[0].children, tabContentPlaceholder);

      if (tabListContent) {
        letTabContent = (
          <Tabs isMainStyle={isMain}>
            <TabList>
              {tabMenuContent}
            </TabList>
            {tabListContent}
          </Tabs>
        );
      }
    }

    const layoutContent = mainLayoutConfiguration.children.map((row, index) => {
      if (row.type === 'row') {
        if (
          hasTab &&
          mainLayoutConfiguration.children &&
          mainLayoutConfiguration.children.length === 1 &&
          mainLayoutConfiguration.children[0].columns &&
          mainLayoutConfiguration.children[0].columns.length === 1
        ) {
          return (
            <div key={`${layoutName}-mainCol-${index}`}>
              {row.columns.map((col, i) => (
                <div key={`${layoutName}-mainRow-${i}`}>
                  {
                    (letTabContent && col.name === tabContentPlaceholder)
                      ? letTabContent
                      : undefined
                  }
                  {this.renderComponents(currentPlaceholderName, col.name, componentDefinitions)}
                </div>
              ))}
            </div>
          );
        }
        return (
          <Row key={`row-${index}`}>
            {row.columns.map((col, i) => (
              <Col key={`col-${i}`} size={col.size} mobileSize={col.mobileSize}>
                {this.renderComponents(currentPlaceholderName, col.name, componentDefinitions)}
              </Col>
            ))}
          </Row>
        );
      }
      const gridSize = row.size || defaultGridSize;
      const gridPlaceHolderName = row.name || defaultPlaceHolder;

      return (
        <Row key={`row-${index}`}>
          {
            Layout.filterComponents(componentDefinitions, gridPlaceHolderName)
              .map((componentDefinition, i) => (
                <Col key={`col-${i}`}size={(gridSize)}>
                  {this.renderComponent(gridPlaceHolderName, componentDefinition)}
                </Col>
              ))
          }
        </Row>
      );
    });

    return (
      <div>
        {layoutContent}
      </div>
    );
  }
}

export default Layout;
