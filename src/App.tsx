import { useState } from 'react';
import ColorThemeSwitcher from './components/ColorThemeSwitcher';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Header from './components/Header';
import LanguagesChart from './components/LanguagesChart';
import PDF from './components/PDF';
import SkillsChart from './components/SkillsChart';
import TranslationOptions from './components/TranslationOptions';
import WorkExperience from './components/WorkExperience';
import { AppContext } from './contexts/AppContext';
import useResponsivity from './hooks/useResponsivity';
import useTranslation from './hooks/useTranslation';

export default function App() {
  const deviceInfos = useResponsivity();
  const { TRANSLATION, language, setLanguage } = useTranslation();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <AppContext.Provider value={{ deviceInfos, TRANSLATION, language, theme }}>
      <div data-theme={theme}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minWidth: '360px',
            maxWidth: '1024px',
            minHeight: '100vh',
          }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Header />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <PDF />
              <ColorThemeSwitcher
                toggleTheme={() => setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))}
              />
              <TranslationOptions onChange={setLanguage} />
            </div>
          </div>
          <main style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 50%' }}>
              <ContactInfo />
            </div>
            <div style={{ flex: '1 1 50%' }}>
              <Education />
            </div>
            <WorkExperience />
            <div style={{ flex: '1 1 50%' }}>
              <SkillsChart />
            </div>
            <div style={{ flex: '1 1 50%' }}>
              <LanguagesChart />
            </div>
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}
