import { ExternalLink } from '.';
import { GITHUB } from '../utils/constants';

export function Footer() {
  return (
    <footer className="mt-auto text-center">
      Made with ❤️ by <ExternalLink href={GITHUB}>João</ExternalLink>
    </footer>
  );
}
