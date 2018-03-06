import React from 'react';
import styled from 'styled-components';
import Button from 'uxi/Button';
// Filters 'only' open the FilterArea
// Actions are simple things like 'Create' / 'Export'... actions that act on the Entity and/or the Entire List
// hasSearch needs onSearchChange
import { Issue } from 'uxi/Icons';

const ListPageWrapper = styled.div`

`;

const ActionBar = styled.div`
   background: #e2e2e2;

`;

const FiltersBar = styled.div`
   background: #f2f2f2;
   padding:15px;
`;

const GridWrapper = styled.div`
   
`;

const ListPage = ({ filters, hasSearch, onSearchChange, actions = [], EntityDetailView }) => {
  const toto = '';

  return (
    <ListPageWrapper>
      <ActionBar>
        <Button icon={<Issue />} />
      </ActionBar>
      <FiltersBar>
        ListPageFilterDetails
      </FiltersBar>
      <GridWrapper>
        Some Content
      </GridWrapper>
    </ListPageWrapper>
  );
};

export default ListPage;
