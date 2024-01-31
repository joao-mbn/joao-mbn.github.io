import { DescriptionBlock, DescriptionItem, ExternalLink, Page, Paragraph } from '../components';
import { getMyWorkExperience } from '../utils/datetime';

export default function Resume() {
  const { years, months } = getMyWorkExperience();

  return (
    <Page>
      <DescriptionBlock
        title="About me"
        samanticTitleTag="h1"
        className="mt-0"
        titleProps={{ className: 'font-semibold' }}>
        <Paragraph>
          Full stack developer with {years} years and {months} {months === 1 ? 'month' : 'months'} of experience in web
          development.
        </Paragraph>
      </DescriptionBlock>
      <DescriptionBlock title="Work Experience" titleProps={{ className: 'font-semibold' }}>
        <DescriptionBlock title="Radix Engineering and Software" samanticTitleTag="h3">
          <DescriptionBlock
            title="Full Stack Developer - Developer III - (Aug. 2023 - present)"
            samanticTitleTag="h4"
            titleProps={{ className: 'text-big' }}>
            <ul>
              <DescriptionItem>
                Leads a team of four developers and mentors a software development intern. Provides tailored feedback to
                enhance performance, aiding in comprehension of requirements and their implications. Helped newcomers
                achieve an estimated 50% to 100% increase in productivity.
              </DescriptionItem>
            </ul>
          </DescriptionBlock>
          <DescriptionBlock
            title="Full Stack Developer - Developer II - (Aug. 2022 - Aug. 2023)"
            samanticTitleTag="h4"
            titleProps={{ className: 'text-big' }}>
            <ul>
              <DescriptionItem>
                Reduced deployment time by 80% by creating deployment pipelines, reducing it from 20 minutes to 4
                minutes on average on multiple on-premises virtual machines, thus enabling faster testing cycles and
                practically eliminating deployment errors.
              </DescriptionItem>
              <DescriptionItem>
                Saved an estimated amount of USD 10,000 in development time by reimplementing an Excel-like spreadsheet
                solution with a more feature-rich and compatible library.
              </DescriptionItem>
              <DescriptionItem>
                Consistently delivered user stories within 40% to 70% of allocated timeframes.
              </DescriptionItem>
            </ul>
          </DescriptionBlock>
          <DescriptionBlock
            title="Software Development Intern (May 2021 - Aug. 2022)"
            samanticTitleTag="h4"
            titleProps={{ className: 'text-big' }}>
            <ul>
              <DescriptionItem>
                Learned web development technologies from scratch during the internship, earning recognition for
                resolving issues and bugs swiftly. Completed the internship six months ahead of schedule, securing a
                full-time position as Developer II, bypassing the typical entry-level position of Developer I.
              </DescriptionItem>
            </ul>
          </DescriptionBlock>
        </DescriptionBlock>
      </DescriptionBlock>
      <DescriptionBlock title="Education" titleProps={{ className: 'font-semibold' }}>
        <DescriptionBlock title="Federal University of Rio de Janeiro" samanticTitleTag="h3">
          <DescriptionBlock
            title="BSc of Chemical Engineering (Mar 2017- Sep. 2022)"
            samanticTitleTag="h4"
            titleProps={{ className: 'text-big' }}>
            <DescriptionItem>
              Created an algorithm for rare-earth elements separation process simulation and optimization which more
              than halved experimental time effort, found optimal conditions one-fifth of the cost of previous ones, and
              reduced project complexity through variables importance ranking and elimination. Received two awards for
              best undergraduate research, in 2020 and 2021, by the research facility where they were carried.{' '}
              <ExternalLink href="https://github.com/joao-mbn/etr-optimization" className="text-link">
                Here you can find the source code
              </ExternalLink>
              .
            </DescriptionItem>
          </DescriptionBlock>
        </DescriptionBlock>
      </DescriptionBlock>
      <DescriptionBlock title="Technologies" titleProps={{ className: 'font-semibold' }}>
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
      </DescriptionBlock>
      <DescriptionBlock title="Certifications" titleProps={{ className: 'font-semibold' }}>
        <ul>
          <DescriptionItem>
            <ExternalLink
              className="text-link"
              href="https://learn.microsoft.com/api/credentials/share/en-us/JooNascimento-3680/2B7A12D96DCBCFD2?sharingId">
              Microsoft Certified Azure Associate Developer
            </ExternalLink>
          </DescriptionItem>
        </ul>
      </DescriptionBlock>
      <DescriptionBlock title="Languages" titleProps={{ className: 'font-semibold' }}>
        <ul>
          <DescriptionItem>Portuguese: Native</DescriptionItem>
          <DescriptionItem>
            English: Proficient (IELTS Band 8.5 | CEFR C2 equivalent, credential{' '}
            <ExternalLink href="https://ielts.ucles.org.uk/" className="text-link">
              23BR000122BATJ705G
            </ExternalLink>
            )
          </DescriptionItem>
        </ul>
      </DescriptionBlock>
    </Page>
  );
}
