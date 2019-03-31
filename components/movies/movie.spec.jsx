import React from 'react';
import { shallow } from 'enzyme';

import MoviesContainer from './movies';
import CardsList from '../cards-list/cards-list';

function setup() {
  const wrapper = shallow(<MoviesContainer />);
  return { wrapper };
}

describe('MoviesContainer Test Suite', () => {
  it('render a MoviesContainer', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find(CardsList).exists()).toBe(true);
  });
});
