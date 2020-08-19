import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTest, checkProps } from '../../setupTests.js';

import Headline from './Headline.js';

describe('<Headline/>', () => {
	describe('component without props', () => {
		let wrapper;

		beforeEach(() => {
			wrapper = shallow(<Headline />);
		});

		afterEach(() => {
			wrapper.unmount();
		});
		test('should component not exist without props', () => {
			expect(findByDataTest(wrapper, 'test-headline').exists()).toBeFalsy();
		});
	});
	describe('component with props', () => {
		let wrapper;

		beforeEach(() => {
			const props = {
				title: 'Post',
				desc: 'Click to get Posts',
			};
			wrapper = shallow(<Headline {...props} />);
		});

		afterEach(() => {
			wrapper.unmount();
		});
		test('should component exist with props', () => {
			expect(findByDataTest(wrapper, 'test-headline').exists()).toBeTruthy();
		});
		test(`shouldn't throw a warning with the correct prop types`, () => {
			const expectedProps = {
				title: 'Test String',
				desc: 'Description String',
			};
			const propsError = checkProps(Headline, expectedProps);
			expect(propsError).toBeUndefined();
		});
	});
});
