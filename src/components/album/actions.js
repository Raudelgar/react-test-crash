export const LOAD_PHOTOS = 'LOAD_PHOTOS';
export const LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS';
export const LOAD_PHOTOS_FAIL = 'LOAD_PHOTOS_FAIL';
export const TEXT_INPUT_CHANGE = 'TEXT_INPUT_CHANGE';

export function loadPhotoAction() {
	return {
		type: LOAD_PHOTOS,
	};
}

export function loadPhotoSuccessAction(data) {
	return {
		type: LOAD_PHOTOS_SUCCESS,
		payload: data,
	};
}

export function loadPhotoFailAction(error) {
	return {
		type: LOAD_PHOTOS_FAIL,
		payload: error,
	};
}

export function searchByInputText(txt) {
	return {
		type: TEXT_INPUT_CHANGE,
		payload: txt,
	};
}
