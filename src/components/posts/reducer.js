import { GET_POSTS } from './actions';

export default function reducer(state = [], { type, payload }) {
	switch (type) {
		case GET_POSTS:
			return payload;
		default:
			return state;
	}
}
