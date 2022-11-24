import { useState } from 'react';
import { LanguageEnum } from '../enums/Language';
import { DE_DE } from '../languages/deDE';
import { EN_US } from '../languages/enUS';
import { PT_BR } from '../languages/ptBR';

export default function useTranslation() {
  const [language, setLanguage] = useState<LanguageEnum>(LanguageEnum.English);

  const TRANSLATION = {
    [LanguageEnum.English]: EN_US,
    [LanguageEnum.German]: DE_DE,
    [LanguageEnum.Portuguese]: PT_BR,
  }[language];

  return { TRANSLATION, language, setLanguage };
}
