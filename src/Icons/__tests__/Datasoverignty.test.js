import React from 'react';
import Datasoverignty from '../Datasoverignty';

describe('Icon : <Datasoverignty />', () => {
  it('match snapshot', () => {
    expect(shallow(<Datasoverignty />)).toMatchSnapshot();
  });
});

