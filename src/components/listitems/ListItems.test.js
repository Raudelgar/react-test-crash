import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByDataTest, checkProps } from '../../setupTests.js';

import ListItems from './ListItems.js';

describe('<ListItems/>', () => {
	describe('Checking Props', () => {
		test('should not throw a warning', () => {
			const expectedProps = {
				title: 'Test',
				desc: 'Test',
			};
			const propsError = checkProps(ListItems, expectedProps);
			expect(propsError).toBeUndefined();
		});
	});
	describe('should be falsy without props', () => {
		let wrapper;

		beforeEach(() => {
			wrapper = shallow(<ListItems />);
		});
		afterEach(() => {
			wrapper.unmount();
		});
		test('component should not render without prop title', () => {
			expect(findByDataTest(wrapper, 'item').exists()).toBeFalsy();
		});
	});
	describe('component renders with props', () => {
		let wrapper;

		beforeEach(() => {
			const props = {
				title: 'Test',
				desc: 'Test',
			};
			wrapper = shallow(<ListItems {...props} />);
		});
		afterEach(() => {
			wrapper.unmount();
		});
		test('should render withput crash', () => {
			expect(findByDataTest(wrapper, 'item').exists()).toBeTruthy();
		});
	});
});
