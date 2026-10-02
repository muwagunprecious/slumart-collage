/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00',
        secondary: '#E56000',
        tertiary: '#FFF7ED',
        surface: '#ffffff',
        background: '#FFF7ED',
        error: '#d92d20',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen-Sans',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      spacing: {
        xs: '2px',
        sm: '12px',
        md: '20px',
        lg: '30px',
        xl: '48px',
      },
    },
  },
  plugins: [],
};
