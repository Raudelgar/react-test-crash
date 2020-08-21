import {
	call,
	put,
	debounce,
	takeLatest,
	take,
	takeLeading,
	throttle,
	delay,
} from 'redux-saga/effects';
import {
	LOAD_PHOTOS,
	loadPhotoSuccessAction,
	TEXT_INPUT_CHANGE,
} from './actions';
import { photoApi } from '../../api/fetchApi';

export function* fetchPhotos() {
	const data = yield call(photoApi);
	const action = yield put(loadPhotoSuccessAction(data));
	// console.log('success fetchPhoto');
}
export function* searchFromInput({ payload }) {
	// yield delay(1000); //If I want to handle the debounce effect here
	if (payload) console.log(Date.now(), payload);
}

export function* albumWatcher() {
	// yield debounce(2000, LOAD_PHOTOS, fetchPhotos);
	// yield takeLatest(LOAD_PHOTOS, fetchPhotos);
	// while (true) {
	// 	yield take(LOAD_PHOTOS);
	// 	yield call(fetchPhotos);
	// }
	yield takeLeading(LOAD_PHOTOS, fetchPhotos);
	// yield throttle(2000, TEXT_INPUT_CHANGE, handleSearchFromInput);
	yield takeLatest(TEXT_INPUT_CHANGE, searchFromInput);
}
