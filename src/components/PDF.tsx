import { jsPDF } from 'jspdf';
import { useContext, useMemo } from 'react';
import { AppContext } from '../contexts/AppContext';
import { LanguageEnum } from '../enums/Language';
import { addAssetsPath } from '../utils/strings';

export default function PDF() {
  const doc = useMemo(() => new jsPDF(), []);
  const { language } = useContext(AppContext);

  function generatePDF() {
    const languagePrefix = {
      [LanguageEnum.English]: 'enUS Resume',
      [LanguageEnum.German]: 'deDE Aufsatz',
      [LanguageEnum.Portuguese]: 'Currículo ptBR',
    }[language];

    const source = document.querySelector<HTMLDivElement>('[data-theme]');
    if (!source) return;

    doc.html(source, { callback: () => doc.save(`João ${languagePrefix}`) });
  }

  return (
    <input
      type="image"
      style={{ filter: 'var(--accent-filter-1)', height: '5.8rem', padding: '2rem', marginTop: '-0.5rem' }}
      className="icon"
      src={addAssetsPath('pdf.svg')}
      alt={'pdf'}
      onClick={() => generatePDF()}
    />
  );
}
