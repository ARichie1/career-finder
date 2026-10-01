import { env } from '$env/dynamic/public';

const authBaseUrl = env.PUBLIC_API_BASE_URL || 'http://localhost:3000';

export async function authRequest<T>(path: string, body?: Record<string, unknown>): Promise<T> {
  const response = await fetch(`${authBaseUrl}${path}`, {
    method: body === undefined ? 'GET' : 'POST',
    credentials: 'include',
    headers: body === undefined ? undefined : { 'content-type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(payload?.message ?? payload?.error ?? 'Unable to complete that request.');
  }

  return payload as T;
}
