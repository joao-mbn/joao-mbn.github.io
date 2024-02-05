import { ExternalLink, HexagonImageContainer, Page, Paragraph } from './components';
import { EMAIL } from './utils/constants';
import { getMyAge } from './utils/datetime';

export default function Home() {
  return (
    <Page>
      <section className="mx-auto flex flex-col-reverse items-center gap-2 sm:flex-row sm:items-start">
        <HexagonImageContainer id="greetings">
          <image
            className="h-[110px] w-[110x] grayscale transition-all duration-300 hover:grayscale-0"
            xlinkHref="/me.webp"
            clipPath="url(#greetings)"
          />
        </HexagonImageContainer>
        <section className="flex flex-col">
          <h1 className="text-biggest">Hello there!</h1>
          <Paragraph>
            I&apos;m João, a natural problem solver and Devil&apos;s Advocate with {getMyAge()} years of experience.
          </Paragraph>
          <Paragraph>
            My most relevant ability is that I tend to learn new stuff fast. Come to me with some idea, proposal,
            worldview or argument and we will be set for a good talk.{' '}
            <ExternalLink href={`mailto:${EMAIL}`}>Send me a message</ExternalLink>.
          </Paragraph>
        </section>
      </section>
    </Page>
  );
}
