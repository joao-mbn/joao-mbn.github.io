import { ComponentPropsWithoutRef } from 'react';

export interface HexagonContainerProps extends ComponentPropsWithoutRef<'svg'> {
  id?: string;
}

export function HexagonContainer({ children, id, ...props }: HexagonContainerProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-56 w-56 overflow-visible fill-none stroke-slate-800 stroke-2 tiny:h-80 tiny:w-80 sm:h-56 sm:w-56 md:h-80 md:w-80 lg:h-96 lg:w-96"
      {...props}>
      <defs>
        <clipPath id={id ?? 'hexagon'}>
          <path d="M50.3 0L93.6 25L93.6 75L50.3 100L7 75V25L50.3 0Z" />
        </clipPath>
      </defs>
      {children}
      <path d="M50.3 0L93.6 25L93.6 75L50.3 100L7 75V25L50.3 0Z" />
    </svg>
  );
}
