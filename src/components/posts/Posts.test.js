import React from 'react';
import { testStore, testRootReducer } from '../../setupTests.js';
import { render, screen, waitForElement } from '@testing-library/react';
import reducer from './reducer.js';
import * as action from './actions.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import Posts from './Posts.js';
import { Provider } from 'react-redux';

//Gobal
const mockData = ['sunt aut facere', 'provident occaecati', 'facere repellat'];
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Post Component and Redux', () => {
	describe('Post Actions Test', () => {
		it('should action getPost create a post action object', () => {
			const expectedAction = {
				type: action.GET_POSTS,
				payload: mockData,
			};
			expect(action.getPost(mockData)).toEqual(expectedAction);
		});
		it('should create GET_POST when fetching posts has been done', async () => {
			jest
				.spyOn(axios, 'get')
				.mockResolvedValueOnce({ data: ['lorem1', 'lorems2', 'lorems3'] });

			const expectedAction = {
				type: action.GET_POSTS,
				payload: ['lorem1', 'lorems2', 'lorems3'],
			};

			const store = mockStore({ posts: [] });
			await store.dispatch(action.fetchPosts());

			expect(store.getActions()).toEqual([expectedAction]);
		});
	});
	describe('Posts Reducer Tests', () => {
		it('should post reducer return default state', () => {
			const state = reducer(undefined, {});
			expect(state).toEqual([]);
		});

		it('should post reducer return new state on action', () => {
			const state = reducer(undefined, {
				type: action.GET_POSTS,
				payload: mockData,
			});

			expect(state).not.toEqual([]);
			expect(state).toEqual(mockData);
		});
	});
	describe('Redux Store', () => {
		let mockStore;
		let mockReducer;
		let mockInialState = {
			posts: reducer,
		};

		beforeEach(() => {
			mockReducer = testRootReducer(mockInialState);
			mockStore = testStore(mockReducer);
		});

		test('should store intial state be an empty array', () => {
			const { posts } = mockStore.getState();
			expect(posts).toEqual([]);
		});
		test('should state be update on dispacth action', async () => {
			const expectedStore = {
				posts: [
					{
						title: 'Test1',
						body: 'Some text',
					},
					{
						title: 'Test2',
						body: 'Some text',
					},
					{
						title: 'Test3',
						body: 'Some text',
					},
				],
			};
			jest.spyOn(axios, 'get').mockResolvedValueOnce({
				data: [
					{
						title: 'Test1',
						body: 'Some text',
					},
					{
						title: 'Test2',
						body: 'Some text',
					},
					{
						title: 'Test3',
						body: 'Some text',
					},
				],
			});

			await mockStore.dispatch(action.fetchPosts());

			expect(mockStore.getState()).toEqual(expectedStore);
		});
	});
	describe('<Posts />', () => {
		let mockStore;
		let mockReducer;
		let mockInialState = {
			posts: reducer,
		};

		beforeEach(() => {
			mockReducer = testRootReducer(mockInialState);
			mockStore = testStore(mockReducer);
		});
		it('should be state empty on mount', async () => {
			jest.spyOn(axios, 'get').mockResolvedValueOnce({
				data: [
					{
						title: 'Test1',
						body: 'Some text',
					},
					{
						title: 'Test2',
						body: 'Some text',
					},
					{
						title: 'Test3',
						body: 'Some text',
					},
				],
			});
			const { getByTestId } = render(
				<Provider store={mockStore}>
					<Posts />
				</Provider>
			);

			expect(getByTestId('empty-post')).toHaveTextContent('No Posts');
			// screen.debug();
			const resolveElement = await waitForElement(() =>
				getByTestId('complete-post')
			);
			// screen.debug();
			expect(resolveElement).toBeInTheDocument();
		});
	});
});
