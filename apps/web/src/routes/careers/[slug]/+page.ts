import { env } from '$env/dynamic/public';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const apiBase = env.PUBLIC_API_BASE_URL || 'http://127.0.0.1:3000';
	try {
		const response = await fetch(`${apiBase}/api/v1/careers/${encodeURIComponent(params.slug)}`);
		if (response.status === 404) return { career: null, unavailable: false };
		if (!response.ok) return { career: null, unavailable: true };
		return { career: await response.json(), unavailable: false };
	} catch {
		return { career: null, unavailable: true };
	}
};
