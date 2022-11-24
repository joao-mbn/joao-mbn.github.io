import { useEffect, useReducer } from 'react';
import { DeviceEnum } from '../enums/Device';
import { DESKTOP_SIZE, MOBILE_SIZE, TABLET_SIZE } from '../utils/constants';

function reducer(
  _: {
    device: DeviceEnum;
    bodyWidth: number;
  },
  bodyWidth: number
) {
  switch (true) {
    case bodyWidth < TABLET_SIZE:
      return { device: DeviceEnum.MOBILE, bodyWidth };
    case bodyWidth < DESKTOP_SIZE:
      return { device: DeviceEnum.TABLET, bodyWidth };
    default:
      return { device: DeviceEnum.DESKTOP, bodyWidth };
  }
}

export default function useResponsivity() {
  const [device, dispatch] = useReducer(reducer, { device: DeviceEnum.MOBILE, bodyWidth: MOBILE_SIZE });

  function handleResize() {
    const bodyWidth = document.getElementsByTagName('body')[0].getBoundingClientRect().width;

    dispatch(bodyWidth);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize, true);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
}
