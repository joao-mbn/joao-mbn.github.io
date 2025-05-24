import { DescriptionBlock, DescriptionBlockProps, DescriptionItem, ExternalLink, Page, Paragraph } from '../components';
import { Bullet } from '../components/Bullet';
import { MyWorkExperience } from '../components/MyWorkExperience';
import { AZURE_CERTIFICATION, ETR_OPTIMIZATION_GITHUB, IELTS_VALIDATION } from '../utils/constants';

export default function Resume() {
  return (
    <Page>
      <DescriptionBlock
        title="Summary"
        samanticTitleTag="h1"
        className="[&&]:mt-0 [&&]:lg:mt-0"
        titleProps={{ className: 'font-semibold' }}>
        <Paragraph>
          Fast learner and self-taught software engineer with <MyWorkExperience /> of experience in web development.
        </Paragraph>
      </DescriptionBlock>
      <SecondaryBlock title="Work Experience">
        <TertiaryBlock title="Suger - Software Engineer (Oct. 2024 - Present)">
          <RelevantSkills skills={['Golang']} />
        </TertiaryBlock>
        <TertiaryBlock title="Radix Engineering and Software - Developer IV (Sep. 2024 - Oct. 2024)">
          <ul>
            <DescriptionItem>
              Optimized performance and usability of a Dashboard displaying industrial data with multiple charts
              containing hundreds of thousands of points each and a Web GL 3D view, with:
              <ul>
                <DescriptionItem className="mt-1 lg:mt-2">
                  Caching and lazy loading to reduce app stable memory consumption from 1.2~1.6GB to between 150MB~450MB
                  under different scenarios.
                </DescriptionItem>
                <DescriptionItem>
                  Request splitting and geometry filters to reduce request durations up to 95% in the best scenarios.
                </DescriptionItem>
                <DescriptionItem paragraphProps={{ className: '!mb-0' }}>
                  Prefetching strategies to have features being instantly available on user click, that would otherwise
                  take over 10s to be available.
                </DescriptionItem>
              </ul>
            </DescriptionItem>
          </ul>
          <RelevantSkills skills={['Next.js', 'React', 'Cognite', 'Three.js', 'Typescript', 'Git']} />
        </TertiaryBlock>
        <TertiaryBlock title="Radix Engineering and Software - Developer III (Aug. 2023 - Sep. 2024)">
          <ul>
            <DescriptionItem>
              Led the implementation of a new interactive 3D visualization of an oil refinery plant for increased data
              contextualization, having left stakeholders impressed by the MVP and wanting to expand its features.
            </DescriptionItem>
            <DescriptionItem>
              Led a team of four developers, providing tailored feedback to enhance performance, aiding in comprehension
              of requirements and their implications, fostering improved questioning, workflow organization, and
              continuous testing. Helped team members to achieve an estimated 50% to 100% increase in productivity,
              measured by reduced time for delivering user stories.
            </DescriptionItem>
          </ul>
          <RelevantSkills skills={['Next.js', 'React', 'CSS', 'Three.js', 'Typescript', 'Git']} />
        </TertiaryBlock>
        <TertiaryBlock title="Radix Engineering and Software - Developer II (Aug. 2022 - Aug. 2023)">
          <ul>
            <DescriptionItem>
              Reduced deployment time by 80% by creating deployment pipelines, reducing it from 20 minutes to 4 minutes
              on average on multiple on-premises virtual machines, thus enabling faster testing cycles and practically
              eliminating deployment errors.
            </DescriptionItem>
            <DescriptionItem>
              Saved an estimated amount of USD 10,000 in development time by reimplementing an Excel-like spreadsheet
              solution with a more feature-rich and compatible library.
            </DescriptionItem>
            <DescriptionItem>
              Consistently delivered user stories within 40% to 70% of allocated timeframes.
            </DescriptionItem>
          </ul>
          <RelevantSkills skills={['.NET', 'React', 'SQL', 'CI/CD', 'Typescript', 'Git']} />
        </TertiaryBlock>
        <TertiaryBlock title="Radix Engineering and Software - Software Development Intern (May 2021 - Aug. 2022)">
          <ul>
            <DescriptionItem>
              Learned web development technologies from scratch during the internship, earning recognition for resolving
              issues and bugs swiftly. Completed the internship six months ahead of schedule, securing a full-time
              position as Developer II, bypassing the typical entry-level position of Developer I.
            </DescriptionItem>
          </ul>
          <RelevantSkills skills={['.NET', 'Angular', 'SQL', 'CSS', 'Typescript', 'Git']} />
        </TertiaryBlock>
      </SecondaryBlock>
      <SecondaryBlock title="Education">
        <TertiaryBlock title="Federal University of Rio de Janeiro - BSc of Chemical Engineering (Mar 2017- Sep. 2022)">
          <ul>
            <DescriptionItem>
              Created an algorithm for rare-earth elements separation process simulation and optimization which more
              than halved experimental time effort, found optimal conditions one-fifth of the cost of previous ones, and
              reduced project complexity through variables importance ranking and elimination. Received two awards for
              best undergraduate research, in 2020 and 2021, by the research facility where they were carried.{' '}
              <ExternalLink href={ETR_OPTIMIZATION_GITHUB}>Here you can find the source code</ExternalLink>.
            </DescriptionItem>
          </ul>
          <RelevantSkills skills={['Python', 'Chemical Engineering', 'Numerical Analysis', 'Process Optimization']} />
        </TertiaryBlock>
      </SecondaryBlock>
      <SecondaryBlock title="Certifications">
        <TertiaryBlock title="" titleProps={{ className: 'm-0 p-0' }}>
          <ul>
            <DescriptionItem>
              <ExternalLink href={AZURE_CERTIFICATION}>Microsoft Certified Azure Associate Developer</ExternalLink>
            </DescriptionItem>
          </ul>
        </TertiaryBlock>
      </SecondaryBlock>
      <SecondaryBlock title="Languages">
        <TertiaryBlock title="" titleProps={{ className: 'm-0 p-0' }}>
          <ul>
            <DescriptionItem>Portuguese: Native</DescriptionItem>
            <DescriptionItem>
              English: Proficient (IELTS Band 8.5 | CEFR C2 equivalent, credential{' '}
              <ExternalLink href={IELTS_VALIDATION} className="break-all">
                23BR000122BATJ705G
              </ExternalLink>
              )
            </DescriptionItem>
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
    <Paragraph>
      <div className="flex gap-1 flex-wrap">
        <span className="font-semibold">Relevant Skills:</span>
        {skills.map((s, i) => (
          <div className="flex items-center" key={s}>
            {i > 0 && <Bullet className="mx-2 !translate-y-0" />}
            {s}
          </div>
        ))}
      </div>
    </Paragraph>
  );
}

