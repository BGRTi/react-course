import React from 'react';
import { shallow } from 'enzyme';

// Components
import HelloFunctionalComponent from './index';

function setup() {
  const wrapper = shallow(<HelloFunctionalComponent />);
  return { wrapper };
}

describe('HelloFunctionalComponent Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').exists()).toBe(true);
  });
});