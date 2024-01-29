import Link from 'next/link';
import { DescriptionBlock, DescriptionWithImage, ExternalLink, Page, Paragraph } from '../components';

export default function Projects() {
  return (
    <Page>
      <DescriptionBlock
        title="Open Source Contributions"
        className="mb-5 mt-0 flex flex-col lg:mb-10"
        titleProps={{ className: 'font-semibold' }}>
        <DescriptionWithImage
          className="mt-5 lg:mt-10"
          imageContainerProps={{ id: 'types-hot-parser' }}
          image={
            <>
              <rect fill="#3178c6" height="100%" width="100%" clipPath="url(#types-hot-parser)" />
              <path
                strokeWidth="0"
                d="M53.4915 58.0394V65.0479C54.6308 65.632 55.9783 66.0699 57.534 66.3619S60.7292 66.8 62.4529 66.8C64.1327 66.8 65.7284 66.6394 67.2403 66.3181 68.7522 65.997 70.0778 65.4676 71.2171 64.7302 72.3565 63.993 73.2585 63.0292 73.9231 61.8392S74.92 59.1783 74.92 57.4262C74.92 56.1558 74.7302 55.0425 74.3503 54.0862S73.4228 52.2793 72.707 51.5347C71.9913 50.79 71.1331 50.1219 70.1326 49.5306S68.0036 48.3808 66.7474 47.8552C65.8271 47.4755 65.0018 47.1069 64.2715 46.7492 63.5411 46.3914 62.9203 46.0264 62.409 45.6541 61.8978 45.2817 61.5034 44.8875 61.2259 44.4714 60.9484 44.0552 60.8095 43.5844 60.8095 43.0587 60.8095 42.5769 60.9337 42.1425 61.1821 41.7555S61.781 41.0365 62.2338 40.759C62.6867 40.4817 63.2416 40.2662 63.8989 40.1129 64.5564 39.9596 65.2866 39.883 66.0901 39.883 66.6743 39.883 67.2914 39.9269 67.9414 40.0144 68.5914 40.102 69.2451 40.2371 69.9025 40.4195 70.5598 40.6021 71.1988 40.8321 71.8197 41.1094 72.4405 41.3869 73.0138 41.7081 73.5396 42.0732V35.5246C72.4734 35.1158 71.3084 34.8128 70.0449 34.6157S67.3316 34.32 65.6957 34.32C64.0304 34.32 62.4529 34.4989 60.963 34.8566S58.1621 35.7728 57.03 36.532C55.8979 37.2914 55.0033 38.2586 54.346 39.4341 53.6887 40.6094 53.36 42.0147 53.36 43.65 53.36 45.738 53.9626 47.5193 55.1677 48.9941 56.3727 50.4687 58.2022 51.7171 60.6562 52.7392 61.6203 53.1335 62.5187 53.5203 63.3512 53.9S64.9033 54.6739 65.5093 55.0827C66.1155 55.4915 66.5939 55.9368 66.9446 56.4187 67.2952 56.9005 67.4705 57.448 67.4705 58.0613 67.4705 58.514 67.3608 58.9337 67.1417 59.3206S66.5903 60.0433 66.1448 60.3281 65.1442 60.8354 64.4796 60.996C63.8149 61.1567 63.0372 61.237 62.1461 61.237 60.627 61.237 59.1225 60.9705 57.6325 60.4376 56.1426 59.9047 54.7622 59.1053 53.4915 58.0394ZM41.7092 40.7715H50.7V35.02H25.64V40.7715H34.5868V66.38H41.7092Z"
                fill="#fff"
                clipPath="url(#types-hot-parser)"
              />
            </>
          }>
          <DescriptionBlock
            samanticTitleTag="h3"
            className="mt-0"
            title={
              <ExternalLink href="https://www.npmjs.com/package/@types/hot-formula-parser">
                @types/hot-formula-parser
              </ExternalLink>
            }>
            <Paragraph>
              Added Typescript support to the{' '}
              <ExternalLink href="https://www.npmjs.com/package/hot-formula-parser" className="text-link">
                hot-formula-parser
              </ExternalLink>
              , a Javascript package for interpreting strings as Excel formulas.
            </Paragraph>
          </DescriptionBlock>
        </DescriptionWithImage>
      </DescriptionBlock>
      <DescriptionBlock title="Personal Projects" titleProps={{ className: 'font-semibold' }}>
        <DescriptionWithImage
          className="mt-5 lg:mt-10"
          image={<image className="h-[100px] w-[98px]" xlinkHref="/ree-wallpaper.jpg" clipPath="url(#hexagon)" />}>
          <DescriptionBlock
            samanticTitleTag="h3"
            className="mt-0"
            title={<ExternalLink href="https://github.com/joao-mbn/etr-optimization">REE Optimizations</ExternalLink>}>
            <Paragraph>
              The algorithm for rare-earth elements separation process optimization used in my{' '}
              <Link download="Thesis.pdf" href="/TCC - João Nascimento.pdf" className="text-link">
                thesis
              </Link>{' '}
              (in portuguese). The algorithm aimed to minimize the cost of separation of Rare Earth Elements (REE) from
              one another, by using experimental data to define the most important process variables and which
              combination of those were more likely to yield a lower cost under certain boundaries.
            </Paragraph>
          </DescriptionBlock>
        </DescriptionWithImage>
        <DescriptionWithImage
          className="mt-5 lg:mt-10"
          imageContainerProps={{ id: 'holydays' }}
          image={<image className="h-[100px] w-[102.5px]" xlinkHref="/holydays.png" clipPath="url(#holydays)" />}>
          <DescriptionBlock
            samanticTitleTag="h3"
            className="mt-0"
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
        </DescriptionWithImage>
      </DescriptionBlock>
    </Page>
  );
}
