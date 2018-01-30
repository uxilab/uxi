import React from 'react';
import Anonymize from '../Anonymize';

describe('Icon : <Anonymize />', () => {
  it('match snapshot', () => {
    expect(shallow(<Anonymize />)).toMatchSnapshot();
  });
});

