import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode;
}

export function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <p className="mb-4" {...props}>
      {children}
    </p>
  );
}
