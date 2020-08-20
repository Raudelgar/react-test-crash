import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadPhotoAction, searchByInputText } from './actions';
import useDebounceHook from '../../hooks/useDebounceHook.js';

export default function Album() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const handlePhotoRequest = () => dispatch(loadPhotoAction());

	const debounceSearch = useDebounceHook(
		(txt) => dispatch(searchByInputText(txt)),
		1000
	);

	const handleInputText = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setText(value);
		debounceSearch(value);
	};

	return (
		<div>
			<input type='text' value={text} onChange={handleInputText} />
			<button onClick={handlePhotoRequest}>Load Photo</button>
		</div>
	);
}
