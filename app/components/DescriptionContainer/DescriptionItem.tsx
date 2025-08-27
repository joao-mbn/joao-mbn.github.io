import { ComponentPropsWithoutRef } from 'react';
import { Paragraph, ParagraphProps } from '..';
import { Bullet } from '../Bullet';

export interface DescriptionItemProps extends ComponentPropsWithoutRef<'li'> {
  paragraphProps?: Omit<ParagraphProps, 'children'>;
}

export function DescriptionItem({ children, paragraphProps, ...props }: DescriptionItemProps) {
  return (
    <li {...props} className={'flex gap-4 ' + (props.className ?? '')}>
      <Bullet />
      <Paragraph {...paragraphProps}>{children}</Paragraph>
    </li>
  );
}
