import { ExternalLink, ExternalLinkProps } from '.';
import { GradientSvg, GradientSvgProps } from '..';

export interface BaseLinkIcon extends GradientSvgProps, Pick<ExternalLinkProps, 'href' | 'aria-label'> {
  id: string;
}

export function BaseLinkIcon({ href, 'aria-label': ariaLabel, children, className = '', ...props }: BaseLinkIcon) {
  return (
    <ExternalLink href={href} aria-label={ariaLabel}>
      <GradientSvg className={'h-10 w-10 lg:h-12 lg:w-12 ' + className ?? ''} {...props}>
        {children}
      </GradientSvg>
    </ExternalLink>
  );
}
