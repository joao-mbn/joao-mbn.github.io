import { useLayoutEffect, useRef, useState } from 'react';
import ColorThemeSwitcher from './components/ColorThemeSwitcher';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Header from './components/Header';
import Languages from './components/Languages';
import Skills from './components/Skills';
import TranslationOptions from './components/TranslationOptions';
import WorkExperience from './components/WorkExperience';
import WorkSamplesReference from './components/WorkSamplesReference';
import { AppContext } from './contexts/AppContext';
import useResponsivity from './hooks/useResponsivity';
import useTranslation from './hooks/useTranslation';

export default function App() {
  const deviceInfos = useResponsivity();
  const { TRANSLATION, language, setLanguage } = useTranslation();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useLayoutEffect(() => {
    (document.getElementById('root') as HTMLElement).setAttribute('data-theme', theme);
  }, [theme]);

  const utilitiesContainerRef = useRef<HTMLDivElement>(null);

  return (
    <AppContext.Provider value={{ deviceInfos, TRANSLATION, language, theme }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '1024px',
          minHeight: '100vh',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap-reverse',
          }}>
          <Header />
          <div style={{ display: 'flex', marginTop: '-0.5rem' }} ref={utilitiesContainerRef}>
            <ColorThemeSwitcher toggleTheme={() => setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))} />
            <TranslationOptions onChange={setLanguage} parentPositionRef={utilitiesContainerRef.current} />
          </div>
        </div>
        <main>
          <ContactInfo />
          <WorkExperience />
          <Education />
          <WorkSamplesReference />
          <Skills />
          <Languages />
        </main>
      </div>
    </AppContext.Provider>
  );
}
