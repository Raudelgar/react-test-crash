// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import { createStore, combineReducers } from 'redux';
import middleware from './middlewares/middleware.js';
import { runSaga } from 'redux-saga';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

export const findByDataTest = (component, id) =>
	component.find(`[data-test='${id}']`);

export const checkProps = (component, expectedProps) =>
	checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export const testRootReducer = (initialState) => combineReducers(initialState);
export const testStore = (reducer) => createStore(reducer, middleware);

//saga test creator
export async function recordSaga(saga, initialAction) {
	const dispatched = [];

	await runSaga(
		{
			dispatch: (action) => dispatched.push(action),
		},
		saga,
		initialAction
	).done;

	return dispatched;
}
