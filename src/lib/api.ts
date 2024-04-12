export const API_BASE_URL = 'https://hack.milkhunters.ru/api';

const makeRequest = async (
	url: string | URL,
	method: string,
	headers?: HeadersInit,
	body?: string,
) => {
	return await fetch(url, {
		method,
		headers,
		body,
		credentials: 'include',
	});
};

export const encodeEmpty = () => {
	return { headers: undefined, body: undefined };
};

export const encodeJson = (record: object) => {
	return {
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(record),
	};
};

export const makeWriteRequest = async (
	apiUrl: string,
	options: { headers?: HeadersInit; body?: string },
	method = 'POST',
) => {
	const url = `${API_BASE_URL}/${apiUrl}`;
	const { headers, body } = options;
	const res = await makeRequest(url, method, headers, body);
	return await res.json();
};

export const buildUrl = (apiUrl: string, record: Record<string, string>) => {
	const url = new URL(`${API_BASE_URL}/${apiUrl}`);
	Object.entries(record).forEach(([field, value]) =>
		url.searchParams.set(field, value),
	);
	return url;
};

export const makeReadRequest = async (
	apiUrl: string,
	record?: Record<string, string>,
) => {
	const url = record ? buildUrl(apiUrl, record) : apiUrl;
	const res = await makeRequest(`${API_BASE_URL}/${url}`, 'GET');
	return await res.json();
};
