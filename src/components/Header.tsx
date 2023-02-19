import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export default function Header() {
  const { TRANSLATION } = useContext(AppContext);
  return (
    <header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0',
          gap: '1rem',
        }}>
        <h1>joão nascimento</h1>
        <h2>{TRANSLATION.FULL_STACK_DEVELOPER}</h2>
      </div>
    </header>
  );
}
