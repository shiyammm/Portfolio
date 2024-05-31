import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black-1': '#1d1d1f',
        'black-2': '#121315',
        cyan: '#37EBA9',
        violet: '#7A8FFF',
      },
      fontFamily: {
        acme: ['var(--font-acme)'],
        'circular-book': ['var(--font-circular-book)'],
        'circular-medium': ['var(--font-circular-medium)'],
        'neue-montreal': ['var(--font-neue-montreal)'],
        'roslindale-display': ['var(--font-roslindale-display)'],
        'gt-alpina': ['var(--font-gt-alpina)'],
        'bebasNeue-regular': ['var(--font-bebasNeue-regular)'],
        'canopee-regular': ['var(--font-canopee-Regular)'],
      },
    },
  },
  plugins: [],
};
export default config;
