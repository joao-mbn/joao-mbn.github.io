import { ExternalLink, ExternalLinkProps } from '.';
import { GradientSvg, GradientSvgProps } from '..';

export interface BaseLinkIcon extends GradientSvgProps, Pick<ExternalLinkProps, 'href' | 'aria-label'> {
  id: string;
}

export function BaseLinkIcon({ href, 'aria-label': ariaLabel, children, className = '', ...props }: BaseLinkIcon) {
  return (
    <ExternalLink href={href} aria-label={ariaLabel}>
      <GradientSvg className={'h-12 w-12 lg:h-14 lg:w-14 ' + className ?? ''} {...props}>
        {children}
      </GradientSvg>
    </ExternalLink>
  );
}
