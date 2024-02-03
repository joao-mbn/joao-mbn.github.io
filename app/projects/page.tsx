import Image from 'next/image';
import holydaysSource from '../../public/holydays.webp';
import reeSource from '../../public/ree-wallpaper.webp';
import typescriptSource from '../../public/typescript-logo.svg';
import { Card, DescriptionBlock, ExternalLink, Masonry, Page, Paragraph } from '../components';

export default function Projects() {
  return (
    <Page>
      <Masonry>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="bg-[#007acc] grayscale" src={typescriptSource} alt="typescript-logo" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={
              <ExternalLink href="https://www.npmjs.com/package/@types/hot-formula-parser">
                @types/hot-formula-parser
              </ExternalLink>
            }>
            <Paragraph>
              Added Typescript support to the{' '}
              <ExternalLink href="https://www.npmjs.com/package/hot-formula-parser">hot-formula-parser</ExternalLink>, a
              Javascript package for interpreting strings as Excel formulas.
            </Paragraph>
          </DescriptionBlock>
        </Card>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="grayscale" src={reeSource} alt="etr-wallpaper" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href="https://github.com/joao-mbn/etr-optimization">REE Optimizations</ExternalLink>}>
            <Paragraph>
              The algorithm for rare-earth elements separation process optimization used in my{' '}
              <ExternalLink href="https://drive.google.com/file/d/1E7Mm5b3z0JZ2tjM3lJyegt8cyLnaTgY6/view?usp=sharing">
                thesis (in portuguese)
              </ExternalLink>
              .
            </Paragraph>
          </DescriptionBlock>
        </Card>
        <Card
          className="[&&]:mt-0 [&&]:lg:mt-0"
          image={<Image className="grayscale" src={holydaysSource} alt="holydays-wallpaper" />}>
          <DescriptionBlock
            className="[&&]:mt-0"
            title={<ExternalLink href="https://get-holydays.vercel.app/">Holydays</ExternalLink>}>
            <Paragraph>
              A website that will help you strategically plan your vacations to combo with weekends and holidays. See
              the project at{' '}
              <ExternalLink href="https://github.com/joao-mbn/holydays" className="text-link">
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
