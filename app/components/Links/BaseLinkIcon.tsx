import { ExternalLink } from '.';
import { GradientSvg, GradientSvgProps } from '..';

interface BaseLinkIcon extends GradientSvgProps {
  link: string;
  id: string;
}

export function BaseLinkIcon({ link, children, className, ...props }: BaseLinkIcon) {
  return (
    <ExternalLink href={link}>
      <GradientSvg className={'h-10 w-10 stroke-none lg:h-12 lg:w-12 ' + className} {...props}>
        {children}
      </GradientSvg>
    </ExternalLink>
  );
}
