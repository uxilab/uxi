import React, { Component } from 'react';
import styled from 'styled-components';
import AutoComplete from 'uxi/AutoComplete';
import { routes } from './routes';

console.log('routes insearch ', routes)

const Wrapper = styled.div` ul { top: 40px !important } `;

const searchData = routes.map(route => ({
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
          onChange={(...a) => {
            console.log('changed', ...a)
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

export default Search;
