import Image from 'next/image';
import holydaysSource from '../../public/holydays.webp';
import reactExtractSource from '../../public/react-extract-logo.svg';
import reeSource from '../../public/ree-wallpaper.webp';
import typescriptSource from '../../public/typescript-logo.svg';
import { Card, DescriptionBlock, ExternalLink, Masonry, Page, Paragraph } from '../components';
import { getProjectsContent } from '../content';
import {
  ETR_OPTIMIZATION_GITHUB,
  HOLYDAYS_GITHUB,
  HOLYDAYS_PRODUCTION,
  HOT_PARSER_NPM,
  REACT_EXTRACT_GITHUB,
  REACT_EXTRACT_MARKET_PLACE,
  THESIS,
  TYPES_HOT_PARSER_NPM,
} from '../utils/constants';

export default async function Projects() {
  const content = await getProjectsContent();
  return (
    <Page>
      <Masonry>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="bg-[#23272f] grayscale" src={reactExtractSource} alt="react-extract-logo" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href={REACT_EXTRACT_GITHUB}>{content.reactExtract.title}</ExternalLink>}>
            <Paragraph>
              {content.reactExtract.description.split('extension for VS Code')[0]}
              <ExternalLink href={REACT_EXTRACT_MARKET_PLACE}>extension for VS Code</ExternalLink>
              {content.reactExtract.description.split('extension for VS Code')[1]}
            </Paragraph>
          </DescriptionBlock>
        </Card>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="bg-[#007acc] grayscale" src={typescriptSource} alt="typescript-logo" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href={TYPES_HOT_PARSER_NPM}>{content.typesHotParser.title}</ExternalLink>}>
            <Paragraph>
              {content.typesHotParser.description.split('hot-formula-parser')[0]}
              <ExternalLink href={HOT_PARSER_NPM}>hot-formula-parser</ExternalLink>
              {content.typesHotParser.description.split('hot-formula-parser')[1]}
            </Paragraph>
          </DescriptionBlock>
        </Card>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="grayscale" src={reeSource} alt="etr-wallpaper" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href={ETR_OPTIMIZATION_GITHUB}>{content.reeOptimizations.title}</ExternalLink>}>
            <Paragraph>
              {content.reeOptimizations.description.split('thesis')[0]}
              <ExternalLink href={THESIS}>thesis</ExternalLink>
              {content.reeOptimizations.description.split('thesis')[1]}
            </Paragraph>
          </DescriptionBlock>
        </Card>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="grayscale" src={holydaysSource} alt="holydays-wallpaper" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href={HOLYDAYS_PRODUCTION}>{content.holydays.title}</ExternalLink>}>
            <Paragraph>
              {content.holydays.description.split('Github')[0]}
              <ExternalLink href={HOLYDAYS_GITHUB}>Github</ExternalLink>
              {content.holydays.description.split('Github')[1]}
            </Paragraph>
          </DescriptionBlock>
        </Card>
      </Masonry>
    </Page>
  );
}
