import { runSaga } from 'redux-saga';
import * as api from '../../api/fetchApi.js';
import { albumWatcher, fetchPhotos } from './watcher.js';
import * as action from './actions.js';
import { put, takeLeading } from 'redux-saga/effects';

describe('Album Saga Test', () => {
	it('should wait for LOAD_PHOTO action', () => {
		const gen = albumWatcher();
		put(action.loadPhotoAction());
		const actionType = action.LOAD_PHOTOS;
		const actual = gen.next();

		expect(actual.value).toEqual(takeLeading(actionType, fetchPhotos));
	});
	it('should call api on action dispatch', async () => {
		api.photoApi = jest.fn(() => 'image');
		const dispatched = [];
		const mockData = 'image';
		const fakeStore = {
			dispatch: (action) => dispatched.push(action),
		};
		await runSaga(fakeStore, fetchPhotos).done;

		expect(dispatched).toContainEqual(action.loadPhotoSuccessAction(mockData));
		expect(api.photoApi).toHaveBeenCalled();
	});
});
