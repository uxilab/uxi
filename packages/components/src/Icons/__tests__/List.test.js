import React from 'react';
import List from '../List';

describe('Icon : <List />', () => {
  it('match snapshot', () => {
    expect(shallow(<List />)).toMatchSnapshot();
  });
});

