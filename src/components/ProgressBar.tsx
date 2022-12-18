import { PIXEL_TO_REM } from '../utils/constants';

export default function ProgressBar({ progress }: { progress: number }) {
  const totalWidth = 8 * PIXEL_TO_REM;
  const absoluteProgress = (totalWidth * progress) / 100;
  const endDivergence = 0.6 * PIXEL_TO_REM;
  const beginProgressConvergence = absoluteProgress - endDivergence;
  const beginTotalWidthConvergence = totalWidth - endDivergence;

  return (
    <div style={{ width: totalWidth, minHeight: '1rem', position: 'relative' }}>
      <div
        style={{
          width: absoluteProgress,
          height: '100%',
          position: 'absolute',
          zIndex: 1,
          backgroundColor: 'var(--accent-1)',
          clipPath: `polygon(
            ${endDivergence}px 0,
            ${beginProgressConvergence}px 0,
            ${absoluteProgress}px 50%,
            ${beginProgressConvergence}px 100%,
            ${endDivergence}px 100%,
            0 50%
          )`,
        }}
      />
      <div
        style={{
          width: totalWidth,
          height: '100%',
          position: 'absolute',
          backgroundColor: 'var(--mid-gray)',
          clipPath: `polygon(
            ${endDivergence}px 0,
            ${beginTotalWidthConvergence}px 0,
            ${totalWidth}px 50%,
            ${beginTotalWidthConvergence}px 100%,
            ${endDivergence}px 100%,
            0 50%
          )`,
        }}
      />
    </div>
  );
}
