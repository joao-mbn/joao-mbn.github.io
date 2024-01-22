import { ExternalLink, Page } from '../components';
import { EMAIL, GITHUB, LINKEDIN, PHONE } from '../utils/constants';
import { getMyWorkExperience } from '../utils/datetime';

export default function Resume() {
  const { years, months } = getMyWorkExperience();

  return (
    <Page>
      <hgroup>
        <h1>João Nascimento</h1>
        <p>
          Full stack developer with {years} years and {months} {months === 1 ? 'month' : 'months'} of experience in web
          development.
        </p>
      </hgroup>

      <nav>
        <ul>
          <li>
            <ExternalLink href={`mailto:${EMAIL}`}>{EMAIL}</ExternalLink>
          </li>
          <li>
            <ExternalLink href={`tel:${PHONE.replace(/(\(| |\)|-)/g, '')}`}>{PHONE}</ExternalLink>
          </li>
          <li>
            <ExternalLink href={GITHUB}>Github 🔗</ExternalLink>
          </li>
          <li>
            <ExternalLink href={LINKEDIN}>Linkedin 🔗</ExternalLink>
          </li>
        </ul>
      </nav>

      <section>
        <h2>WORK EXPERIENCE</h2>

        <section>
          <h3>Radix Engineering and Software</h3>
          <section>
            <h4>Full Stack Developer - Developer III - (Aug. 2023 - present)</h4>
            <ul>
              <li>
                Leads a team of four developers and mentors a software development intern. Provides tailored feedback to
                enhance performance, aiding in comprehension of requirements and their implications. Helped newcomers
                achieve an estimated 50% to 100% increase in productivity.
              </li>
            </ul>
          </section>

          <section>
            <h4>Full Stack Developer - Developer II - (Aug. 2022 - Aug. 2023)</h4>
            <ul>
              <li>
                Reduced deployment time by 80% by creating deployment pipelines, reducing it from 20 minutes to 4
                minutes on average on multiple on-premises virtual machines, thus enabling faster testing cycles and
                practically eliminating deployment errors.
              </li>
              <li>
                Saved an estimated amount of USD 10,000 in development time by reimplementing an Excel-like spreadsheet
                solution with a more feature-rich and compatible library.
              </li>
              <li>Consistently delivered user stories within 40% to 70% of allocated timeframes.</li>
            </ul>
          </section>

          <section>
            <h4>Software Development Intern (May 2021 - Aug. 2022)</h4>
            <ul>
              <li>
                Learned web development technologies from scratch during the internship, earning recognition for
                resolving issues and bugs swiftly. Completed the internship six months ahead of schedule, securing a
                full-time Developer II, bypassing the typical entry-level position of Developer I.
              </li>
            </ul>
          </section>
        </section>
      </section>

      <section>
        <h2>EDUCATION</h2>
        <section>
          <h3>Federal University of Rio de Janeiro</h3>
          <h4>BSc of Chemical Engineering (Mar 2017- Sep. 2022)</h4>
          <ul>
            <li>
              Created an algorithm for rare-earth elements separation process simulation and optimization which more
              than halved experimental time effort, found optimal conditions one-fifth of the cost of previous ones, and
              reduced project complexity through variables importance ranking and elimination. Received two awards for
              best undergraduate research, in 2020 and 2021, by the research facility where they were carried.
              <ExternalLink href="https://github.com/joao-mbn/etr-optimization">Source Code 🔗</ExternalLink>
            </li>
          </ul>
        </section>
      </section>

      <section>
        <h2>TECHNOLOGIES</h2>
        <ul>
          <li>Front-end: Typescript, Javascript, HTML, CSS, React, Tailwind CSS, Angular, RxJS, Redux.</li>
          <li>Back-end: .NET, C#, Dapper, Typescript, Javascript, Node, Express, NextJS, Mongoose.</li>
          <li>Databases: SQL Server, Azure Cosmos DB, Mongo DB.</li>
          <li>DevOps: Azure DevOps, Azure Pipelines, Github, Github Actions, Docker.</li>
          <li>Cloud: Azure Cloud (Functions, Cosmos DB, App Services, Storage, etc.).</li>
          <li>IDEs: VS Code, Visual Studio, SSMS, DBeaver.</li>
          <li>Others: Git, Python, Bash, Jest, Vitest, Playwright, xUnit.</li>
        </ul>
      </section>

      <section>
        <h2>CERTIFICATIONS</h2>
        <ExternalLink href="https://learn.microsoft.com/api/credentials/share/en-us/JooNascimento-3680/2B7A12D96DCBCFD2?sharingId">
          Microsoft Certified Azure Associate Developer 🔗
        </ExternalLink>
      </section>

      <section>
        <h2>LANGUAGES</h2>
        <ul>
          <li>Portuguese: Native</li>
          <li>
            English: Proficient (IELTS Band 8.5 | CEFR C2 equivalent, credential
            <ExternalLink href="https://ielts.ucles.org.uk/">23BR000122BATJ705G 🔗</ExternalLink>)
          </li>
        </ul>
      </section>
    </Page>
  );
}
