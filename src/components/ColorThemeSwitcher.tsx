import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { addAssetsPath } from '../utils/strings';

export default function ColorThemeSwitcher({ toggleTheme }: { toggleTheme: () => void }) {
  const { theme } = useContext(AppContext);

  const icon = theme === 'light' ? 'moon' : 'sun';
  const filter = theme === 'light' ? 'var(--filter-gray)' : 'var(--filter-yellow)';

  return (
    <div style={{ padding: '2rem 0', marginTop: '-0.5rem' }}>
      <input
        type="image"
        className="icon"
        onClick={toggleTheme}
        src={addAssetsPath(`${icon}.svg`)}
        alt={icon.replace('-', ' ')}
        style={{
          filter: 'var(--filter-black) ' + filter,
          height: '2rem',
          minWidth: '2rem',
        }}
      />
    </div>
  );
}
