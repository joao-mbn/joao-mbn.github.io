import { ApexOptions } from 'apexcharts';
import { useContext, useLayoutEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import { RadarChart } from './RadarChart';

const legendFormatter = () => {
  ([...document.getElementsByClassName('apexcharts-legend-marker')] as HTMLSpanElement[]).forEach(marker => {
    marker.style.background = marker.style.background.replace('chart', 'accent');
  });
};

export default function LanguagesChart() {
  const { deviceInfos, TRANSLATION } = useContext(AppContext);

  const series: ApexCharts.ApexOptions['series'] = [
    { name: TRANSLATION.PORTUGUESE, data: [100, 100, 100, 95], color: 'var(--chart-1)' },
    { name: TRANSLATION.ENGLISH, data: [100, 75, 85, 90], color: 'var(--chart-2)' },
    { name: TRANSLATION.GERMAN, data: [85, 55, 60, 75], color: 'var(--chart-3)' },
  ];
  const categories = [TRANSLATION.READING, TRANSLATION.WRITING, TRANSLATION.SPEAKING, TRANSLATION.LISTENING];
  const options: ApexOptions = { yaxis: { show: false, max: 100, tickAmount: 5 } };

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      legendFormatter();
    }, 100);

    setTimeout(() => clearInterval(interval), 400);
  }, [deviceInfos]);

  return <RadarChart header={TRANSLATION.LANGUAGES} categories={categories} series={series} options={options} />;
}
