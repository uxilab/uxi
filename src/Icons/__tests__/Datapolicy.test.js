import React from 'react';
import Datapolicy from '../Datapolicy';

describe('Icon : <Datapolicy />', () => {
  it('match snapshot', () => {
    expect(shallow(<Datapolicy />)).toMatchSnapshot();
  });
});

