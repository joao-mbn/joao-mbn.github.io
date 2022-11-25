import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { addAssetsPath, addHttps } from '../utils/strings';
import Link from './Link';
import Section from './Section';
import SectionListContent from './SectionListContent';

export default function ContactInfo() {
  const email = 'joaombn97@gmail.com';
  const linkedin = '/joaomarcosbatistanascimento';
  const phone = '+55 (21) 99719-1268';
  const website = 'joao-mbn.github.io';
  const leetcode = '/joaombn97';
  const github = '/joao-mbn';

  const { TRANSLATION } = useContext(AppContext);

  return (
    <Section header={TRANSLATION.FIND_ME_AT}>
      <nav>
        <SectionListContent>
          <>
            <img className="icon" src={addAssetsPath('smartphone.svg')} alt="phone number" />
            <Link href={`tel:${phone.replace(/(\(| |\)|-)/g, '')}`}>{phone}</Link>
          </>
          <>
            <img className="icon" src={addAssetsPath('email.svg')} alt="email" />
            <Link href={`mailto:${email}`}>{email}</Link>
          </>
          <>
            <img className="icon" src={addAssetsPath('web.svg')} alt="website" />
            <Link href={addHttps(website)}>{website}</Link>
          </>
          <>
            <img className="icon" src={addAssetsPath('linkedin.svg')} alt="linkedin" />
            <Link href={addHttps(`linkedin.com/in${linkedin}`)}>{linkedin}</Link>
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
