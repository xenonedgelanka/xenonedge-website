module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'x-dark': '#0b0f19',
        'x-accent': '#2563eb',
        'x-btn': '#071427',
        'x-ice': '#e6f7ff',
        'x-light': '#f5f7fb',
        'x-gray-300': '#9aa6bf'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
