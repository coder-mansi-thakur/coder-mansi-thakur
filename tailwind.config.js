/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#ccc',
        'black': '#000000',
        'regal-blue': '#243c5a',
        'lightTheme-orange-blur': '#d6d3d0',
        'lightTheme-orange': '#f9660b',
        'primary-background-green': '#023430',
      }
    },
  },
  plugins: [],
}

