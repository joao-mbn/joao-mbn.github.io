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
              <rect fill="#3178c6" height="100" width="100" clipPath="url(#types-hot-parser)" />
              <path
                strokeWidth="0"
                d="M54.9878 61.4848V71.497C56.6154 72.3314 58.5404 72.957 60.7628 73.3742S65.3274 74 67.7898 74C70.1896 74 72.4692 73.7706 74.629 73.3116 76.7888 72.8528 78.6826 72.0966 80.3102 71.0432 81.9378 69.99 83.2264 68.6132 84.1758 66.9132S85.6 63.1118 85.6 60.6088C85.6 58.794 85.3288 57.2036 84.7862 55.8374S83.4612 53.2562 82.4386 52.1924C81.4162 51.1286 80.1902 50.1742 78.7608 49.3294S75.7194 47.6868 73.9248 46.936C72.6102 46.3936 71.4312 45.867 70.3878 45.356 69.3444 44.8448 68.4576 44.3234 67.7272 43.7916 66.9968 43.2596 66.4334 42.6964 66.037 42.102 65.6406 41.5074 65.4422 40.8348 65.4422 40.0838 65.4422 39.3956 65.6196 38.775 65.9744 38.2222S66.83 37.195 67.4768 36.7986C68.1238 36.4024 68.9166 36.0946 69.8556 35.8756 70.7948 35.6566 71.838 35.5472 72.9858 35.5472 73.8204 35.5472 74.702 35.6098 75.6306 35.7348 76.5592 35.86 77.493 36.053 78.4322 36.3136 79.3712 36.5744 80.284 36.903 81.171 37.2992 82.0578 37.6956 82.8768 38.1544 83.628 38.676V29.3208C82.1048 28.7368 80.4406 28.304 78.6356 28.0224S74.7594 27.6 72.4224 27.6C70.0434 27.6 67.7898 27.8556 65.6614 28.3666S61.6602 29.6754 60.0428 30.76C58.4256 31.8448 57.1476 33.2266 56.2086 34.9058 55.2696 36.5848 54.8 38.5924 54.8 40.9286 54.8 43.9114 55.6608 46.4562 57.3824 48.563 59.1038 50.6696 61.7174 52.453 65.2232 53.9132 66.6004 54.4764 67.8838 55.029 69.0732 55.5714S71.2904 56.677 72.1562 57.261C73.0222 57.845 73.7056 58.4812 74.2066 59.1696 74.7074 59.8578 74.9578 60.64 74.9578 61.5162 74.9578 62.1628 74.8012 62.7624 74.4882 63.3152S73.7004 64.3476 73.064 64.7544 71.6346 65.4792 70.6852 65.7086C69.7356 65.9382 68.6246 66.0528 67.3516 66.0528 65.1814 66.0528 63.0322 65.6722 60.9036 64.9108 58.7752 64.1496 56.8032 63.0076 54.9878 61.4848ZM38.156 36.8164H51V28.6H15.2V36.8164H27.9812V73.4H38.156Z"
                fill="#fff"
                clipPath="url(#types-hot-parser)"
              />
            </>
          }>
          <DescriptionBlock
            className="mt-0"
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
        </DescriptionWithImage>
      </DescriptionBlock>
      <DescriptionBlock title="Personal Projects" titleProps={{ className: 'font-semibold' }}>
        <DescriptionWithImage
          className="mt-5 lg:mt-10"
          image={<image className="h-[235px] w-[175px]" xlinkHref="/me.jpg" clipPath="url(#hexagon)" />}>
          <DescriptionBlock
            className="mt-0"
            title={<ExternalLink href="https://github.com/joao-mbn/etr-optimization">REE Optimizations</ExternalLink>}>
            <Paragraph>
              The algorithm for rare-earth elements separation process optimization used in my{' '}
              <Link download="Thesis.pdf" href="/TCC - João Nascimento.pdf">
                thesis (in portuguese)
              </Link>
              . The algorithm aimed to minimize the cost of separation of Rare earth Elements (REE) from one another, by
              using experimental data to define the most important process variables and which combination of those were
              more likely to yield a lower cost under certain boundaries.
            </Paragraph>
          </DescriptionBlock>
        </DescriptionWithImage>
        <DescriptionWithImage
          className="mt-5 lg:mt-10"
          imageContainerProps={{ id: 'holydays' }}
          image={<image className="h-[100px] w-[100px]" xlinkHref="/holydays.png" clipPath="url(#holydays)" />}>
          <DescriptionBlock
            className="mt-0"
            title={<ExternalLink href="https://get-holydays.vercel.app/">Holydays</ExternalLink>}>
            <Paragraph>
              A website that will help you strategically plan your vacations to combo with weekends and holidays. See
              the project at <ExternalLink href="https://github.com/joao-mbn/holydays">Github</ExternalLink>
            </Paragraph>
          </DescriptionBlock>
        </DescriptionWithImage>
      </DescriptionBlock>
    </Page>
  );
}
