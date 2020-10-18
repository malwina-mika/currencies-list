import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from './SearchResult';
import SearchBar from './SearchBar';
import Item from './Item';

const listMockup = ["currency name", "second currency name"];

const select = {
	searchInput: '.searchInput',
	relative: '.relative',
	searchListWrapper: '.searchListWrapper',
	searchItem: '.searchItem'
}

describe('Components Render with Props', () => { 
	it('renders without crashing', () => {
		shallow(<SearchResult data={listMockup}/>);
	});

	it('renders without crashing', () => {
		shallow(<SearchBar />);
	});

	it('renders without crashing', () => {
		shallow(<Item />);
	});
})

it('should render a list with the body of each item inside a Item component', () => {
	const wrapper = shallow(<SearchResult data={listMockup} />);
	const data = wrapper.find('Item')
	expect(data).toHaveLength(listMockup.length)
});

describe('Styles Render', () => { 
	it('should render styles SearchResult', () => {
		const component = shallow(<SearchResult data={listMockup}/>)
		expect(component.find(select.relative).exists()).toEqual(true);
		expect(component.find(select.searchListWrapper).exists()).toEqual(true);
	})
	it('should render styles SearchBar', () => {
		const component = shallow(<SearchBar/>)
		expect(component.find(select.searchInput).exists()).toEqual(true);
	})
	it('should render styles Item', () => {
		const component = shallow(<Item/>)
		expect(component.find(select.searchItem).exists()).toEqual(true);
	})
})  