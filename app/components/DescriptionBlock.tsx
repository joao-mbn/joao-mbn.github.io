import { ReactNode } from 'react';

interface DescriptionBlockProps {
  title: string;
  children: ReactNode;
}

export function DescriptionBlock({ title, children }: DescriptionBlockProps) {
  return (
    <section className="mt-5 lg:mt-10">
      <h2 className="text-bold text-2xl lg:text-5xl pb-2 lg:pb-5">{title}</h2>
      {children}
    </section>
  );
}
