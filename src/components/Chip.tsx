import React from 'react';

export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <span
        className="semi-bold"
        style={{
          backgroundColor: 'var(--accent-1)',
          color: 'var(--primary-bg)',
          padding: '0.5rem 1.2rem',
          clipPath: `polygon(
            0 50%,
            1.2rem 0%,
            calc(100% - 1.2rem) 0%,
            100% 50%,
            calc(100% - 1.2rem) 100%,
            1.2rem 100%
          )`,
        }}>
        {children}
      </span>
    </div>
  );
}
