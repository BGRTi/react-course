import { shallow } from 'enzyme';
import React from 'react';
import Card from './card';

const film = {
  name: 'first',
  year: '1991',
  duration: '151',
  description: 'Some text about film',
  genres: ['drama', 'ne drama'],
};

function setup() {
  const wrapper = shallow(<Card film={film} />);
  return { wrapper };
}

describe('CardsList Test Suite', () => {
  it('render a CardsList', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('Should have an image', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.movie-card').exists()).toBe(true);
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
