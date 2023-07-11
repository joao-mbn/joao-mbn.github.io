import { useEffect, useState } from 'react';
import { LanguageEnum } from '../enums/Language';
import EN_US, { TranslationType } from '../languages/enUS';

export default function useTranslation() {
  const [language, setLanguage] = useState<LanguageEnum>(LanguageEnum.English);
  const filePath =
    '../languages/' +
    {
      [LanguageEnum.English]: 'enUS',
      [LanguageEnum.German]: 'deDE',
      [LanguageEnum.Portuguese]: 'ptBR',
    }[language];

  const [TRANSLATION, setTranslation] = useState<TranslationType>(EN_US);

  useEffect(() => {
    import(filePath).then(({ default: translation }) => setTranslation(translation));
  }, [filePath]);

  return { TRANSLATION, language, setLanguage };
}
