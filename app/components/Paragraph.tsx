import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode;
}

export function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={'mb-4 lg:text-justify ' + (className ?? '')} {...props}>
      {children}
    </p>
  );
}
