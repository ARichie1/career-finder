import { PUBLIC_API_BASE_URL } from '$env/dynamic/public';

const API_BASE_URL = PUBLIC_API_BASE_URL || 'http://127.0.0.1:3000';

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      'content-type': 'application/json',
      ...(init?.headers ?? {})
    }
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error ?? `API request failed (${response.status})`);
  }

  return response.json() as Promise<T>;
}
