'use client';

import { getMyAge } from '../utils/datetime';

export function MyAge() {
  const age = getMyAge();
  console.log(age, new Date());
  return <>{age}</>;
}
