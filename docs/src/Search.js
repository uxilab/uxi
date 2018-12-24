import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import AutoComplete from 'uxi/AutoComplete';
import { routes } from './routes';

const Wrapper = styled.div` ul { top: 40px !important } `;

// flatMap
const flattenRoutes = routes.reduce((routes, route) => {
  routes.push(route)
  if (route.childRoutes) {
    routes = routes.concat(route.childRoutes)
  }
  return routes
},[])

const searchData = flattenRoutes.map(route => ({
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

    return (
      <BETAAutoComplete
        items={routes}
        placeholder="Search..."
        isFullWidth
        onChange={(...a) => { console.log('changed', ...a)}}
      >
        {
          routes.map(r => <div value={r.path}>{r.label}</div>)
        }
      </BETAAutoComplete>
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
