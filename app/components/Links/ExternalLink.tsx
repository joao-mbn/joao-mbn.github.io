import React, { ComponentPropsWithoutRef } from 'react';

interface ExternalLinkProps extends ComponentPropsWithoutRef<'a'> {
  children?: React.ReactNode;
}

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noreferrer" className="text-link" {...props}>
      {children}
    </a>
  );
}
