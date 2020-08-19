import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { mount, shallow } from 'enzyme';
// import {render, cleanup} from '@testing-library/react';
import { findByDataTest } from '../../setupTests.js';
import Header from './Header.js';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<Header />);
});

afterEach(() => {
	wrapper.unmount();
});

describe('<Header/>', () => {
	test('render component if exists', () => {
		expect(findByDataTest(wrapper, 'test-header').exists()).toBeTruthy();
	});
});
