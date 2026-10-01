// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare module '$env/dynamic/public' {
	export const PUBLIC_API_BASE_URL: string | undefined;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
