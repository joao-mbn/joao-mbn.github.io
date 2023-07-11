import { createContext } from 'react';
import { DeviceEnum } from '../enums/Device';
import { LanguageEnum } from '../enums/Language';
import { TranslationType } from '../languages/enUS';

interface AppContextProps {
  deviceInfos?: {
    device: DeviceEnum;
    bodyWidth?: number;
  };
  TRANSLATION?: TranslationType;
  language: LanguageEnum;
  theme: 'dark' | 'light';
}

export const AppContext = createContext<AppContextProps>({
  deviceInfos: { device: DeviceEnum.MOBILE },
  TRANSLATION: undefined,
  language: LanguageEnum.English,
  theme: 'dark',
});
