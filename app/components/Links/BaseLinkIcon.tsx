import { ComponentPropsWithoutRef } from 'react';
import { ExternalLink } from '.';

interface BaseLinkIcon extends ComponentPropsWithoutRef<'svg'> {
  link: string;
  id: string;
}

export function BaseLinkIcon({ id, link, children, className, ...props }: BaseLinkIcon) {
  return (
    <ExternalLink href={link}>
      <svg className={'h-10 w-10 stroke-none lg:h-12 lg:w-12 ' + className} {...props}>
        <defs>
          <linearGradient id={`gradient-${id}`} x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" className={`${id}-stop-1`} />
            <stop offset="50%" className={`${id}-stop-2`} />
          </linearGradient>
        </defs>
        <style>
          {`
            #${id} {
              fill: url(#gradient-${id});
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
    </ExternalLink>
  );
}
