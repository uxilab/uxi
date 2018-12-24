import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import AutoComplete from 'uxi/AutoComplete';
import { routes } from './routes';
import { componentsData } from './searchData';

const Wrapper = styled.div` ul { top: 40px !important } `;
const PostFix = styled.span`
  color: grey;
  font-size: 85% !important;
`;

// flatMap
const flattenRoutes = routes
  .reduce((routes, route) => {
    routes.push(route)
    if (route.childRoutes) {
      routes = routes.concat(route.childRoutes)
    }
    return routes
  },[])
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
  }))

const routesWithPropData = componentsData
  .reduce((accu, data) => {
    if (data.componentInfo.props) {
      const routeForProp = Object.keys(data.componentInfo.props)
        .map(key => ({
          label: key,
          path: data.path,
          postFix: (
            <PostFix>
              {`<${data.componentInfo.displayName} `}
              <strong>
                {`${key}`}
              </strong>
              {` />`}
            </PostFix>
          ),
        })
      )
      accu = accu.concat(routeForProp)
    }
    return accu
}, [])

console.log('routesWithPropData', routesWithPropData)
const flattenRoutesWithPropData = routesWithPropData.concat(flattenRoutes)

const searchData = flattenRoutesWithPropData.map(route => ({
  ...route,
  // searchValue: `${route.label} • ${route.path}`,
}))

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
    }
  }

  render () {
    return (
      <Wrapper>
        <AutoComplete
          items={searchData}
          filterOn="label"
          onChange={(data) => {
            if (data.originalValue && data.originalValue.path) {
              this.props.goTo(data.originalValue.path)
            }
          }}
        />
      </Wrapper>
    )
  }
}

const state = (state) => ({})
const dispatch = dispatch => ({
  goTo: pathname => dispatch(push(`/components${pathname}`))
})

export default connect(
  state,
  dispatch
)(Search);
