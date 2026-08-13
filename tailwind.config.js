/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 ADD THIS LINE
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        konvag: {
          dark: '#003d2e',
          accent: '#ff8c00',
          light: '#fff3e0',
          hover: '#e67a00',
        },
      },
    },
  },
  plugins: [],
}