import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface DescriptionBlockProps<T extends 'h1' | 'h2' | 'h3' | 'h4'>
  extends Omit<ComponentPropsWithoutRef<'section'>, 'title'> {
  title: ReactNode;
  samanticTitleTag?: T;
  titleProps?: ComponentPropsWithoutRef<T>;
}

export function DescriptionBlock<T extends 'h1' | 'h2' | 'h3' | 'h4'>({
  title,
  children,
  className = '',
  samanticTitleTag,
  titleProps: { className: titleClassName = '', ...otherTitleProps } = {} as ComponentPropsWithoutRef<T>,
  ...props
}: DescriptionBlockProps<T>) {
  const Title = samanticTitleTag ?? 'h2';

  return (
    <section className={'mt-5 lg:mt-10 ' + className} {...props}>
      <Title className={'text-very-big ' + titleClassName} {...otherTitleProps}>
        {title}
      </Title>
      {children}
    </section>
  );
}
