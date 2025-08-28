import { GradientSvg, GradientSvgProps } from '.';

export interface HexagonImageContainerProps extends Omit<GradientSvgProps, 'gradientOn'> {}

export function HexagonImageContainer({ children, id, ...props }: HexagonImageContainerProps) {
  return (
    <GradientSvg
      extraDefs={
        <clipPath id={id}>
          <path d="M50.3 0L93.6 25L93.6 75L50.3 100L7 75V25L50.3 0Z" />
        </clipPath>
      }
      viewBox="0 0 100 100"
      gradientOn="stroke"
      id={`path-${id}`}
      className="h-56 w-56 overflow-visible fill-none stroke-slate-800 stroke-1 tiny:h-80 tiny:w-80 sm:h-56 sm:w-56 md:h-80 md:w-80 lg:h-96 lg:w-96"
      {...props}>
      {children}
      <path id={`path-${id}`} d="M50.3 0L93.6 25L93.6 75L50.3 100L7 75V25L50.3 0Z" />
    </GradientSvg>
  );
}
