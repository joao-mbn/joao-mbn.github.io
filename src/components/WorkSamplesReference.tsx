import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { addAssetsPath, addHttps } from '../utils/strings';
import Link from './Link';
import Section from './Section';
import SectionListContent from './SectionListContent';

export default function WorkSamplesReference() {
  const website = 'joao-mbn.github.io';
  const leetcode = '/joaombn97';
  const github = '/joao-mbn';

  const { TRANSLATION } = useContext(AppContext);

  return (
    <Section header={TRANSLATION.SEE_WORK_SAMPLES_AT}>
      <nav>
        <SectionListContent>
          <>
            <img className="icon" src={addAssetsPath('web.svg')} alt="website" />
            <Link href={addHttps(website)}>{website}</Link>
          </>
          <>
            <img className="icon" src={addAssetsPath('leetcode.svg')} alt="leet code" />
            <Link href={addHttps(`leetcode.com${leetcode}`)}>{leetcode}</Link>
          </>
          <>
            <img className="icon" src={addAssetsPath('github.svg')} alt="github" />
            <Link href={addHttps(`github.com${github}`)}>{github}</Link>
          </>
        </SectionListContent>
      </nav>
    </Section>
  );
}
