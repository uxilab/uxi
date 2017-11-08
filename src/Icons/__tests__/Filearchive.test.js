import React from 'react';
import Filearchive from '../Filearchive';

describe('Icon : <Filearchive />', () => {
  it('match snapshot', () => {
    expect(shallow(<Filearchive />)).toMatchSnapshot();
  });
});


