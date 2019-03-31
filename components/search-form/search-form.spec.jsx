import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from './search-form';

function setup() {
  const wrapper = shallow(<SearchForm />);
  return { wrapper };
}

describe('SearchForm Test Suite', () => {
  it('render a MoviePageContainer', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
      
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.main-search').exists()).toBe(true);
  });
});
