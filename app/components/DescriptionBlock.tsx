import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Paragraph } from '.';
import { HexagonImageContainer, HexagonImageContainerProps } from './HexagonCointainer';

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

interface DescriptionWithImageProps extends ComponentPropsWithoutRef<'section'> {
  image: ReactNode;
  imageContainerProps: HexagonImageContainerProps;
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
      <HexagonImageContainer {...imageContainerProps}>{image}</HexagonImageContainer>
      {children}
    </section>
  );
}

export interface DescriptionItemProps extends ComponentPropsWithoutRef<'li'> {}

export function DescriptionItem({ children, ...props }: DescriptionItemProps) {
  return (
    <li className="mb-1 flex gap-4 lg:mb-2" {...props}>
      <div className="bullet dark-bg-gradient h-4 w-4 flex-shrink-0 translate-y-2" />
      <Paragraph className="mb-0">{children}</Paragraph>
    </li>
  );
}
