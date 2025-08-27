import React, { ComponentPropsWithoutRef } from 'react';

export interface ExternalLinkProps extends ComponentPropsWithoutRef<'a'> {
  children?: React.ReactNode;
}

export function ExternalLink({ children, className, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noreferrer" className={'text-link ' + className} {...props}>
      {children}
    </a>
  );
}
