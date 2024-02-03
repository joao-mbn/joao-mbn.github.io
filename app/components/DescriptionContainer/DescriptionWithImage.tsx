import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { HexagonImageContainer, HexagonImageContainerProps } from '..';

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
