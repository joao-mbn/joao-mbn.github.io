import Chip from './Chip';

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {skills.map(skill => (
        <Chip key={skill}>{skill}</Chip>
      ))}
    </div>
  );
}
