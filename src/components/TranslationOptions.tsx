import { CSSProperties, useRef, useState } from 'react';
import { LanguageEnum } from '../enums/Language';
import { PIXEL_TO_REM } from '../utils/constants';
import { addAssetsPath } from '../utils/strings';

export default function TranslationOptions({
  onChange,
  parentPositionRef,
}: {
  onChange: (language: LanguageEnum) => void;
  parentPositionRef: HTMLDivElement | null;
}) {
  const [toggleShowAll, setToggleShowAll] = useState(false);
  const shouldExpandHorizontally = parentPositionRef?.getBoundingClientRect().left === 0;

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
  const gap = (shouldExpandHorizontally ? 1 : 0.3) * PIXEL_TO_REM;
  const optionMainDimension = 2.4 * PIXEL_TO_REM;
  const mainDimensionValue = toggleShowAll
    ? optionsRef.current.length * optionMainDimension + gap * (optionsRef.current.length - 1)
    : optionMainDimension;

  const mainDimension = shouldExpandHorizontally ? 'width' : 'height';
  const secondaryDimension = shouldExpandHorizontally ? 'height' : 'width';

  function toggle() {
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

  const Template = ({ icon, ...props }: { icon: string; key?: string; style?: CSSProperties; onClick: () => void }) => (
    <input {...props} type="image" className="icon" src={addAssetsPath(`${icon}.svg`)} alt={icon.replace('-', ' ')} />
  );

  const chevronTemplate = (
    <Template
      icon="chevron-up"
      style={{
        height: '1.5rem',
        marginTop: '0.3rem',
        filter: 'var(--primary-text-filter)',
        transition: 'transform 0.3s',
        transform: toggleShowAll ? '' : shouldExpandHorizontally ? 'rotate(90deg)' : 'rotate(180deg)',
      }}
      onClick={toggle}
    />
  );

  const flagTemplate = ({ language, icon }: { language: LanguageEnum; icon: string }) => (
    <Template
      icon={icon}
      style={{
        [mainDimension]: optionMainDimension,
        ['min' + secondaryDimension.charAt(0).toUpperCase() + secondaryDimension.slice(1)]: optionMainDimension,
      }}
      key={String(language)}
      onClick={() => {
        putChosenAsFirst(language);
        onChange(language);
        toggle();
      }}
    />
  );

  return (
    <div style={{ display: 'flex', padding: '2rem 2rem 0 2rem', gap: '1rem' }}>
      {chevronTemplate}
      <div
        style={{
          [mainDimension]: mainDimensionValue,
          transition: (shouldExpandHorizontally ? 'width' : 'height') + ' 0.3s ease-out',
          display: 'flex',
          flexDirection: shouldExpandHorizontally ? 'row' : 'column',
          gap,
          overflow: 'hidden',
          alignItems: 'flex-end',
        }}>
        {optionsRef.current.map(option => flagTemplate(option))}
      </div>
    </div>
  );
}
