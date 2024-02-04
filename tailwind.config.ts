import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      strokeWidth: {
        '5': '5px',
        '10': '10px',
      },
      screens: {
        tiny: '380px',
      },
      translate: {
        '0.5': '0.125rem',
      },
      backgroundSize: {
        full: '100% 100%',
      },
    },
  },
  plugins: [],
};
export default config;
