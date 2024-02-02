import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface GradientSvgProps extends ComponentPropsWithoutRef<'svg'> {
  id: string;
  extraDefs?: ReactNode;
  gradientOn?: 'fill' | 'stroke' | 'both';
}

export function GradientSvg({ children, extraDefs, gradientOn = 'fill', id = 'id', ...props }: GradientSvgProps) {
  return (
    <svg {...props}>
      <defs>
        {extraDefs}
        <linearGradient id={`gradient-${id}`} x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" className={`${id}-stop-1`} />
          <stop offset="50%" className={`${id}-stop-2`} />
        </linearGradient>
      </defs>
      <style>
        {`
          #${id} {
            ${gradientOn === 'both' || gradientOn === 'fill' ? `fill: url(#gradient-${id}); ` : ''}
            ${gradientOn === 'both' || gradientOn === 'stroke' ? `stroke: url(#gradient-${id});` : ''}
          }
          .${id}-stop-1 {
            stop-color: #475569;
          }
          .${id}-stop-2 {
            stop-color: #0f172a;
          }`}
      </style>
      {children}
    </svg>
  );
}
