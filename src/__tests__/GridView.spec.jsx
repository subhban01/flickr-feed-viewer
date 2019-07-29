import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GridView from '../components/presentational/GridView';

configure({ adapter: new Adapter() });

describe('GridView', () => {
  it('renders without crashing when no properties are provided', () => {
    const container = document.createElement('div');
    ReactDOM.render(<GridView />, container);
    ReactDOM.unmountComponentAtNode(container);
  });

  it('renders when empty feed is passed as props', () => {
    const component = shallow(<GridView publicFeed={[]} />);
    expect(component.hasClass('gridview-container')).toBeTruthy();
  });
});
