import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import TableHeader from '../Table/TableHeader';
import TableData from '../Table/TableData';
import SearchBar from '../Search/SearchBar';

const select = {
	container: '.container',
	searchWrapper: '.searchWrapper',
	mainTable: '.mainTable',
	flex: '.flex'
  }

it('renders without crashing', () => {
  global.fetch = jest.fn(() => Promise.resolve()); 
  shallow(<App />);
});

describe('Components Render', () => { 
	it('renders a div', () => {
    expect(
	shallow(<App />)
        .first()
        .type(),
    ).toBe('div');
  });

  it('includes UsersList', () => {
	const app = shallow(<App />);
	expect(app.containsMatchingElement(<TableHeader />)).toEqual(true)
  });

  it('includes UsersList', () => {
	const app = shallow(<App />);
	expect(app.containsMatchingElement(<TableData />)).toEqual(true)
  });

  it('includes UsersList', () => {
	const app = shallow(<App />);
	expect(app.containsMatchingElement(<SearchBar />)).toEqual(true)
  });
  
  it('should render without crashing', () => {
    const component = shallow(<App />)
    expect(component).toBeTruthy()

  })
})

it('should render styles', () => {
    const component = shallow(<App />)
	expect(component.find(select.container).exists()).toEqual(true);
	expect(component.find(select.searchWrapper).exists()).toEqual(true);
	expect(component.find(select.mainTable).exists()).toEqual(true);
	expect(component.find(select.flex).exists()).toEqual(true)
})