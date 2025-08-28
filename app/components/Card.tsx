import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'section'> {
  image: ReactNode;
}

export function Card({ image, children, className, ...props }: CardProps) {
  return (
    <div
      className={
        'flex break-inside-avoid flex-col items-center justify-center border-2 border-solid border-slate-800 *:transition-all *:duration-300 *:hover:grayscale-0 [&:not(:first-child)]:mt-4 [&:not(:first-child)]:lg:mt-8 ' +
        className
      }
      {...props}>
      {image}
      <div className="border-t-2 border-slate-800 px-4 pt-4">{children}</div>
    </div>
  );
}
