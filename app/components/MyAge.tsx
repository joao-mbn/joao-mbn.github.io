'use client';

import { getMyAge } from '../utils/datetime';

export function MyAge() {
  const age = getMyAge();

  return <>{age}</>;
}
