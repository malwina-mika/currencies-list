import React from 'react';
import { shallow } from 'enzyme';
import TableHeader from './TableHeader';
import TableData from './TableData';

const favoriteMockup = [
	{
	currency: "name",
	code: "CODE",
	mid: 0.22,
	key: 1,},
	{
	currency: "name1",
	code: "CODE1",
	mid: 0.232,
	key: 2,}]

const select = {
	tableBody: '.tableBody',
	tableHead: '.tableHead', 
}

describe('Components Render with Props', () => { 
	it('should render without crashing', () => {
		shallow(<TableHeader />);
	});
	
	it('should render without crashing', () => {
		shallow(<TableData currencyTable={favoriteMockup} />);
	});
})

it('should render a list with the body of each item inside a <tr> tag', () => {
	const wrapper = shallow(<TableData currencyTable={favoriteMockup} />);
	const currencyTable = wrapper.find('tr')
	expect(currencyTable).toHaveLength(favoriteMockup.length)
});

describe('Styles Render', () => { 
	it('should render styles TableHeader', () => {
		const component = shallow(<TableHeader />)
		expect(component.find(select.tableHead).exists()).toEqual(true);
	})
	it('should render styles TableData', () => {
		const component = shallow(<TableData currencyTable={favoriteMockup}/>)
		expect(component.find(select.tableBody).exists()).toEqual(true);
	})
})