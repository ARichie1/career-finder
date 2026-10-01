import { beforeEach, describe, expect, it, vi } from 'vitest';
import { clearCompareSlugs, readCompareSlugs, toggleCompareSlug } from './compare';

describe('compare selection helpers', () => {
	beforeEach(() => {
		const store = new Map<string, string>();
		globalThis.sessionStorage = {
			getItem: vi.fn((key: string) => store.get(key) ?? null),
			setItem: vi.fn((key: string, value: string) => {
				store.set(key, value);
			}),
			removeItem: vi.fn((key: string) => {
				store.delete(key);
			}),
			clear: vi.fn(() => {
				store.clear();
			}),
			key: vi.fn((index: number) => Array.from(store.keys())[index] ?? null),
			get length() {
				return store.size;
			}
		} as Storage;
	});

	it('stores at most three selected career slugs', () => {
		const first = toggleCompareSlug('software-engineer');
		const second = toggleCompareSlug('data-analyst');
		const third = toggleCompareSlug('product-manager');
		const fourth = toggleCompareSlug('ux-researcher');

		expect(first).toEqual(['software-engineer']);
		expect(second).toEqual(['software-engineer', 'data-analyst']);
		expect(third).toEqual(['software-engineer', 'data-analyst', 'product-manager']);
		expect(fourth).toEqual(['data-analyst', 'product-manager', 'ux-researcher']);
	});

	it('clears the comparison selection', () => {
		toggleCompareSlug('software-engineer');
		clearCompareSlugs();
		expect(readCompareSlugs()).toEqual([]);
	});
});
