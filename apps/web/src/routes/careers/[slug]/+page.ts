import { PUBLIC_API_BASE_URL } from '$env/dynamic/public';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const apiBase = PUBLIC_API_BASE_URL || 'http://127.0.0.1:3000';
	const response = await fetch(`${apiBase}/api/v1/careers/${encodeURIComponent(params.slug)}`);
	if (!response.ok) return { career: null };
	return { career: await response.json() };
};
