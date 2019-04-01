import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

function setup() {
  const wrapper = shallow(<Header />);
  return { wrapper };
}

describe('HelloFunctionalComponent Test Suite', () => {
  it('render a Header', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.main-header').exists()).toBe(true);
  });
});