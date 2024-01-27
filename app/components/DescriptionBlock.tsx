import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { RoundedHexagon, RoundedHexagonProps } from './RoundedHexagon';

interface DescriptionBlockProps extends Omit<ComponentPropsWithoutRef<'section'>, 'title'> {
  title: ReactNode;
  titleProps?: ComponentPropsWithoutRef<'h2'>;
}

export function DescriptionBlock({
  title,
  children,
  titleProps: { className: titleClassName, ...otherTitleProps } = {},
  ...props
}: DescriptionBlockProps) {
  return (
    <section className="mt-5 lg:mt-10" {...props}>
      <h2 className={'text-very-big ' + titleClassName} {...otherTitleProps}>
        {title}
      </h2>
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
