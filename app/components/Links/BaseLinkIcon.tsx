import { ComponentPropsWithoutRef } from 'react';
import { ExternalLink } from '.';

interface BaseLinkIcon extends ComponentPropsWithoutRef<'svg'> {
  link: string;
}

export function BaseLinkIcon({ link, children, className, ...props }: BaseLinkIcon) {
  return (
    <ExternalLink href={link}>
      <svg className={'h-8 w-8 fill-slate-800 stroke-none lg:h-10 lg:w-10 ' + className} {...props}>
        {children}
      </svg>
    </ExternalLink>
  );
}
