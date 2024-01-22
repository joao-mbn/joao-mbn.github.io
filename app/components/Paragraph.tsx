import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode;
}

export function Paragraph({ children }: ParagraphProps) {
  return <p className="mb-4">{children}</p>;
}
