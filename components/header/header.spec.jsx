import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

function setup() {
  const wrapper = shallow(<Header />);
  return { wrapper };
}

describe('HelloFunctionalComponent Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').exists()).toBe(true);
  });
});