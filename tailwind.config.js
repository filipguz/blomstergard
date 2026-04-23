/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        cream: '#f7f4ef',
        paper: '#fdfbf7',
        secondary: '#e5e3df',
        // Text
        forest: '#1f2a24',
        'muted-green': '#5f6f63',
        // Accents
        gold: '#c6a96b',
        sage: '#9caf88',
        // Earth
        soil: '#7a5c3e',
        clay: '#cbb8a0',
        // Dark sections
        'rich-forest': '#1a231d',
        // UI
        'soft-gray': '#d6d3cf',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
