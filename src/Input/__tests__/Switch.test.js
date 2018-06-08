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
      const instance = wrapper.instance()

      expect(instance.isControlled).toBe(false);
      expect(instance.state.checked).toBe(false);
      expect(instance.props.checked).toBeUndefined();
    })
  })

  describe('Controlled', () => {
    it('respect the props passed down no matter what', () => {
      const wrapper = getCompo({ checked: false });
      const instance = wrapper.instance()

      expect(instance.isControlled).toBe(true);
      expect(instance.state.checked).toBe(false);
      expect(instance.props.checked).toBe(false);
    })

    it('respect the props passed down no matter what', () => {
      const wrapper = getCompo({ checked: true });
      const instance = wrapper.instance()

      expect(instance.isControlled).toBe(true);
      // expect(instance.state.checked).toBe(true); // TODO fix the compo behaviour
      expect(instance.props.checked).toBe(true);
    })
  })
})
