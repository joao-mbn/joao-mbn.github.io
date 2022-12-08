import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import Section from './Section';
import TimeLineExperience from './TimeLineExperience';

export default function Education() {
  const { TRANSLATION } = useContext(AppContext);
  return (
    <Section header={TRANSLATION.EDUCATION}>
      <div>
        <TimeLineExperience position={TRANSLATION.CHEMICAL_ENGINEERING} place={TRANSLATION.UFRJ} timespan="2017-2022" />
        <TimeLineExperience position={TRANSLATION.CHEMISTRY} place={TRANSLATION.IFRJ} timespan="2012-2016" />
      </div>
    </Section>
  );
}
