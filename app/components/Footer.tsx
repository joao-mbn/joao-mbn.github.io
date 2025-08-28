import { ExternalLink } from '.';
import { GITHUB } from '../utils/constants';

export function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-t-slate-800 p-2 text-center">
      Made by <ExternalLink href={GITHUB}>João</ExternalLink>
    </footer>
  );
}
