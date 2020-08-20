import { useCallback } from 'react';
import _ from 'lodash';

export default function useDebounceHook(cb, ms) {
	const debounceFn = useCallback(
		_.debounce((...args) => cb(...args), ms),
		[ms]
	);

	return debounceFn;
}
