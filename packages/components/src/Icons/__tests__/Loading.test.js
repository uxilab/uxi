import React from 'react';
import Loading from '../Loading';

describe('Icon : <Loading />', () => {
  it('match snapshot', () => {
    expect(shallow(<Loading />)).toMatchSnapshot();
  });
});

