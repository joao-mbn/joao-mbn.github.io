import { ComponentPropsWithoutRef } from 'react';
import { Paragraph } from '..';

export interface DescriptionItemProps extends ComponentPropsWithoutRef<'li'> {}

export function DescriptionItem({ children, ...props }: DescriptionItemProps) {
  return (
    <li className="mb-1 flex gap-4 lg:mb-2" {...props}>
      <div className="bullet dark-bg-gradient h-4 w-4 flex-shrink-0 translate-y-2" />
      <Paragraph className="mb-0">{children}</Paragraph>
    </li>
  );
}
