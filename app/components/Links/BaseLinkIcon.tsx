import { ComponentPropsWithoutRef } from 'react';
import { ExternalLink } from '.';

interface BaseLinkIcon extends ComponentPropsWithoutRef<'svg'> {
  link: string;
}

export function BaseLinkIcon({ link, children, className, ...props }: BaseLinkIcon) {
  return (
    <ExternalLink href={link}>
      <svg className={'h-10 w-10 fill-slate-800 stroke-none lg:h-12 lg:w-12 ' + className} {...props}>
        {children}
      </svg>
    </ExternalLink>
  );
}
