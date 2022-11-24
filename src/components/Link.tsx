import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export default function Link({ children, ...props }: LinkProps) {
  return (
    <a target="_blank" rel="noreferrer" className="normal-text" {...props}>
      {children}
    </a>
  );
}
