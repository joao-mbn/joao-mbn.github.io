import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { addHttps } from '../utils/strings';
import KeySkills from './KeySkills';
import Link from './Link';
import Section from './Section';
import TimeLineExperience from './TimeLineExperience';

export default function WorkExperience() {
  const { TRANSLATION } = useContext(AppContext);
  const diamond = (
    <div
      style={{
        minWidth: '0.7rem',
        width: '0.7rem',
        minHeight: '0.7rem',
        height: '0.7rem',
        transform: 'rotate(45deg)',
        backgroundColor: 'var(--accent-1)',
        marginTop: '0.5rem',
      }}
    />
  );

  function bullet(children: string | React.ReactNode) {
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        {diamond}
        <p>{children}</p>
      </div>
    );
  }

  return (
    <Section header={TRANSLATION.WORK_EXPERIENCE}>
      <div>
        <TimeLineExperience position={TRANSLATION.FULL_STACK_DEVELOPER} place={TRANSLATION.RADIX} timespan="08/2022 -">
          {bullet(TRANSLATION.RADIX_DESCRIPTION_P1)}
          {bullet(TRANSLATION.RADIX_DESCRIPTION_P2)}
          {bullet(TRANSLATION.RADIX_DESCRIPTION_P3)}
          <KeySkills skills={['Git', 'React', 'Javascript', 'Typescript', 'CSS', 'Tailwind', 'HTML', 'C#', 'MS SQL']} />
        </TimeLineExperience>
        <TimeLineExperience
          position={TRANSLATION.SOFTWARE_DEVELOPMENT_INTERN}
          place={TRANSLATION.RADIX}
          timespan="05/2021 - 08/2022">
          {bullet(TRANSLATION.RADIX_DESCRIPTION_P4)}
          {bullet(TRANSLATION.RADIX_DESCRIPTION_P5)}
          {bullet(TRANSLATION.RADIX_DESCRIPTION_P6)}
          <KeySkills
            skills={['Git', 'Angular', 'Javascript', 'Typescript', 'SCSS', 'HTML', 'C#', 'MS SQL', 'PostgreSQL']}
          />
        </TimeLineExperience>
        <TimeLineExperience position={TRANSLATION.FOUNDER} place="for_code" timespan="03/2021 - 08/2021">
          {bullet(TRANSLATION.FOR_CODE_DESCRIPTION_P1)}
          {bullet(
            <>
              {TRANSLATION.FOR_CODE_DESCRIPTION_P2}{' '}
              <Link href={addHttps('github.com/forcodeufrj/pbapq')}>{TRANSLATION.CHECK_SOURCE_CODE_GITHUB}</Link>
            </>
          )}
          <KeySkills skills={['Python', TRANSLATION.CHEMICAL_ENGINEERING, TRANSLATION.NUMERICAL_ANALYSIS]} />
        </TimeLineExperience>
        <TimeLineExperience
          position={TRANSLATION.UNDERGRADUATE_RESEARCHER}
          place={TRANSLATION.CETEM}
          timespan="08/2020 - 03/2021">
          {bullet(
            <>
              {TRANSLATION.CETEM_DESCRIPTION_P1}{' '}
              <Link href={addHttps('github.com/joao-mbn/etr-optimization')}>
                {TRANSLATION.CHECK_SOURCE_CODE_GITHUB}
              </Link>
            </>
          )}
          {bullet(TRANSLATION.CETEM_DESCRIPTION_P2)}
          <KeySkills skills={['Python', TRANSLATION.CHEMICAL_ENGINEERING, TRANSLATION.PROCESS_OPTIMIZATION]} />
        </TimeLineExperience>
      </div>
    </Section>
  );
}
