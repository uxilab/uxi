import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import AutoComplete from 'uxi/AutoComplete';
import { Flex } from 'uxi/Layout';
import { routes } from './routes';
import {
  componentsData,
  iconsData,
} from './searchData';

const Wrapper = styled.div`
  div[role="listitem"] {
    display: flex !important;
    align-items: center;

  }
  ul { top: 44px !important }
`;
const PostFix = styled.span`
  color: grey;
  font-size: 16px !important;
  display: flex;
  align-items: center;
  small {
    display: flex;
    align-items: center;
    font-size: 85% !important;
    font-weight: 100;
  }

`;

// flatMap
const flattenRoutes = routes
  .reduce((routes, route) => {
    routes.push(route);
    if (route.childRoutes) {
      routes = routes.concat(route.childRoutes);
    }
    return routes;
  }, [])
  .map(navRoute => ({
    ...navRoute,
    postFix: (navRoute.isHOC
      ? (
        <PostFix>
          {`${navRoute.label}(Component)`}
        </PostFix>
      )
      : (
        <PostFix>
          {`<${navRoute.label} />`}
        </PostFix>
      )
    ),
  }));

const propsDataReducer = (accu, data) => {
  if (data.componentInfo.props) {
    const {
      Icon,
      path,
      // componentInfo,
      componentInfo: {
        displayName,
        props = {},
      },
    } = data;
    const routeForProp = Object.keys(props)
      .map(key => ({
        label: key,
        path,
        postFix: (
          <PostFix>
            <Flex>
              <small>
                {`<${displayName || ''} `} </small> &nbsp;{key}&nbsp; <small> {' />'}
                {Icon && ' • '}&nbsp;{Icon && <Icon size="16" />}
              </small>
            </Flex>
          </PostFix>
          /*
          */
          /*
          <PostFix>
            <small>
              {`<${data.componentInfo.displayName} `}
            </small>
            {` ${key} `}
            <small>
              {' />'}
            </small>
            <small>
              {
                Icon
                  ? <div> • <Icon size="16" /></div>
                  : null
              }
            </small>
          </PostFix>

          */
        ),
      })
      );
    accu = accu.concat(routeForProp); // eslint-disable-line no-param-reassign
  }
  return accu;
};

const routesWithPropData = componentsData
  .reduce(propsDataReducer, []);

const flattenRoutesWithPropData = routesWithPropData.concat(flattenRoutes);

const IconDataWithIcon = iconsData.map((iconData) => {
  const {
    Icon,
    label,
  } = iconData;
  return {
    // ...iconData,
    path: iconData.path,
    label: iconData.label,
    postFix: <PostFix><Flex>{`<${label || ''} /> • `}&nbsp;<Icon size="16" /></Flex></PostFix>,
  };
});

const IconDataWithIconProp = iconsData
  .reduce(propsDataReducer, []);

// console.log('§§ iconsData', iconsData);
// console.log('§§ IconDataWithIconProp', IconDataWithIconProp);

const flattenRoutesWithPropDataAndIconsData = flattenRoutesWithPropData.concat([
  ...IconDataWithIcon,
  ...IconDataWithIconProp,
]);

const searchData = flattenRoutesWithPropDataAndIconsData.map(route => ({
  ...route,
  // searchValue: `${route.label} • ${route.path}`,
}));

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  render() {
    return (
      <Wrapper>
        <AutoComplete
          placeholder="Search for component, props, icon name..."
          resultLimit={80}
          strict
          items={searchData}
          filterOn="label"
          onChange={(data) => {
            if (data.originalValue && data.originalValue.path) {
              this.props.goTo(data.originalValue.path);
            }
          }}
        />
      </Wrapper>
    );
  }
}

const state = state => ({});
const dispatch = dispatch => ({
  goTo: pathname => dispatch(push(`/components${pathname}`)),
});

export default connect(
  state,
  dispatch
)(Search);
