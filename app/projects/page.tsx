import Image from 'next/image';
import holydaysSource from '../../public/holydays.webp';
import reeSource from '../../public/ree-wallpaper.webp';
import typescriptSource from '../../public/typescript-logo.svg';
import { Card, DescriptionBlock, ExternalLink, Masonry, Page, Paragraph } from '../components';
import { ETR_OPTIMIZATION, HOLYDAYS, HOLYDAYS_GITHUB, HOT_PARSER, THESIS, TYPES_HOT_PARSER } from '../utils/constants';

export default function Projects() {
  return (
    <Page>
      <Masonry>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="bg-[#007acc] grayscale" src={typescriptSource} alt="typescript-logo" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href={TYPES_HOT_PARSER}>@types/hot-formula-parser</ExternalLink>}>
            <Paragraph>
              Added Typescript support to the <ExternalLink href={HOT_PARSER}>hot-formula-parser</ExternalLink>, a
              Javascript package for interpreting strings as Excel formulas.
            </Paragraph>
          </DescriptionBlock>
        </Card>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="grayscale" src={reeSource} alt="etr-wallpaper" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href={ETR_OPTIMIZATION}>REE Optimizations</ExternalLink>}>
            <Paragraph>
              The algorithm for rare-earth elements separation process optimization used in my{' '}
              <ExternalLink href={THESIS}>thesis</ExternalLink>.
            </Paragraph>
          </DescriptionBlock>
        </Card>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="grayscale" src={holydaysSource} alt="holydays-wallpaper" />}>
          <DescriptionBlock className="[&&]:mt-0" title={<ExternalLink href={HOLYDAYS}>Holydays</ExternalLink>}>
            <Paragraph>
              A website that will help you strategically plan your vacations to combo with weekends and holidays. See
              the project at{' '}
              <ExternalLink href={HOLYDAYS_GITHUB} className="text-link">
                Github
              </ExternalLink>
              .
            </Paragraph>
          </DescriptionBlock>
        </Card>
      </Masonry>
    </Page>
  );
}
