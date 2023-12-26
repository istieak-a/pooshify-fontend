/** @type {import('tailwindcss').Config} */
import { tailwindConfig } from '@storefront-ui/react/tailwind-config';

export default {
  presets: [tailwindConfig],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@storefront-ui/react/**/*.{js,mjs}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
