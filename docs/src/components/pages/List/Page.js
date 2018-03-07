import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import { ListPage } from 'uxi/Layout';
import Widget from 'uxi/Widget';

const data = [
  { id: 1, make: 'Toyota', model: 'Celica', price: 35000 },
  { id: 2, make: 'Ford', model: 'Mondeo', price: 32000 },
  { id: 3, make: 'Porsche', model: 'Boxter', price: 72000 },
];

const menuFilters = [
  {
    displayName: 'All',
    key: 'used',
  },
  {
    displayName: 'New',
    key: 'used',
  },
  {
    displayName: 'User',
    key: 'used',
  },
];

const ListPageEx = () => (
  <div style={{background:'#ccc', padding:'30px'}}>
    <div style={{background:'#fff'}}>
      <Widget title="List Page Example">
        <ListPage menuFilters={menuFilters} entities={data} />
      </Widget>
    </div>
  </div>
);

export default ListPageEx;
