import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import ProgressBar from './ProgressBar';
import Section from './Section';
import SectionListContent from './SectionListContent';

export default function Languages() {
  const { TRANSLATION } = useContext(AppContext);

  return (
    <Section header={TRANSLATION.LANGUAGES}>
      <SectionListContent>
        <>
          <ProgressBar progress={95} />
          <span>
            {TRANSLATION.PORTUGUESE} ({TRANSLATION.MOTHER_LANGUAGE})
          </span>
        </>
        <>
          <ProgressBar progress={80} />
          <span>{TRANSLATION.ENGLISH}</span>
        </>
        <>
          <ProgressBar progress={60} />
          <span>{TRANSLATION.GERMAN}</span>
        </>
      </SectionListContent>
    </Section>
  );
}
