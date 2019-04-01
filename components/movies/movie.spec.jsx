import React from 'react';
import { shallow } from 'enzyme';

import MoviesContainer from './movies';
import CardsList from '../cards-list/cards-list';

const filmsMock = {
  films: [
    {
      id: 1,
      name: 'first',
      year: '1991',
      duration: '151',
      description: 'Some text about film',
      genres: ['drama', 'ne drama'],
    },
  ],
};

function setup() {
  const wrapper = shallow(<MoviesContainer state={filmsMock} />);
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
