import { renderHook, act } from '@testing-library/react-hooks';
import useFetch from './use-fetch';

const date = '2022-04-27';

describe('useFetch test', () => {
	test("useFetch retrieves NASA's pictures", async () => {
		await act(async () => renderHook(() => useFetch(date)));
	});
});
