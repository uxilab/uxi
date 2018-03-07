import React from 'react';
import styled from 'styled-components';
import Button, { ButtonLink } from '../Button';
import HorizontalMenu from '../Menu/HorizontalMenu';
import MenuItem from '../Menu/MenuItem';

// Filters 'only' open the FilterArea
// Actions are simple things like 'Create' / 'Export'... actions that act on the Entity and/or the Entire List
// hasSearch needs onSearchChange
import {
  Arrowdown,
  List,
  Picture,
  Idbadge,
} from 'uxi/Icons';
import {
  SearchForm,
} from 'uxi/Input';
import DataGrid from 'uxi/DataGrid';
import {
  File,
  Upload,
} from 'uxi/Icons';

const ListPageWrapper = styled.div`

`;

const ActionBar = styled.div`
   display:flex;
   align-items:center;
   padding: 4px 8px;
`;

const ActionSearchBar = styled.div`
   flex:1;
   max-width:400px;
   height:32px;
   padding-left:14px;
`;

const ActionFilterBar = styled.div`
  display:flex;
  padding-left:14px;
`;

const FiltersBar = styled.div`
   padding:14px;
   display:none;
`;

const ActionViewSwitcher = styled.div`
  padding-right:10px;
  display:flex;
  flex:1;
  justify-content:flex-end;
`;

const GridWrapper = styled.div`
   
`;

const MainFilterBar = styled.div`
  padding:14px;
  display:flex;
`;

const MenuWrapper = styled.div`
  flex:1;
`;

const ListPage = ({
  menuFilters = [],
  filters,
  hasSearch,
  onSearchChange,
  actions = [],
  entities,
  EntityDetailView,
}) => (
  <ListPageWrapper>
    <MainFilterBar>
      {
        menuFilters &&
        menuFilters.length > 0 &&
        <MenuWrapper>
          <HorizontalMenu>
            {menuFilters.map((filter, index) => (<MenuItem isActive={index === 0} key={filter.key}>{filter.displayName}</MenuItem>))}
          </HorizontalMenu>
        </MenuWrapper>
      }
      <ActionSearchBar>
        <SearchForm placeholder="Search for..." fullWidth />
      </ActionSearchBar>
    </MainFilterBar>
    <ActionBar>
      <ActionFilterBar>
        <div style={{ marginRight: '14px' }} >
          <ButtonLink text="New" icon={<File />} />
        </div>
        <div style={{ marginRight: '14px' }} >
          <ButtonLink text="Upload" icon={<Upload />} />
        </div>
      </ActionFilterBar>
      <ActionViewSwitcher>
        <div style={{ paddingLeft: '4px' }} >
          <Button icon={<Idbadge />} />
        </div>
        <div style={{ paddingLeft: '4px' }} >
          <Button icon={<Picture />} />
        </div>
        <div style={{ paddingLeft: '4px' }} >
          <Button icon={<List />} />
        </div>
        <div style={{ paddingLeft: '4px' }} >
          <Button icon={<Arrowdown />} />
        </div>
      </ActionViewSwitcher>

    </ActionBar>
    <FiltersBar>
        ListPageFilterDetails
    </FiltersBar>
    <GridWrapper>
      <DataGrid
        multiSelectable
        selectable
        data={entities}
      />
    </GridWrapper>
  </ListPageWrapper>
);

export default ListPage;
