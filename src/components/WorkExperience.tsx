import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { addHttps } from '../utils/strings';
import Link from './Link';
import Section from './Section';
import Skills from './Skills';
import TimeLineExperience from './TimeLineExperience';

export default function WorkExperience() {
  const { TRANSLATION } = useContext(AppContext);
  return (
    <Section header={TRANSLATION.WORK_EXPERIENCE}>
      <div>
        <TimeLineExperience
          position={TRANSLATION.JUNIOR_FULLSTACK_DEVELOPER}
          timespan="08/2022 -"
          place={TRANSLATION.RADIX}>
          <p>{TRANSLATION.RADIX_DESCRIPTION_P1}</p>
          <p>{TRANSLATION.RADIX_DESCRIPTION_P2}</p>
          <Skills skills={['Git', 'React', 'Javascript', 'Typescript', 'CSS', 'HTML', 'C#', 'MS SQL']} />
        </TimeLineExperience>
        <TimeLineExperience
          position={TRANSLATION.SOFTWARE_DEVELOPMENT_INTERN}
          timespan="05/2021 - 08/2022"
          place={TRANSLATION.RADIX}>
          <p>{TRANSLATION.RADIX_DESCRIPTION_P3}</p>
        </TimeLineExperience>
        <TimeLineExperience position={TRANSLATION.FOUNDER} timespan="03/2021 - 08/2021" place="for_code">
          <p>{TRANSLATION.FOR_CODE_DESCRIPTION_P1}</p>
          <p>{TRANSLATION.FOR_CODE_DESCRIPTION_P2}</p>
          <Skills skills={['Python', TRANSLATION.CHEMICAL_ENGINEERING, TRANSLATION.NUMERICAL_ANALYSIS]} />
        </TimeLineExperience>
        <TimeLineExperience
          position={TRANSLATION.UNDERGRADUATE_RESEARCHER}
          timespan="08/2020 - 03/2021"
          place={TRANSLATION.CETEM}>
          <p>{TRANSLATION.CETEM_DESCRIPTION}</p>
          <Link href={addHttps('github.com/joao-mbn/etr-optimization')}>{TRANSLATION.CHECK_SOURCE_CODE_GITHUB}</Link>
          <Skills skills={['Python', TRANSLATION.CHEMICAL_ENGINEERING, TRANSLATION.PROCESS_OPTIMIZATION]} />
        </TimeLineExperience>
      </div>
    </Section>
  );
}
