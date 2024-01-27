import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { RoundedHexagon, RoundedHexagonProps } from './RoundedHexagon';

interface DescriptionBlockProps<T extends 'h1' | 'h2' | 'h3' | 'h4'>
  extends Omit<ComponentPropsWithoutRef<'section'>, 'title'> {
  title: ReactNode;
  samanticTitleTag?: T;
  titleProps?: ComponentPropsWithoutRef<T>;
}

export function DescriptionBlock<T extends 'h1' | 'h2' | 'h3' | 'h4'>({
  title,
  children,
  samanticTitleTag,
  titleProps: { className: titleClassName, ...otherTitleProps } = {} as ComponentPropsWithoutRef<T>,
  ...props
}: DescriptionBlockProps<T>) {
  const Title = samanticTitleTag ?? 'h2';

  return (
    <section className="mt-5 lg:mt-10" {...props}>
      <Title className={'text-very-big ' + titleClassName} {...otherTitleProps}>
        {title}
      </Title>
      {children}
    </section>
  );
}

interface DescriptionWithImageProps extends ComponentPropsWithoutRef<'section'> {
  image: ReactNode;
  imageContainerProps?: RoundedHexagonProps;
}

export function DescriptionWithImage({
  image,
  children,
  imageContainerProps,
  className,
  ...props
}: DescriptionWithImageProps) {
  return (
    <section
      className={'mx-auto flex flex-col-reverse items-center gap-2 sm:flex-row sm:items-start ' + className}
      {...props}>
      <RoundedHexagon {...imageContainerProps}>{image}</RoundedHexagon>
      {children}
    </section>
  );
}
