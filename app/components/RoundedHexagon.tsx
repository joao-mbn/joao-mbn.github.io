import { ComponentPropsWithoutRef } from 'react';

export interface RoundedHexagonProps extends ComponentPropsWithoutRef<'svg'> {
  id?: string;
}

export function RoundedHexagon({ children, id, ...props }: RoundedHexagonProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-56 w-56 overflow-visible fill-none stroke-slate-500 stroke-2 tiny:h-80 tiny:w-80 sm:h-56 sm:w-56 md:h-80 md:w-80 lg:h-96 lg:w-96"
      {...props}>
      <defs>
        <clipPath id={id ?? 'hexagon'}>
          <path d="M28 12.5C50 0 50 0 71.5 12.5 93.5 25 93.5 25 93.5 50 93.5 75 93.5 75 71.5 87.5 50 100 50 100 28 87.5 4 73.5 6.5 77.5 6.5 50 6.5 23 4.5 26 28 12.5" />
        </clipPath>
      </defs>
      <path d="M28 12.5C50 0 50 0 71.5 12.5 93.5 25 93.5 25 93.5 50 93.5 75 93.5 75 71.5 87.5 50 100 50 100 28 87.5 4 73.5 6.5 77.5 6.5 50 6.5 23 4.5 26 28 12.5" />
      {children}
    </svg>
  );
}
