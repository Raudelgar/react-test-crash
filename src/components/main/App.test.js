import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { findByDataTest } from '../../setupTests.js';
import App from './App';

test('renders learn react link', () => {
	// const { getByText } = render(<App />);
	const wrapper = shallow(<App />);
	// const linkElement = getByText(/learn react/i);
	expect(findByDataTest(wrapper, 'react-main').text()).toMatch(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});
