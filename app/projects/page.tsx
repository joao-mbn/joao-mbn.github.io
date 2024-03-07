import Image from 'next/image';
import holydaysSource from '../../public/holydays.webp';
import reactExtractSource from '../../public/react-extract-logo.svg';
import reeSource from '../../public/ree-wallpaper.webp';
import typescriptSource from '../../public/typescript-logo.svg';
import { Card, DescriptionBlock, ExternalLink, Masonry, Page, Paragraph } from '../components';
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

export default function Projects() {
  return (
    <Page>
      <Masonry>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="bg-[#23272f] grayscale" src={reactExtractSource} alt="react-extract-logo" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href={REACT_EXTRACT_GITHUB}>React Extract</ExternalLink>}>
            <Paragraph>
              Created an <ExternalLink href={REACT_EXTRACT_MARKET_PLACE}>extension for VS Code</ExternalLink> that
              provides a quick way to refactor your React code. It allows you to extract a valid piece of component code
              into a new function, automatically passing the props and building the extracted component interface, if
              using Typescript.
            </Paragraph>
          </DescriptionBlock>
        </Card>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="bg-[#007acc] grayscale" src={typescriptSource} alt="typescript-logo" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href={TYPES_HOT_PARSER_NPM}>@types/hot-formula-parser</ExternalLink>}>
            <Paragraph>
              Added Typescript support to the <ExternalLink href={HOT_PARSER_NPM}>hot-formula-parser</ExternalLink>, a
              Javascript package for interpreting strings as Excel formulas.
            </Paragraph>
          </DescriptionBlock>
        </Card>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="grayscale" src={reeSource} alt="etr-wallpaper" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href={ETR_OPTIMIZATION_GITHUB}>REE Optimizations</ExternalLink>}>
            <Paragraph>
              The algorithm for rare-earth elements separation process optimization used in my{' '}
              <ExternalLink href={THESIS}>thesis</ExternalLink>.
            </Paragraph>
          </DescriptionBlock>
        </Card>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="grayscale" src={holydaysSource} alt="holydays-wallpaper" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href={HOLYDAYS_PRODUCTION}>Holydays</ExternalLink>}>
            <Paragraph>
              A website that will help you strategically plan your vacations to combo with weekends and holidays. See
              the project at <ExternalLink href={HOLYDAYS_GITHUB}>Github</ExternalLink>.
            </Paragraph>
          </DescriptionBlock>
        </Card>
      </Masonry>
    </Page>
  );
}
