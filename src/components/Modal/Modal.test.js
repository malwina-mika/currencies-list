import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';
import ModalWrapper from './ModalWrapper';

const listMockup = ["currency name", "second currency name"];

const select = {
	popup: '.popup',
	popupInner: '.popupInner',
	popupHeader: '.popupHeader',
	btnClose: '.btnClose',
	btnRemove: '.btnRemove',
	modalContainer: '.modalContainer',
	tooltip: '.tooltip',
	tooltiptext: '.tooltiptext',
}

describe('Components Render with Props', () => { 	
	it('should render without crashing', () => {; 
		shallow(<Modal />);
  	});
  
  	it('should render without crashing', () => {
		shallow(<ModalWrapper />);
  	});
  
})

describe('Styles Render', () => { 
	it('should render styles Modal', () => {
		const component = shallow(<Modal data={listMockup}/>)
		expect(component.find(select.popup).exists()).toEqual(true);
		expect(component.find(select.popupInner).exists()).toEqual(true);
		expect(component.find(select.popupHeader).exists()).toEqual(true);
		expect(component.find(select.btnClose).exists()).toEqual(true);
		expect(component.find(select.btnRemove).exists()).toEqual(true);
	})
	it('should render styles ModalWrapper', () => {
		const component = shallow(<ModalWrapper/>)
		expect(component.find(select.modalContainer).exists()).toEqual(true);
		expect(component.find(select.tooltip).exists()).toEqual(true);
		expect(component.find(select.tooltiptext).exists()).toEqual(true);
	})
})  
