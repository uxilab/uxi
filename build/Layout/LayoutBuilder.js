'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('../Tabs');

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultPlaceHolder = 'main';
var defaultGridSize = 4;

var defaultLayout = {
  name: 'Default',
  children: [{
    type: 'row',
    columns: [{ size: 12, name: 'main' }]
  }]
};

var DefaultComponent = function DefaultComponent(props) {
  return _react2.default.createElement(
    'div',
    null,
    'LayoutName: ',
    props.identifier,
    _react2.default.createElement('br', null),
    'RenderingContext: ',
    (0, _stringify2.default)(props || {})
  );
};

var DebugComponentRenderer = function DebugComponentRenderer(_ref) {
  var identifier = _ref.identifier,
      renderingContext = _ref.renderingContext,
      componentDefinition = _ref.componentDefinition;
  return _react2.default.createElement(componentDefinition.component || DefaultComponent, (0, _simpleAssign2.default)({ identifier: identifier }, renderingContext));
};

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);
    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'getTabMenu',
    value: function getTabMenu(tabs) {
      return tabs.map(Layout.buildTabMenu, this);
    }
  }, {
    key: 'getLayoutLayoutConfiguration',
    value: function getLayoutLayoutConfiguration() {
      var layoutName = this.props.layoutName;

      if (!layoutName) {
        return defaultLayout;
      }
      var foundLayout = this.findLayout(layoutName);

      return foundLayout || defaultLayout;
    }
  }, {
    key: 'getTabConfig',
    value: function getTabConfig(tab) {
      var _props = this.props,
          componentDefinitions = _props.componentDefinitions,
          renderingContext = _props.renderingContext;


      return {
        renderingContext: (0, _simpleAssign2.default)({}, renderingContext, {
          ignoreContext: tab.skipContext,
          includeSuggestedSearches: tab.includeSuggestedSearches,
          suggestedSearchFilter: tab.suggestedSearchFilter
        }),
        layoutName: tab.layout ? tab.layout.name : '',
        componentDefinitions: componentDefinitions
      };
    }
  }, {
    key: 'getTabContent',
    value: function getTabContent(tabs) {
      var _this2 = this;

      var layoutName = this.props.layoutName;

      return tabs.map(function (tab) {
        var tabConfiguration = _this2.getTabConfig(tab); // TODO: separate the rendering Context from the Components to render
        var layoutNameWithTab = layoutName + '-' + (tab.name || tab.displayName);
        return _react2.default.createElement(
          _Tabs.TabPanel,
          { key: layoutNameWithTab },
          _react2.default.createElement(
            'div',
            { className: 'cluedIn_container' },
            _react2.default.createElement(Layout, {
              componentDefinitions: tabConfiguration.componentDefinitions,
              renderingContext: tabConfiguration.renderingContext,
              layoutName: tab.layout ? tab.layout.name : '',
              id: layoutNameWithTab,
              currentPlaceholderName: tab.name,
              isMain: false
            })
          )
        );
      });
    }
  }, {
    key: 'findLayout',
    value: function findLayout(layoutName) {
      if (!this.context && !this.context.layouts) {
        return;
      }

      return this.context.layouts.find(function (l) {
        return l.code === layoutName;
      });
    }
  }, {
    key: 'renderComponent',
    value: function renderComponent(layoutName, componentDefinition) {
      var _props2 = this.props,
          renderingContext = _props2.renderingContext,
          ComponentRenderer = _props2.ComponentRenderer;


      return _react2.default.createElement(ComponentRenderer, {
        layoutName: layoutName,
        renderingContext: renderingContext,
        componentDefinition: componentDefinition
      });
    }
  }, {
    key: 'renderComponents',
    value: function renderComponents(parentPlaceholderName, placeHolderName, componentDefinitions) {
      var _props3 = this.props,
          renderingContext = _props3.renderingContext,
          ComponentRenderer = _props3.ComponentRenderer;

      var currentPlaceholderName = parentPlaceholderName ? parentPlaceholderName + '.' + placeHolderName : placeHolderName;

      var filteredComponents = Layout.filterComponents(componentDefinitions, currentPlaceholderName);

      return filteredComponents.map(function (componentDefinition) {
        return _react2.default.createElement(ComponentRenderer, {
          key: currentPlaceholderName,
          identifier: currentPlaceholderName,
          renderingContext: renderingContext,
          componentDefinition: componentDefinition
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props4 = this.props,
          componentDefinitions = _props4.componentDefinitions,
          layoutName = _props4.layoutName,
          isMain = _props4.isMain,
          tabs = _props4.tabs,
          currentPlaceholderName = _props4.currentPlaceholderName;

      var mainLayoutConfiguration = this.getLayoutLayoutConfiguration();
      var hasTab = tabs && tabs[0] && tabs[0].children;

      var letTabContent = void 0;
      var tabContentPlaceholder = void 0;

      if (hasTab) {
        tabContentPlaceholder = tabs.place || 'main';

        var tabMenuContent = this.getTabMenu(tabs[0].children);
        var tabListContent = this.getTabContent(tabs[0].children, tabContentPlaceholder);

        if (tabListContent) {
          letTabContent = _react2.default.createElement(
            _Tabs.Tabs,
            { isMainStyle: isMain },
            _react2.default.createElement(
              _Tabs.TabList,
              null,
              tabMenuContent
            ),
            tabListContent
          );
        }
      }

      var layoutContent = mainLayoutConfiguration.children.map(function (row, index) {
        if (row.type === 'row') {
          if (hasTab && mainLayoutConfiguration.children && mainLayoutConfiguration.children.length === 1 && mainLayoutConfiguration.children[0].columns && mainLayoutConfiguration.children[0].columns.length === 1) {
            return _react2.default.createElement(
              'div',
              { key: layoutName + '-mainCol-' + index },
              row.columns.map(function (col, i) {
                return _react2.default.createElement(
                  'div',
                  { key: layoutName + '-mainRow-' + i },
                  letTabContent && col.name === tabContentPlaceholder ? letTabContent : void 0,
                  _this3.renderComponents(currentPlaceholderName, col.name, componentDefinitions)
                );
              })
            );
          }
          return _react2.default.createElement(
            _Row2.default,
            { key: 'row-' + index },
            row.columns.map(function (col, i) {
              return _react2.default.createElement(
                _Col2.default,
                { key: 'col-' + i, size: col.size, mobileSize: col.mobileSize },
                _this3.renderComponents(currentPlaceholderName, col.name, componentDefinitions)
              );
            })
          );
        }
        var gridSize = row.size || defaultGridSize;
        var gridPlaceHolderName = row.name || defaultPlaceHolder;

        return _react2.default.createElement(
          _Row2.default,
          { key: 'row-' + index },
          Layout.filterComponents(componentDefinitions, gridPlaceHolderName).map(function (componentDefinition, i) {
            return _react2.default.createElement(
              _Col2.default,
              { key: 'col-' + i, size: gridSize },
              _this3.renderComponent(gridPlaceHolderName, componentDefinition)
            );
          })
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        layoutContent
      );
    }
  }], [{
    key: 'filterComponents',
    value: function filterComponents(componentDefinitions, placeHolderName) {
      return componentDefinitions.filter(function (componentDefinition) {
        if (componentDefinition.place) {
          return componentDefinition.place === placeHolderName;
        }

        return defaultPlaceHolder === placeHolderName;
      });
    }
  }, {
    key: 'buildTabMenu',
    value: function buildTabMenu(tab, index) {
      return _react2.default.createElement(
        _Tabs.Tab,
        { key: index },
        tab.displayName || tab.name
      );
    }
  }]);
  return Layout;
}(_react.Component);

Layout.defaultProps = {
  ComponentRenderer: DebugComponentRenderer,
  componentDefinitions: [],
  isMain: true
};
Layout.contextTypes = {
  layouts: _react.PropTypes.array
};
exports.default = Layout;