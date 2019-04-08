import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
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

  it('should default state and calls a function on change', () => {
    const fn = jest.fn();
    const component = renderer.create(
      <SearchForm onChange={fn} />,
    );

    Enzyme.configure({ adapter: new Adapter() });

    const instance = component.getInstance();

    instance.props.onChange();

    expect(fn.mock.calls.length).toBe(1);
    expect(instance.state.value).toBe('');
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.main-search').exists()).toBe(true);
  });
});
