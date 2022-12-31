import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { addAssetsPath } from '../utils/strings';

export default function ColorThemeSwitcher({ toggleTheme }: { toggleTheme: () => void }) {
  const { theme } = useContext(AppContext);

  const icon = theme === 'light' ? 'moon' : 'sun';
  const filter = theme === 'light' ? 'var(--mid-gray-filter)' : 'var(--filter-yellow)';

  return (
    <div style={{ padding: '2rem 0 0 2rem' }}>
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
