import React from 'react';
import Connectors from '../Connectors';

describe('Icon : <Connectors />', () => {
  it('match snapshot', () => {
    expect(shallow(<Connectors />)).toMatchSnapshot();
  });
});

