import styles from './Background.module.css';

export function Background() {
  return (
    <>
      <div className={'fixed -z-20 h-screen min-w-[100vw] ' + styles.background} />
      <div className={'fixed -z-10 h-screen min-w-[100vw] ' + styles.backgroundHexagons} />
    </>
  );
}
