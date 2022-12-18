export default function Lollipop() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          width: '1rem',
          height: '1rem',
          transform: 'rotate(45deg)',
          backgroundColor: 'var(--accent-1)',
        }}
      />
      <div
        style={{
          height: 'calc(100% - 1rem)',
          border: '0.1rem solid var(--accent-1)',
          backgroundColor: 'var(--accent-1)',
        }}
      />
    </div>
  );
}
