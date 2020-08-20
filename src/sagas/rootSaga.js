import { all, fork } from 'redux-saga/effects';
import { albumWatcher } from '../components/album/watcher';

export default function* rootSaga() {
	yield all([fork(albumWatcher)]);
}
