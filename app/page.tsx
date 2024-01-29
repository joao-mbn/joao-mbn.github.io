import { DescriptionBlock, DescriptionWithImage, ExternalLink, Page, Paragraph } from './components';
import { EMAIL } from './utils/constants';
import { getMyAge } from './utils/datetime';

export default function Home() {
  return (
    <Page>
      <DescriptionWithImage
        imageContainerProps={{ id: 'greetings' }}
        image={<image className="h-[115px] w-[100.5px]" xlinkHref="/me.jpg" clipPath="url(#greetings)" />}>
        <div className="flex flex-col">
          <h1 className="text-biggest">Hello there!</h1>
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
      <DescriptionBlock title="My Professional Background" titleProps={{ className: 'font-semibold' }}>
        <Paragraph>
          In spite of having almost a decade of study and practice in the domain of chemistry and its applications,
          holding a bachelor&apos;s degree in chemical engineering and a technician degree in chemistry, I work as a
          software developer.
        </Paragraph>
        <Paragraph>
          During the COVID pandemic, I stumbled upon the fascinating realm of programming through friends engaged in
          algorithmic trading. Recognizing the potential for enhancing my academic research in an industrial process for
          attaining pure rare earth elements, I decided to learn the basics, and not long after, I was implementing my
          first algorithms for process optimization. The algorithms helped me achieve impressive results and was
          responsible, in no small part, for granting me two consecutive yearly awards for the best undergraduate
          research in the institution I carried it. Upon further refinements, I used this algorithm for my thesis.
        </Paragraph>
        <Paragraph>
          Eager to continue exploring the world of programming, I seized an internship opportunity in software
          development. In a short span, I learned the basics of web development, API management, and database querying,
          securing a full-time position as a full-stack developer within a year and a half.
        </Paragraph>
      </DescriptionBlock>
      <DescriptionBlock title="Life Goals" titleProps={{ className: 'font-semibold' }}>
        <Paragraph>
          The world even though arguably better than ever, it has nonetheless far too many problems for me to think that
          just doing my part will be sufficient. And some problems have or will have taken such proportions as to
          endanger our species as a whole.
        </Paragraph>
        <Paragraph>
          As a software developer committed to earning to give, I see my profession not only as a means of personal
          success but as a powerful tool to address societal issues. By leveraging my skills, I aim to generate
          resources that can be strategically directed towards initiatives with the potential to create lasting,
          meaningful change contributing to solve the world&apos;s most pressing problems
        </Paragraph>
        <Paragraph>
          Besides that, focusing on the hope for a better future provides an justification for the daily struggles. It
          transforms routine challenges into opportunities for growth and positive impact. Thus, it isn&apos;t just an
          act of charity; it&apos;s a reciprocal exchange that benefits both the giver and the receiver. The intrinsic
          satisfaction derived from knowing that I am contributing to positive change in the world adds a sense of
          purpose to my life.
        </Paragraph>
      </DescriptionBlock>
      <DescriptionBlock title="Hobbies" titleProps={{ className: 'font-semibold' }}>
        <Paragraph>
          Before chemistry and programming took the center stage, my childhood fascination with maps and flags sparked a
          lifelong interest in understanding places and people. This curiosity manifested in a habit of filling gaps in
          my knowledge about different corners of the globe—what they look like, who inhabits them, and the stories they
          hold. This passion naturally led me to explore various subjects, including geography, history, languages,
          evolutionary biology, economics, and politics. My interests have evolved into a hobby that continuously fuels
          my quest for knowledge. As a result, I&apos;ve cultivated a decent general understanding of these diverse
          fields and I can comprehend five languages to varying extents: Portuguese, English, German, French, and
          Spanish, by order of proficiency.
        </Paragraph>
        <Paragraph>
          I like to have moments throughout the day where I can leverage the diffuse mode of thinking, which is to say
          that I turn my brain off. At these times I&apos;m usually running or working out and listening to some RPG
          podcast or music.
        </Paragraph>
      </DescriptionBlock>
    </Page>
  );
}

