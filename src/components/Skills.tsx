import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import ProgressBar from './ProgressBar';
import Section from './Section';
import SectionListContent from './SectionListContent';

export default function Skills() {
  const { TRANSLATION } = useContext(AppContext);

  return (
    <Section header={TRANSLATION.SKILLS}>
      <SectionListContent>
        <h3>Front-end</h3>
        <>
          <ProgressBar progress={80} />
          <span>Typescript</span>
        </>
        <>
          <ProgressBar progress={70} />
          <span>React</span>
        </>
        <>
          <ProgressBar progress={70} />
          <span>Javascript</span>
        </>
        <>
          <ProgressBar progress={65} />
          <span>HTML</span>
        </>
        <>
          <ProgressBar progress={60} />
          <span>CSS</span>
        </>
        <h3>Back-end</h3>
        <>
          <ProgressBar progress={60} />
          <span>MS SQL</span>
        </>
        <>
          <ProgressBar progress={50} />
          <span>C#</span>
        </>
        <h3>{TRANSLATION.VERSIONING}</h3>
        <>
          <ProgressBar progress={40} />
          <span>Git</span>
        </>
        <h3>{TRANSLATION.SCRIPTING_AND_PROTOTYPING}</h3>
        <>
          <ProgressBar progress={40} />
          <span>Python</span>
        </>
        <h3>DevOps</h3>
        <>
          <ProgressBar progress={35} />
          <span>Azure</span>
        </>
      </SectionListContent>
    </Section>
  );
}
