import { DescriptionBlock, DescriptionBlockProps, DescriptionItem, ExternalLink, Page, Paragraph } from '../components';
import { AZURE_CERTIFICATION, ETR_OPTIMIZATION, IELTS_VALIDATION } from '../utils/constants';
import { getMyWorkExperience } from '../utils/datetime';

export default function Resume() {
  const { years, months } = getMyWorkExperience();

  return (
    <Page>
      <DescriptionBlock
        title="Summary"
        samanticTitleTag="h1"
        className="[&&]:mt-0 [&&]:lg:mt-0"
        titleProps={{ className: 'font-semibold' }}>
        <Paragraph>
          Full stack developer with {years} years and {months} {months === 1 ? 'month' : 'months'} of experience in web
          development.
        </Paragraph>
      </DescriptionBlock>
      <SecondaryBlock title="Work Experience">
        <TertiaryBlock title="Radix Engineering and Software - Developer III (Aug. 2023 - present)">
          <ul>
            <DescriptionItem>
              Leads a team of four developers and mentors a software development intern. Provides tailored feedback to
              enhance performance, aiding in comprehension of requirements and their implications. Helped newcomers
              achieve an estimated 50% to 100% increase in productivity.
            </DescriptionItem>
          </ul>
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
        </TertiaryBlock>
        <TertiaryBlock title="Radix Engineering and Software - Software Development Intern (May 2021 - Aug. 2022)">
          <ul>
            <DescriptionItem>
              Learned web development technologies from scratch during the internship, earning recognition for resolving
              issues and bugs swiftly. Completed the internship six months ahead of schedule, securing a full-time
              position as Developer II, bypassing the typical entry-level position of Developer I.
            </DescriptionItem>
          </ul>
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
              <ExternalLink href={ETR_OPTIMIZATION}>Here you can find the source code</ExternalLink>.
            </DescriptionItem>
          </ul>
        </TertiaryBlock>
      </SecondaryBlock>
      <SecondaryBlock title="Technologies">
        <TertiaryBlock title="" titleProps={{ className: 'm-0 p-0' }}>
          <ul>
            <DescriptionItem>
              Front-end: Typescript, Javascript, HTML, CSS, React, Tailwind CSS, Angular, RxJS, Redux.
            </DescriptionItem>
            <DescriptionItem>
              Back-end: .NET, C#, Dapper, Typescript, Javascript, Node, Express, NextJS, Mongoose.
            </DescriptionItem>
            <DescriptionItem>Databases: SQL Server, Azure Cosmos DB, Mongo DB.</DescriptionItem>
            <DescriptionItem>DevOps: Azure DevOps, Azure Pipelines, Github, Github Actions, Docker.</DescriptionItem>
            <DescriptionItem>Cloud: Azure Cloud (Functions, Cosmos DB, App Services, Storage, etc.).</DescriptionItem>
            <DescriptionItem>IDEs: VS Code, Visual Studio, SSMS, DBeaver.</DescriptionItem>
            <DescriptionItem>Others: Git, Python, Bash, Jest, Vitest, Playwright, xUnit.</DescriptionItem>
          </ul>
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
