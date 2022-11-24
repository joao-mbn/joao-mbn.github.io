import React from 'react';

export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="semi-bold"
      style={{
        backgroundColor: 'var(--accent-1)',
        borderRadius: '0.5rem',
        padding: '0.5rem',
        color: 'var(--primary-bg)',
      }}>
      {children}
    </span>
  );
}
