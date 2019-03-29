import { shallow } from 'enzyme';

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
  const wrapper = shallow(CardsList(filmsMock.films));
  return { wrapper };
}

describe('CardsList Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.movie-card').exists()).toBe(true);
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
