import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Paragraph } from '.';
import { HexagonContainer, HexagonContainerProps } from './HexagonCointainer';

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
  imageContainerProps?: HexagonContainerProps;
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
      <HexagonContainer {...imageContainerProps}>{image}</HexagonContainer>
      {children}
    </section>
  );
}

export interface DescriptionItemProps extends ComponentPropsWithoutRef<'li'> {}

export function DescriptionItem({ children, ...props }: DescriptionItemProps) {
  return (
    <li className="mb-4 flex gap-4" {...props}>
      <div className="bullet h-4 w-4 flex-shrink-0 translate-y-2 bg-slate-800" />
      <Paragraph className="mb-0">{children}</Paragraph>
    </li>
  );
}
