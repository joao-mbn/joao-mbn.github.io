import { ApexOptions } from 'apexcharts';
import { useContext } from 'react';
import ReactApexChart from 'react-apexcharts';
import { AppContext } from '../contexts/AppContext';
import { DeviceEnum } from '../enums/Device';
import { DESKTOP_SIZE, MOBILE_SIZE, PIXEL_TO_REM } from '../utils/constants';
import Section, { SectionProps } from './Section';

interface RadarChartProps extends Omit<SectionProps, 'children'> {
  series: ApexOptions['series'];
  categories?: string[];
  options?: ApexOptions;
}

export function RadarChart({ series, categories, options: passedOptions, header }: RadarChartProps) {
  const { deviceInfos } = useContext(AppContext);

  const widthMagnifyingFactor = 1.3;
  const bodyWidth = deviceInfos?.bodyWidth ?? MOBILE_SIZE;
  const sectionWidth = deviceInfos?.device === DeviceEnum.DESKTOP ? bodyWidth / 2 : bodyWidth;
  const chartWidth = Math.min(sectionWidth, DESKTOP_SIZE / 2) * widthMagnifyingFactor;
  const offsetX = (sectionWidth - chartWidth) / 2;

  const fontSizeMagnifyingFactor = {
    [DeviceEnum.MOBILE]: 1.2,
    [DeviceEnum.TABLET]: 1.4,
    [DeviceEnum.DESKTOP]: 1.6,
  }[deviceInfos?.device ?? DeviceEnum.MOBILE];

  const fontSize = (PIXEL_TO_REM * fontSizeMagnifyingFactor).toString();

  const options: ApexCharts.ApexOptions = {
    chart: { toolbar: { show: false }, offsetX },
    markers: { size: 0 },
    stroke: { show: false },
    yaxis: { show: false },
    xaxis: {
      categories,
      labels: {
        style: {
          fontSize,
          fontFamily: 'var(--font-family)',
          colors: Array(categories?.length).fill('var(--primary-text)'),
        },
      },
    },
    plotOptions: {
      radar: { polygons: { strokeColors: 'var(--primary-text)', connectorColors: 'var(--primary-text)' } },
    },
    legend: {
      floating: true,
      showForSingleSeries: true,
      fontSize,
      fontFamily: 'var(--font-family)',
      labels: { colors: Array(series?.length).fill('var(--primary-text)') },
      markers: { radius: 0 },
    },
    ...passedOptions,
  };

  return (
    <Section style={{ maxWidth: sectionWidth, overflow: 'hidden' }} header={header}>
      <ReactApexChart
        type="radar"
        series={series}
        options={options}
        style={{ width: chartWidth, marginBottom: '-3rem' }}
      />
    </Section>
  );
}
