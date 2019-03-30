import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

function setup() {
  const wrapper = shallow(<Header />);
  return { wrapper };
}

test('render a Header', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});

describe('HelloFunctionalComponent Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').exists()).toBe(true);
  });
});