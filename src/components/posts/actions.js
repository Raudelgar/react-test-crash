import axios from 'axios';
export const GET_POSTS = 'GET_POSTS';

export function getPost(data) {
	return {
		type: GET_POSTS,
		payload: data,
	};
}

export function fetchPosts() {
	return async (dispatch) => {
		await axios
			.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
			.then((response) => {
				const data = response.data;
				dispatch(getPost(data));
			})
			.catch((error) => console.log(error));
	};
}
