import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getMyAge, getMyWorkExperience } from './datetime';

describe('getMyAge', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return correct age at birthday', () => {
    vi.setSystemTime(new Date(2017, 1, 17));

    expect(getMyAge()).toBe(20);
  });

  it('it should not bump age until birthday', () => {
    vi.setSystemTime(new Date(2017, 1, 16));

    expect(getMyAge()).toBe(19);
  });

  it('it should not bump after birthday', () => {
    vi.setSystemTime(new Date(2017, 11, 31));

    expect(getMyAge()).toBe(20);
  });
});

describe('getMyWorkExperience', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return correct work experience at a complete year', () => {
    vi.setSystemTime(new Date(2024, 4, 10));

    const { years, months } = getMyWorkExperience();
    expect(years).toBe(3);
    expect(months).toBe(0);
  });

  it('should return correct work experience at a complete month', () => {
    vi.setSystemTime(new Date(2024, 3, 10));

    const { years, months } = getMyWorkExperience();
    expect(years).toBe(2);
    expect(months).toBe(11);
  });

  it('should round months down when not complete', () => {
    vi.setSystemTime(new Date(2024, 4, 9));

    const { years, months } = getMyWorkExperience();
    expect(years).toBe(2);
    expect(months).toBe(11);
  });

  it('should round months down when not complete after full year', () => {
    vi.setSystemTime(new Date(2024, 4, 11));

    const { years, months } = getMyWorkExperience();
    expect(years).toBe(3);
    expect(months).toBe(0);
  });
});

