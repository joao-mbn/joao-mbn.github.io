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
        <linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" className="hex-stop-1" />
          <stop offset="50%" className="hex-stop-2" />
        </linearGradient>
      </defs>
      <style>
        {`
          #hex-path {
            stroke: url(#gradient);
          }
          .hex-stop-1 {
            stop-color: #475569;
          }
          .hex-stop-2 {
            stop-color: #0f172a;
          }`}
      </style>
      {children}
      <path id="hex-path" d="M50.3 0L93.6 25L93.6 75L50.3 100L7 75V25L50.3 0Z" />
    </svg>
  );
}
