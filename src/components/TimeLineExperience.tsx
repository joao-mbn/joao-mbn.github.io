import Experience from './Experience';
import Lollipop from './Lollipop';

type TimeLineExperienceProps = Parameters<typeof Experience>[0] & {
  children?: React.ReactNode;
};

export default function TimeLineExperience({ children, ...props }: TimeLineExperienceProps) {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Lollipop />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          paddingBottom: '1rem',
        }}>
        <Experience {...props} />
        {children}
      </div>
    </div>
  );
}
