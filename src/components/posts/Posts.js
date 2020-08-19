import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItems from '../listitems/ListItems';
import { fetchPosts } from './actions';
// const storePosts = () => useSelector(({ post }) => post);

export function usePostState() {
	return useSelector(({ posts }) => posts);
}

export default function Posts() {
	const dispatch = useDispatch();
	const posts = usePostState();

	React.useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	if (!posts.length) {
		return <p data-testid='empty-post'>No Posts</p>;
	}

	return (
		<div data-testid='complete-post'>
			{posts.map((post) => (
				<div key={post.title}>
					<ListItems title={post.title} desc={post.body} />
				</div>
			))}
		</div>
	);
}
