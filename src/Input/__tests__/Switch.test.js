import Switch from '../Switch';
import React from 'react';
import { mountWithTheme } from '../../../test/utils';

const defaultProps = { };

const getCompo = props => (
  shallow(
    // mountWithTheme(
    <Switch
      {...defaultProps}
      {...props}
    />
    // )
  )
)

describe('<Switch />', () => {
  it('exists', () => {
    expect(Switch).toBeDefined()
  })

  it('matches snapshot', () => {
    const wrapper = getCompo();
    expect(wrapper).toMatchSnapshot();
  })

  describe('Uncontrolled', () => {
    it('handles its own state', () => {
      const wrapper = getCompo({});

      expect(wrapper.instance().isControlled).toBe(false);
      expect(wrapper.state().checked).toBe(false);
      expect(wrapper.props().checked).toBeUndefined();
    })
  })

  describe('Controlled', () => {
    it('respect the props passed down no matter what', () => {
      const wrapper = shallow(<Switch checked />);
      console.log(wrapper)
      console.log(wrapper.props().checked)

      expect(wrapper.instance().isControlled).toBe(true);
      // expect(wrapper.props().checked).toBe(true);
      // expect(wrapper.props().checked).toBe(true);
    })
  })
})
