module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b5f3c',
          600: '#0a5a36'
        },
        accent: {
          DEFAULT: '#f59e0b',
          500: '#f59e0b'
        },
        accent2: '#06b6d4',
        neutral: {
          50: '#f9fafb',
          100: '#f3f6f9'
        },
        card: '#ffffff'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(2,6,23,0.06)'
      }
    }
  },
  plugins: [],
}
