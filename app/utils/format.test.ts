import { describe, expect, it } from 'vitest';
import { formatNumberToKNotation } from './format';

describe('formatNumber', () => {
  it('should return the number as string for numbers less than 1000', () => {
    expect(formatNumberToKNotation(0)).toBe('0');
    expect(formatNumberToKNotation(1)).toBe('1');
    expect(formatNumberToKNotation(99)).toBe('99');
    expect(formatNumberToKNotation(999)).toBe('999');
  });

  it('should format thousands with K notation', () => {
    expect(formatNumberToKNotation(1000)).toBe('1.0K');
    expect(formatNumberToKNotation(1499)).toBe('1.4K');
    expect(formatNumberToKNotation(1500)).toBe('1.5K');
    expect(formatNumberToKNotation(2000)).toBe('2.0K');
    expect(formatNumberToKNotation(2500)).toBe('2.5K');
    expect(formatNumberToKNotation(10000)).toBe('10.0K');
    expect(formatNumberToKNotation(15000)).toBe('15.0K');
    expect(formatNumberToKNotation(999999)).toBe('999.9K');
  });

  it('should format numbers >= 1 million as "> 999.9K"', () => {
    expect(formatNumberToKNotation(1000000)).toBe('> 999.9K');
    expect(formatNumberToKNotation(15000000000)).toBe('> 999.9K');
  });

  it('should handle edge cases correctly', () => {
    expect(formatNumberToKNotation(999.9)).toBe('999');
    expect(formatNumberToKNotation(1000.1)).toBe('1.0K');
    expect(formatNumberToKNotation(1000.9)).toBe('1.0K');
    expect(formatNumberToKNotation(1001)).toBe('1.0K');
    expect(formatNumberToKNotation(1050)).toBe('1.0K');
    expect(formatNumberToKNotation(1090)).toBe('1.0K');
    expect(formatNumberToKNotation(1100)).toBe('1.1K');
  });
});

