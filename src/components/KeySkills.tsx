import Chip from './Chip';

export default function KeySkills({ skills }: { skills: string[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '1rem 0 1.5rem 0' }}>
      {skills.map(skill => (
        <Chip key={skill}>{skill}</Chip>
      ))}
    </div>
  );
}
