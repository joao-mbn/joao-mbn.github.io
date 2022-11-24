import { createContext } from 'react';
import { DeviceEnum } from '../enums/Device';
import { LanguageEnum } from '../enums/Language';
import { EN_US } from '../languages/enUS';

interface AppContextProps {
  deviceInfos?: {
    device: DeviceEnum;
    bodyWidth?: number;
  };
  TRANSLATION: typeof EN_US;
  language: LanguageEnum;
  theme: 'dark' | 'light';
}

export const AppContext = createContext<AppContextProps>({
  deviceInfos: { device: DeviceEnum.MOBILE },
  TRANSLATION: EN_US,
  language: LanguageEnum.English,
  theme: 'dark',
});
