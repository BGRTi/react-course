import React from 'react';
import { shallow } from 'enzyme';

import MoviePageContainer from './movie-page';

function setup() {
  const wrapper = shallow(<MoviePageContainer />);
  return { wrapper };
}

describe('MoviePageContainer Test Suite', () => {
  it('render a MoviePageContainer', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.movie-page').exists()).toBe(true);
  });
});
