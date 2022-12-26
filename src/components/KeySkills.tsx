import Chip from './Chip';

export default function KeySkills({ skills }: { skills: string[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {skills.map(skill => (
        <Chip key={skill}>{skill}</Chip>
      ))}
    </div>
  );
}
