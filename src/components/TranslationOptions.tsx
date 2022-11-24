import { useContext, useRef, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { LanguageEnum } from '../enums/Language';
import { PIXEL_TO_REM } from '../utils/constants';
import { addAssetsPath } from '../utils/strings';

export default function TranslationOptions({ onChange }: { onChange: (language: LanguageEnum) => void }) {
  const { language } = useContext(AppContext);
  const [toggleShowAll, setToggleShowAll] = useState(false);

  const enUSOption = {
    language: LanguageEnum.English,
    icon: 'us-flag',
  };
  const deDEOption = {
    language: LanguageEnum.German,
    icon: 'germany-flag',
  };
  const ptBROption = {
    language: LanguageEnum.Portuguese,
    icon: 'brazil-flag',
  };

  const chosenOption = {
    [LanguageEnum.English]: enUSOption,
    [LanguageEnum.German]: deDEOption,
    [LanguageEnum.Portuguese]: ptBROption,
  }[language];

  const optionsRef = useRef([enUSOption, deDEOption, ptBROption]);
  const padding = 2 * PIXEL_TO_REM;
  const gap = 1 * PIXEL_TO_REM;
  const optionHeight = 2.4 * PIXEL_TO_REM;
  const containerHeight = toggleShowAll
    ? optionsRef.current.length * optionHeight + gap * (optionsRef.current.length - 1)
    : optionHeight;

  function toggle() {
    document.querySelector('.chevron')?.classList.toggle('inverted');
    setToggleShowAll(prevToggleShowAll => !prevToggleShowAll);
  }

  function putChosenAsFirst(language: LanguageEnum) {
    const option = optionsRef.current
      .splice(
        optionsRef.current.findIndex(opt => opt.language === language),
        1
      )
      .at(0);
    optionsRef.current.unshift(option!);
  }

  function template({ language, icon }: { language: LanguageEnum; icon: string }) {
    return (
      <input
        style={{ height: optionHeight, minWidth: optionHeight }}
        type="image"
        className="icon"
        key={language}
        onClick={() => {
          putChosenAsFirst(language);
          onChange(language);
          toggle();
        }}
        src={addAssetsPath(`${icon}.svg`)}
        alt={icon.replace('-', ' ')}
      />
    );
  }

  return (
    <div style={{ display: 'flex', marginTop: '-0.5rem', padding, gap }}>
      <div className="chevron" onClick={toggle} />
      <div
        style={{
          height: containerHeight,
          transition: 'height 0.2s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          gap,
          overflow: 'hidden',
          alignItems: 'flex-end',
        }}>
        {toggleShowAll ? optionsRef.current.map(option => template(option)) : template(chosenOption)}
      </div>
    </div>
  );
}
