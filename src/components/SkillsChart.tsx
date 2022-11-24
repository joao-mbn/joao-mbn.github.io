import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { RadarChart } from './RadarChart';

export default function SkillsChart() {
  const { TRANSLATION } = useContext(AppContext);
  const series = [
    { name: TRANSLATION.PROGRAMMING_SKILLS, data: [20, 35, 45, 50, 30, 40, 25, 35, 30], color: 'var(--chart-1)' },
  ];
  const categories: string[] = ['Git', 'React', 'JS', 'TS', 'CSS', 'HTML', 'C#', 'Python', 'SQL'];

  return <RadarChart header={TRANSLATION.SKILLS} categories={categories} series={series} />;
}
