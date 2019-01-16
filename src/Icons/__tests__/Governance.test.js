import React from 'react';
import Governance from '../Governance';

describe('Icon : <Governance />', () => {
  it('match snapshot', () => {
    expect(shallow(<Governance />)).toMatchSnapshot();
  });
});

