import { ComponentPropsWithoutRef } from 'react';

export interface BulletProps extends ComponentPropsWithoutRef<'p'> {}

export function Bullet({ className, ...props }: BulletProps) {
  return (
    <div {...props} className={'bullet dark-bg-gradient h-4 w-4 flex-shrink-0 translate-y-2 ' + (className ?? '')} />
  );
}

