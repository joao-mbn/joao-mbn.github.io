import { ExternalLink, HexagonImageContainer, Page, Paragraph } from './components';
import { MyAge } from './components/MyAge';
import { getHomeContent } from './content';
import { EMAIL } from './utils/constants';

export default async function Home() {
  const content = await getHomeContent();
  const [introductionPrefix, introductionSuffix] = content.introduction.split('{{age}}');

  return (
    <Page>
      <section className="mx-auto flex flex-col-reverse items-center gap-2 sm:flex-row sm:items-start">
        <HexagonImageContainer id="greetings">
          <image
            className="h-[110px] w-[110x] grayscale transition-all duration-300"
            xlinkHref="/me.webp"
            clipPath="url(#greetings)"
          />
        </HexagonImageContainer>
        <section className="flex flex-col">
          <h1 className="text-biggest">{content.greeting}</h1>
          <Paragraph>
            {introductionPrefix} <MyAge /> {introductionSuffix}
          </Paragraph>
          <Paragraph>
            {content.description} <ExternalLink href={`mailto:${EMAIL}`}>{content.cta}</ExternalLink>.
          </Paragraph>
        </section>
      </section>
    </Page>
  );
}
