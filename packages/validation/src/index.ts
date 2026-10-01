export interface ParseResult<T> {
  success: boolean;
  data?: T;
  errors: string[];
}

export function parseObject(value: unknown): ParseResult<Record<string, unknown>> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return { success: false, errors: ['Expected an object.'] };
  }
  return { success: true, data: value as Record<string, unknown>, errors: [] };
}

export function parseStringArray(value: unknown): ParseResult<string[]> {
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
    return { success: false, errors: ['Expected an array of strings.'] };
  }
  return { success: true, data: value, errors: [] };
}
