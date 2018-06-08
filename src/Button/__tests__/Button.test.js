import React from 'react';
import Button from '../Button';
import { mountWithTheme } from '../../../test/utils';



describe('<Button />', () => {
  it('should render a Button', () => {
    const testValue = 'YO!';
    const wrapper =
      mountWithTheme(
        <Button onClick={() => { }} text={testValue} />
      )

    expect(wrapper).toMatchSnapshot();
    const button = wrapper.find(Button);
    expect(button.length).toEqual(1);
    expect(button.props().text).toContain(testValue);
  });

  it('exists', () => {
    expect(Button).not.toBeUndefined()
  })

  it('match snapshot', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper).toMatchSnapshot();
  })

  describe('handles various types ([none], primary, secondary, error, warning, info, success)', () => {
    it('type default (none)', () => {
      expect(shallow(<Button />)).toMatchSnapshot();
    })
    it('type primary', () => {
      expect(shallow(<Button type="primary" />)).toMatchSnapshot();
    })
    it('type secondary', () => {
      expect(shallow(<Button type="secondary" />)).toMatchSnapshot();
    })
    it('type error', () => {
      expect(shallow(<Button type="error" />)).toMatchSnapshot();
    })
    it('type warning', () => {
      expect(shallow(<Button type="warning" />)).toMatchSnapshot();
    })
    it('type info', () => {
      expect(shallow(<Button type="info" />)).toMatchSnapshot();
    })
    it('type success', () => {
      expect(shallow(<Button type="success" />)).toMatchSnapshot();
    })
  })

  describe('handle being various nodeType', () => {
    it('is a anchor (<a />) when passed a `link`(String) props', () => {
      const wrapper = mountWithTheme(<Button link="cluedin.net" />)

      const button = wrapper.find('button')
      const a = wrapper.find('a')
      expect(button.length).toBe(0)
      expect(a.length).toBe(1)
    })

    it('is a div (<div />) when passed an `inert`(Bool) prop with value true', () => {
      const wrapper = mountWithTheme(<Button inert />)

      const button = wrapper.find('button')
      const a = wrapper.find('a')
      const div = wrapper.find('div')
      expect(button.length).toBe(0)
      expect(a.length).toBe(0)
      expect(div.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('Handles click events', () => {
    it('call `onClick`(Func) props, IF ANY passed, when clicked', () => {
      const spy = jest.fn()

      const wrapper = mountWithTheme(<Button onClick={spy} />)

      const button = wrapper.find('button')
      expect(button.length).toBe(1)
      button.props().onClick()
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})

