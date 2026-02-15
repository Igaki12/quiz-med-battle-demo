/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0b0b14',
          800: '#121429',
          700: '#1b2145'
        },
        emerald: {
          400: '#2fe3b3',
          500: '#1fbf93'
        },
        gild: {
          200: '#f7e2a8',
          400: '#d7b66e',
          600: '#a57b3e'
        },
        burgundy: {
          500: '#7b1d3a'
        }
      },
      fontFamily: {
        display: ['"Cinzel"', '"Noto Serif JP"', 'serif'],
        body: ['"Noto Serif JP"', 'serif']
      },
      boxShadow: {
        glow: '0 0 24px rgba(46, 227, 179, 0.35)',
        gild: '0 10px 30px rgba(165, 123, 62, 0.35)'
      }
    }
  },
  plugins: []
};
