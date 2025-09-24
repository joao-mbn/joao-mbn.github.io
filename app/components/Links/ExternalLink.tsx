import React, { ComponentPropsWithoutRef } from 'react';

export interface ExternalLinkProps extends ComponentPropsWithoutRef<'a'> {
  children?: React.ReactNode;
}

export function ExternalLink({ children, className, ...props }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={'text-slate-800 underline underline-offset-4 transition-colors hover:text-slate-600 ' + className}
      {...props}>
      {children}
    </a>
  );
}
