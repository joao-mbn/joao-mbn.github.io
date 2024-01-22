import { ExternalLink, Paragraph } from '.';
import { EMAIL } from '../utils/constants';
import { getMyAge } from '../utils/datetime';

export function Greetings() {
  return (
    <>
      <section className="flex items-center flex-col-reverse sm:flex-row mx-auto items-start gap-2">
        <svg
          viewBox="-10 0 200 200"
          className="stroke-slate-500 fill-none h-80 w-80 sm:h-56 sm:w-56 md:h-80 md:w-80 lg:h-96 lg:w-96 stroke-10 overflow-visible">
          <defs>
            <clipPath id="hexagon">
              <path d="M 43 25 C 87 0 87 0 130 25 C 174 50 174 50 174 100 C 174 150 174 150 130 175 C 87 200 87 200 43 175 C 0 150 0 150 0 100 C 0 50 0 50 43 25" />
            </clipPath>
          </defs>
          <path d="M 43 25 C 87 0 87 0 130 25 C 174 50 174 50 174 100 C 174 150 174 150 130 175 C 87 200 87 200 43 175 C 0 150 0 150 0 100 C 0 50 0 50 43 25" />
          <image className="w-[175px] h-[235px]" xlinkHref="/me.jpg" clipPath="url(#hexagon)" />
        </svg>
        <div className="flex flex-col" style={{ flexBasis: 'fit-content' }}>
          <Paragraph>Hello there ✌️!</Paragraph>
          <Paragraph>
            I&apos;m João, a natural problem solver and Devil&apos;s Advocate with {getMyAge()} years of experience.
          </Paragraph>
          <Paragraph>
            My most relevant ability is that I tend to learn new stuff fast. Come to me with some idea, proposal,
            worldview or argument and we will be set for a good talk.
            <ExternalLink href={`mailto:${EMAIL}`}>Send me a message.</ExternalLink>
          </Paragraph>
        </div>
      </section>
    </>
  );
}
