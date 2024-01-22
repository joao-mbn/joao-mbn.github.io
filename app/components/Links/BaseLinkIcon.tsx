import { ComponentPropsWithoutRef } from 'react';
import { ExternalLink } from '.';

interface BaseLinkIcon extends ComponentPropsWithoutRef<'svg'> {
  link: string;
}

export function BaseLinkIcon({ link, children, className, ...props }: BaseLinkIcon) {
  return (
    <ExternalLink href={link}>
      <svg className={'h-8 w-8 lg:h-10 lg:w-10 stroke-none fill-slate-800 ' + className} {...props}>
        {children}
      </svg>
    </ExternalLink>
  );
}
