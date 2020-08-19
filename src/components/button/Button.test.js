import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByDataTest, checkProps } from '../../setupTests.js';
import { render } from '@testing-library/react';

import Button from './Button.js';

describe('<Button />', () => {
	describe('render without props', () => {
		let wrapper;

		beforeEach(() => {
			wrapper = shallow(<Button />);
		});

		afterEach(() => {
			wrapper.unmount();
		});

		test('should not have text on render', () => {
			const component = findByDataTest(wrapper, 'btn-post');
			// console.log(component.debug());
			expect(component.textContent).toBeUndefined();
		});
	});
	describe('render with props', () => {
		let wrapper;

		beforeEach(() => {
			// wrapper = shallow(<Button text='Test' event={() => {}} />);
			wrapper = mount(<Button text='Test' event={() => {}} />);
		});

		afterEach(() => {
			wrapper.unmount();
		});
		describe('checking prop types', () => {
			test('should not throw a warning', () => {
				const expectedProps = {
					text: 'Test',
					event: () => {},
				};
				expect(wrapper.props().text).toEqual(expectedProps.text);
				expect(wrapper.props().event).toBeInstanceOf(Function);
			});
		});
	});
});
