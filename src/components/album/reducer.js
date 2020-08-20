import { LOAD_PHOTOS_SUCCESS, LOAD_PHOTOS_FAIL } from './actions.js';

export function reducer(state = [], { type, payload }) {
	switch (type) {
		case LOAD_PHOTOS_SUCCESS:
			return payload;
		case LOAD_PHOTOS_FAIL:
			return payload;
		default:
			return state;
	}
}
