import { DescriptionBlock, ExternalLink, Page, Paragraph } from '../components';
import {
  CAREER_CAPITAL,
  EARNING_TO_GIVE,
  EFFECTIVE_ALTRUISM,
  ETR_OPTIMIZATION_GITHUB,
  PRESSING_PROBLEMS,
  RADIX,
  THESIS,
} from '../utils/constants';

export default function About() {
  return (
    <Page>
      <DescriptionBlock
        title="My Professional Background"
        titleProps={{ className: 'font-semibold' }}
        className="[&&]:mt-0 [&&]:lg:mt-0">
        <Paragraph>
          In spite of having almost a decade of study and practice in the domain of chemistry and its applications,
          holding a bachelor&apos;s degree in chemical engineering and a technician degree in chemistry, I work as a
          software developer.
        </Paragraph>
        <Paragraph>
          In late 2020, I saw of couple of friends playing with Python for investment analysis and algorithmic trading.
          Recognizing the potential of those tools for enhancing my academic research, developing an industrial process
          for attaining pure rare earth elements, I decided to learn the basics and a couple of libraries for matrix
          manipulation, data treatment, statistics and plotting. Not long after, I was implementing my first automation
          routines for this project. The algorithms helped me achieve impressive results and was responsible, in no
          small part, for granting me two consecutive yearly awards for the best undergraduate research in the
          institution I carried it. Upon further refinements, I used{' '}
          <ExternalLink href={ETR_OPTIMIZATION_GITHUB}>this algorithm</ExternalLink> for my{' '}
          <ExternalLink href={THESIS}>thesis</ExternalLink>.
        </Paragraph>
        <Paragraph>
          By may of 2021, I seized an internship opportunity in software development at{' '}
          <ExternalLink href={RADIX}>Radix</ExternalLink>, to build all kinds of software for companies at different
          industries. In a short span, I learned the basics of web development, API management, and database querying,
          securing a full-time position as a full stack developer within a year and a half. I&apos;ve been progressing
          on this role and currently I work as a Tech Lead, giving maintenance and making enhancements to an application
          that manages a metal coating process workflow, delivered to on-premises environments to five different
          countries, translated in four languages.
        </Paragraph>
      </DescriptionBlock>
      <DescriptionBlock title="Life Goals" titleProps={{ className: 'font-semibold' }}>
        <Paragraph>
          Even though the world is arguably better than ever, it has nonetheless far too many problems for me to think
          that just doing my part will be sufficient. And some problems have or will have taken such proportions as to
          endanger our species as a whole. This reasoning eventually led me to the{' '}
          <ExternalLink href={EFFECTIVE_ALTRUISM}>Effective Altruism community</ExternalLink>, in which I&apos;ve been
          increasing my engagement and interest overtime.
        </Paragraph>
        <Paragraph>
          As a software developer, I intend to harness my skills and generate resources to tackle the{' '}
          <ExternalLink href={PRESSING_PROBLEMS}>world&apos;s most pressing problems</ExternalLink> by{' '}
          <ExternalLink href={EARNING_TO_GIVE}>earning to give</ExternalLink>. So far, I&apos;ve been focusing in
          becoming the best professional I can be by building{' '}
          <ExternalLink href={CAREER_CAPITAL}>career capital</ExternalLink>.
        </Paragraph>
        <Paragraph>
          Focusing on the hope for a better future provides an justification for the daily struggles. It transforms
          challenges into opportunities for growth and positive impact. The satisfaction and sense of purpose derived
          from knowing that I&apos;m contributing to positive change in the world makes it a reciprocal exchange that
          benefits both the giver and the receiver.
        </Paragraph>
      </DescriptionBlock>
      <DescriptionBlock title="Hobbies" titleProps={{ className: 'font-semibold' }}>
        <Paragraph>
          Before chemistry and programming took the center stage, my childhood fascination with maps and flags initiated
          a lifelong interest in understanding places and people. This curiosity manifested in a habit of filling gaps
          in my knowledge about different corners of the globe—what they look like, who inhabits them, and the stories
          they hold. This passion naturally led me to explore various subjects, including geography, history, languages,
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
