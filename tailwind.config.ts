import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#fdf8f0',
          100: '#f5e6d3',
          200: '#e8ccaa',
          300: '#d4a574',
          400: '#c28a4e',
          500: '#a06832',
          600: '#7a4f28',
          700: '#5c3a1e',
          800: '#3d2614',
          900: '#2a1a0e',
        },
        maroon: {
          50: '#f9e8e8',
          100: '#f0c2c2',
          200: '#e08e8e',
          300: '#c94f4f',
          400: '#a83232',
          500: '#8b1a1a',
          600: '#6b1414',
          700: '#4a0e0e',
          800: '#2f0909',
          900: '#1a0505',
        },
        gold: {
          50: '#fdf9e7',
          100: '#f9eeb5',
          200: '#f5e183',
          300: '#f0d451',
          400: '#ebc820',
          500: '#d4a017',
          600: '#aa7f12',
          700: '#805e0d',
          800: '#553f08',
          900: '#2b1f04',
        },
        cream: '#faf6f0',
        sand: '#f5efe6',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'pattern-light': "url('/images/pattern-light.png')",
      },
    },
  },
  plugins: [],
};

export default config;
