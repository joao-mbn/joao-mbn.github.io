'use client';

import { getMyWorkExperience } from '../utils/datetime';

export function MyWorkExperience() {
  const { years, months } = getMyWorkExperience();

  console.log(years, months, new Date());
  return (
    <>
      {years} years and {months} {months === 1 ? 'month' : 'months'}
    </>
  );
}
