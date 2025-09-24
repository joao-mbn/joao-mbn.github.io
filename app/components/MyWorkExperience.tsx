'use client';

import { getMyWorkExperience } from '../utils/datetime';

export function MyWorkExperience() {
  const { years, months } = getMyWorkExperience();

  return (
    <>
      {years} years {months > 0 && `and ${months} ${months === 1 ? 'month' : 'months'}`}
    </>
  );
}
