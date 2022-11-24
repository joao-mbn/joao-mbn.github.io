import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import Experience from './Experience';
import Section from './Section';
import SectionListContent from './SectionListContent';

export default function Education() {
  const { TRANSLATION } = useContext(AppContext);
  return (
    <Section header={TRANSLATION.EDUCATION}>
      <SectionListContent>
        <Experience position={TRANSLATION.CHEMICAL_ENGINEERING} timespan="2017-2022" place={TRANSLATION.UFRJ} />
        <Experience position={TRANSLATION.CHEMISTRY} timespan="2012-2016" place={TRANSLATION.IFRJ} />
      </SectionListContent>
    </Section>
  );
}
