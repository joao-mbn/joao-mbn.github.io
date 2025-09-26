import { ComponentPropsWithoutRef } from 'react';

export interface HexagonImageContainerProps extends ComponentPropsWithoutRef<'svg'> {}

export function HexagonImageContainer({ children, id, ...props }: HexagonImageContainerProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      id={`path-${id}`}
      className="h-56 w-56 overflow-visible fill-none stroke-slate-800 stroke-1 tiny:h-80 tiny:w-80 sm:translate-y-3 lg:h-96 lg:w-96"
      {...props}>
      <defs>
        <clipPath id={id}>
          <path d="M50.3 0L93.6 25L93.6 75L50.3 100L7 75V25L50.3 0Z" />
        </clipPath>
      </defs>
      {children}
      <path id={`path-${id}`} d="M50.3 0L93.6 25L93.6 75L50.3 100L7 75V25L50.3 0Z" />
    </svg>
  );
}
