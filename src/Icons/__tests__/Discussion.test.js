import React from 'react';
import Discussion from '../Discussion';

describe('Icon : <Discussion />', () => {
  it('match snapshot', () => {
    expect(shallow(<Discussion />)).toMatchSnapshot();
  });
});

