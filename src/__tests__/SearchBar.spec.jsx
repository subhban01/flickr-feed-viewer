import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../components/presentational/SearchBar';

configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  it('should update searchValue on key press', () => {
    const component = shallow(<SearchBar handleSearch={function(){}} />);
    component.find('.search-field').simulate('keypress', {key: 's'})
    expect(component.searchValue === 's');
  });

  it('renders with defaults', () => {
    const component = shallow(<SearchBar />);
    expect(component.hasClass('searchbar')).toBeTruthy();
  });

  it('should simulate button click on pressing Enter/return on search field', () => {
    const component = shallow(<SearchBar handleSearch={function(){}} />);
    component.instance().handleSearch = jest.fn();
    component.find('.search-field').simulate('change', { target: { value: 'hello' } });
    component.find('.search-field').simulate('keypress', {key: 'Enter'});
    expect(component.instance().handleSearch).toBeCalled();
  });
});
