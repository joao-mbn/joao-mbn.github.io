import { DescriptionWithImage, ExternalLink, Paragraph } from '.';
import { EMAIL } from '../utils/constants';
import { getMyAge } from '../utils/datetime';

export function Greetings() {
  return (
    <DescriptionWithImage
      imageContainerProps={{ id: 'greetings' }}
      image={<image className="h-[115px] w-[100px]" xlinkHref="/me.jpg" clipPath="url(#greetings)" />}>
      <div className="flex flex-col">
        <h1 className="text-biggest">Hello there! ✌️</h1>
        <Paragraph>
          I&apos;m João, a natural problem solver and Devil&apos;s Advocate with {getMyAge()} years of experience.
        </Paragraph>
        <Paragraph>
          My most relevant ability is that I tend to learn new stuff fast. Come to me with some idea, proposal,
          worldview or argument and we will be set for a good talk.{' '}
          <ExternalLink href={`mailto:${EMAIL}`} className="text-link">
            Send me a message
          </ExternalLink>
          .
        </Paragraph>
      </div>
    </DescriptionWithImage>
  );
}
