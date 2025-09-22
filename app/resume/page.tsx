import { DescriptionBlock, DescriptionBlockProps, DescriptionItem, ExternalLink, Page, Paragraph } from '../components';
import { Bullet } from '../components/Bullet';
import { MyWorkExperience } from '../components/MyWorkExperience';
import { getResumeContent } from '../content';

export default async function Resume() {
  const content = await getResumeContent();
  const [summaryDescriptionPrefix, summaryDescriptionSuffix] = content.summary.description.split('{{yoe}}');

  return (
    <Page>
      <DescriptionBlock
        title={content.summary.title}
        samanticTitleTag="h1"
        className="[&&]:mt-0 [&&]:lg:mt-0"
        titleProps={{ className: 'font-semibold' }}>
        <Paragraph>
          {summaryDescriptionPrefix} <MyWorkExperience /> {summaryDescriptionSuffix}
        </Paragraph>
      </DescriptionBlock>
      <SecondaryBlock title={content.workExperience.title}>
        {content.workExperience.items.map((experience, index) => (
          <TertiaryBlock key={index} title={`${experience.company} - ${experience.position} (${experience.duration})`}>
            <ul>
              {experience.achievements.map((achievement, achievementIndex) => (
                <DescriptionItem key={achievementIndex}>{achievement}</DescriptionItem>
              ))}
            </ul>
            <RelevantSkills skills={experience.skills} />
          </TertiaryBlock>
        ))}
      </SecondaryBlock>
      <SecondaryBlock title={content.education.title}>
        {content.education.items.map((education, index) => (
          <TertiaryBlock
            key={index}
            title={`${education.institution} - ${education.degree} (${education.duration})`}></TertiaryBlock>
        ))}
      </SecondaryBlock>
      <SecondaryBlock title={content.certifications.title}>
        <TertiaryBlock title="" titleProps={{ className: 'm-0 p-0' }}>
          <ul>
            {content.certifications.items.map((certification, index) => (
              <DescriptionItem key={index}>
                <ExternalLink href={certification.link}>{certification.name}</ExternalLink>
              </DescriptionItem>
            ))}
          </ul>
        </TertiaryBlock>
      </SecondaryBlock>
      <SecondaryBlock title={content.languages.title}>
        <TertiaryBlock title="" titleProps={{ className: 'm-0 p-0' }}>
          <ul>
            {content.languages.items.map((language, index) => (
              <DescriptionItem key={index}>
                {language.language}: {language.proficiency}
                {language.certifyingBody && ` (${language.certifyingBody}`}
                {language.credential && language.link && (
                  <>
                    , credential{' '}
                    <ExternalLink href={language.link} className="break-all">
                      {language.credential}
                    </ExternalLink>
                  </>
                )}
                {language.certifyingBody && ')'}
              </DescriptionItem>
            ))}
          </ul>
        </TertiaryBlock>
      </SecondaryBlock>
    </Page>
  );
}

function TertiaryBlock(props: DescriptionBlockProps<'h3'>) {
  return (
    <DescriptionBlock
      samanticTitleTag="h3"
      className="[&&]:mt-0 [&&]:lg:mt-0"
      titleProps={{ className: 'text-big' }}
      {...props}
    />
  );
}

function SecondaryBlock(props: DescriptionBlockProps<'h2'>) {
  return <DescriptionBlock samanticTitleTag="h2" titleProps={{ className: 'font-semibold' }} {...props} />;
}

function RelevantSkills({ skills }: { skills: string[] }) {
  return (
    <div className="mb-2 flex flex-wrap gap-1 lg:mb-4">
      <span className="font-semibold">Relevant Skills:</span>
      {skills.map((s, i) => (
        <div className="flex items-center" key={s}>
          {i > 0 && <Bullet className="mx-2 !translate-y-0" />}
          {s}
        </div>
      ))}
    </div>
  );
}
