import { shallow } from 'enzyme';
import React from 'react';
import CardsList from './cards-list';

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
  const wrapper = shallow(<CardsList films={filmsMock.films} />);
  return { wrapper };
}

describe('CardsList Test Suite', () => {
  it('render a CardsList', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });  

  it('Should have an image', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.movies-container').exists()).toBe(true);
  });
});
