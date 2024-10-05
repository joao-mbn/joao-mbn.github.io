import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode;
}

export function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={'mb-2 tiny:text-justify  lg:mb-4 ' + (className ?? '')} {...props}>
      {children}
    </p>
  );
}

