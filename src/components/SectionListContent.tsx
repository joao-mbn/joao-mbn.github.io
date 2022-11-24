import React from 'react';

export default function SectionListContent({ children }: { children: React.ReactNode[] }) {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {React.Children.map(children, child => (
        <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>{child}</li>
      ))}
    </ul>
  );
}
