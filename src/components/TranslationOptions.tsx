import { CSSProperties, useRef, useState } from 'react';
import { LanguageEnum } from '../enums/Language';
import { PIXEL_TO_REM } from '../utils/constants';
import { addAssetsPath } from '../utils/strings';

export default function TranslationOptions({ onChange }: { onChange: (language: LanguageEnum) => void }) {
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

  const optionsRef = useRef([enUSOption, deDEOption, ptBROption]);
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

  const Template = ({ icon, ...props }: { icon: string; style?: CSSProperties; onClick: () => void }) => (
    <input
      {...props}
      type="image"
      className="icon"
      key={icon}
      src={addAssetsPath(`${icon}.svg`)}
      alt={icon.replace('-', ' ')}
    />
  );

  const chevronTemplate = (
    <Template
      icon="chevron-up"
      style={{
        height: '1.5rem',
        marginTop: '0.3rem',
        filter: 'var(--primary-text-filter)',
        transition: 'transform 0.3s',
        transform: toggleShowAll ? 'rotate(180deg)' : '',
      }}
      onClick={toggle}
    />
  );

  const flagTemplate = ({ language, icon }: { language: LanguageEnum; icon: string }) => (
    <Template
      icon={icon}
      style={{ height: optionHeight, minWidth: optionHeight }}
      onClick={() => {
        putChosenAsFirst(language);
        onChange(language);
        toggle();
      }}
    />
  );

  return (
    <div style={{ display: 'flex', marginTop: '-0.5rem', padding: '2rem', gap }}>
      {chevronTemplate}
      <div
        style={{
          height: containerHeight,
          transition: 'height 0.3s ease-out',
          display: 'flex',
          flexDirection: 'column',
          gap,
          overflow: 'hidden',
          alignItems: 'flex-end',
        }}>
        {optionsRef.current.map(option => flagTemplate(option))}
      </div>
    </div>
  );
}
