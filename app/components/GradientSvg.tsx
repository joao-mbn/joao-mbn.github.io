import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface GradientSvgProps extends ComponentPropsWithoutRef<'svg'> {
  id: string;
  extraDefs?: ReactNode;
  gradientOn?: 'fill' | 'stroke' | 'both';
  invertOnHover?: boolean;
}

export function GradientSvg({
  children,
  extraDefs,
  gradientOn = 'fill',
  id = 'id',
  invertOnHover = false,
  ...props
}: GradientSvgProps) {
  return (
    <svg {...props} id={`${id}-svg`}>
      <defs>
        {extraDefs}
        <linearGradient id={`gradient-${id}`} x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" className={`${id}-stop-1`} />
          <stop offset="50%" className={`${id}-stop-2`} />
        </linearGradient>
      </defs>
      <style>
        {`
          .${id}-stop-1 {
            stop-color: #475569;
          }
          .${id}-stop-2 {
            stop-color: #0f172a;
          }

          #${id} {
            ${gradientOn === 'both' || gradientOn === 'fill' ? `fill: url(#gradient-${id}); ` : ''}
            ${gradientOn === 'both' || gradientOn === 'stroke' ? `stroke: url(#gradient-${id});` : ''}
          }

          ${
            invertOnHover
              ? `
                #${id}-svg:hover #${id} {
                  ${gradientOn === 'both' || gradientOn === 'fill' ? `fill: transparent;` : ''}
                  ${gradientOn === 'both' || gradientOn === 'stroke' ? `stroke: transparent;` : ''}
                }

                #${id}-inverse {
                  ${gradientOn === 'both' || gradientOn === 'fill' ? `fill: transparent;` : ''}
                  ${gradientOn === 'both' || gradientOn === 'stroke' ? `stroke: white;` : ''}
                }
                #${id}-svg:hover #${id}-inverse {
                  ${gradientOn === 'both' || gradientOn === 'fill' ? `fill: url(#gradient-${id});` : ''}
                  ${gradientOn === 'both' || gradientOn === 'stroke' ? `stroke: url(#gradient-${id});` : ''}
                }

                #${id}-svg:hover mask path, #${id}-svg mask rect, #${id}-svg mask circle {
                  fill: black;
                }
                #${id}-svg mask path, #${id}-svg:hover mask rect, #${id}-svg:hover mask circle {
                  fill: white;
                }
                `
              : ''
          }
        `}
      </style>
      {children}
    </svg>
  );
}
