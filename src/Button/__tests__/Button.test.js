import React from 'react';
import Button from '../Button';
import { shallowWithTheme } from '../../../test/utils';


describe('<Button />', () => {
  it('should render a Button', () => {
    const testValue = 'YO!';
    const wrapper =
      shallowWithTheme(
        <Button onClick={() => { }} text={testValue} />
      );

    expect(wrapper).toMatchSnapshot();
    const button = wrapper.find(Button);
    expect(button.length).toEqual(1);
    expect(button.props().text).toContain(testValue);
  });

  it('exists', () => {
    expect(Button).not.toBeUndefined();
  });

  it('match snapshot', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handles various types ([none], primary, secondary, error, warning, info, success)', () => {
    it('type default (none)', () => {
      expect(shallow(<Button />)).toMatchSnapshot();
    });
    it('type primary', () => {
      expect(shallow(<Button type="primary" />)).toMatchSnapshot();
    });
    it('type secondary', () => {
      expect(shallow(<Button type="secondary" />)).toMatchSnapshot();
    });
    it('type error', () => {
      expect(shallow(<Button type="error" />)).toMatchSnapshot();
    });
    it('type warning', () => {
      expect(shallow(<Button type="warning" />)).toMatchSnapshot();
    });
    it('type info', () => {
      expect(shallow(<Button type="info" />)).toMatchSnapshot();
    });
    it('type success', () => {
      expect(shallow(<Button type="success" />)).toMatchSnapshot();
    });
  });

  // TODO fid those GD tests
  /*
  describe('handle being various nodeType', () => {
    fit('is a anchor (<a />) when passed a `link`(String) props', () => {
      const wrapper = shallowWithTheme(<Button link="cluedin.net" />)

      const button = wrapper.dive().find('button')
      const a = wrapper.dive().find('a')
      console.log('a', a)
      expect(button.length).toEqual(0)
      expect(a.length).toEqual(1)
    })

    it('is a div (<div />) when passed an `inert`(Bool) prop with value true', () => {
      // this test is most likely a sham
      const wrapper = shallowWithTheme(<Button inert />)

      const button = wrapper.find('button')
      const a = wrapper.find('a')
      const div = wrapper.find('div')
      expect(button.length).toBe(0)
      expect(a.length).toBe(0)
      expect(div.length).toBeGreaterThanOrEqual(1)
    })
  })
  */

  describe('Handles click events', () => {
    it('call `onClick`(Func) props, IF ANY passed, when clicked', () => {
      const spy = jest.fn();

      const wrapper = shallowWithTheme(<Button onClick={spy} />);

      const button = wrapper.find(Button);

      expect(button.length).toEqual(1);
      button.props().onClick();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

