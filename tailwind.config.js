module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3399f2",
          "secondary": "#131677",
          "accent": "#f28c33",
          "neutral": "#c9bda0",
          "base-100": "#ffff",
          "info": "#ffbb00",
          "success": "#39f233",
          "warning": "#ffbb00",
          "error": "#a51a1e",
          },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}