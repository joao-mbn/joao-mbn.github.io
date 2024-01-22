import React, { ComponentPropsWithoutRef } from 'react';

interface ExternalLinkProps extends ComponentPropsWithoutRef<'a'> {
  children?: React.ReactNode;
  xlinkHref?: string;
}

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noreferrer" {...props} {...{ xlinkHref: props.xlinkHref }}>
      {children}
    </a>
  );
}
