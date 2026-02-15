module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'light': '#aed581',
          'primary': '#9ccc65',
          'medium': '#8bc34a',
          'dark': '#7cb342',
          'darker': '#558b2f',
          'bg': '#e8f5e9',
          'bg-alt': '#dcedc8',
        },
        dark: '#1a1a1a',
        body: '#666666',
      },
      fontFamily: {
        headline: ['"Urbanist"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
