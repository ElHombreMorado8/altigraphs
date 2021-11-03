module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pink': '#e7004c',
        'black-c': '#212227',
        'dark-c': '#1c1d21',
        'grey-c': '#2c2d32',
      },
      spacing:  {
        '9px': '0.5625rem',
        '10px': '0.625rem',
        '13px': '0.8125rem',
        '14px': '0.875rem',
      },
      with: {
        '10pc': '10%',
      },
      borderRadius: {
        DEFAULT: '1px',
      },
      boxShadow:  {
        DEFAULT: '0 0 6px 0 rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        DEFAULT: ['Blinker', 'sans-serif'],
      },
      backgroundImage:  {
        'header': "url('../media/mobile-background.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
