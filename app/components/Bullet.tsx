import { ComponentPropsWithoutRef } from 'react';

export interface BulletProps extends ComponentPropsWithoutRef<'p'> {}

export function Bullet({ className, ...props }: BulletProps) {
  return (
    <div
      {...props}
      className={'bullet dark-bg-gradient h-4 w-4 flex-shrink-0 translate-y-2 ' + (className ?? '')}
      style={{ clipPath: "path('M8.048 0 14.976 4 14.976 12 8.048 16 1.12 12V4L8.048 0Z')" }}
    />
  );
}
