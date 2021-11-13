module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pink': '#e7004c',
        'btn-hover': '#9f0c3e',
        'like': '#909199',
        'like-hover':'#585a65',
        'orange': '#f84839',
        'l-orange': '#ff7d2a',
        'black-c': '#212227',
        'input-black': '#1e1e23',
        'header-grey': '#3b3c43',
        'footer': '#2e3035',
        'span': '#afafb5',
        'dark-c': '#1c1d21',
        'grey-c': '#2c2d32',
        'yellow-c': '#ffc100',
        'login': 'rgba(255, 255, 255, 0.32)',
      },
      textColor: {
        'pink': '#e7004c',
      },
      spacing:  {
        '01': '0.1rem',
        '02': '0.2rem',
        '9px': '0.5625rem',
        '10px': '0.625rem',
        '11px': '0.6875rem',
        '13px': '0.8125rem',
        '14px': '0.875rem',
        '94rem': '9.4rem',
        '30rem': '30rem',
        '5pc': '5%',
        '10pc': '10%',
        '15pc': '15%',
        '16pc': '16%',
        '25pc': '25%',
        '30pc': '30%',
        '45pc': '45%',
        '35rem': '35rem',
        '35vh': '35vh',
      },
      lineHeight: {
        'h2': '2.6rem',
      },
      fontSize: {
        '9px': '0.5625rem',
        '34px': '2.125rem',
      },
      width: {
        'icon': '2rem',
        '46rem': '4.6rem',
        '460px': '28.75rem',
        '30rem': '30rem',
        '60rem': '60rem',
      },
      height: {
        '31rem': '3.1rem',
        '37rem': '3.7rem',
        '32rem': '32rem',
        '50rem': '50rem',
        '100rem': '100rem',
        '284vh': '284vh',
      },
      screens: {
        'max-lg': {'max': '1199px'},
        // => @media (max-width: 1199px) { ... }
  
        'max-md': {'max': '991px'},
        // => @media (max-width: 991px) { ... }
  
        'max-sm': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
  
        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }
        
        '4k': '2560px',
        // => @media (min-width: 2560px) { ... }
        },
      borderRadius: {
        DEFAULT: '1px',
      },
      boxShadow:  {
        DEFAULT: '0 0 6px 0 rgba(0, 0, 0, 0.3)',
        header: '0 3px 6px 0 rgba(0, 0, 0, 0.2)',
        input: 'inset 0 0 4px 1px rgba(0, 0, 0, 0.1)',
        select: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
        card: '0 0 2px 0 rgba(0, 0, 0, 0.2), 0 0 8px 0 rgba(0, 0, 0, 0.1)',
        search: 'inset 0 0 4px 1px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        'Blinker': ['Blinker', 'sans-serif'],
      },
      backgroundImage:  {
        'header': "url('../media/mobile-background.png')",
        'desktop': "url('../media/desktop-background.png')",
        'sobre-nosotros': "url('../media/mobile-sobre-nosotros-background.png')",
        'sobre-nosotros-desktop': "url('../media/sobre-nosotros-desktop.png')",
        'mid-line': "url('../media/mid-line.png')",
        'line': "url('../media/line.png')",
      },
    },
    fill: {
      current: 'currentColor',
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'active'],
      textColor: ['hover', 'active'],
      divideColor: ['group-hover'],
      borderWidth: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [
    require('tailwind-caret-color')(),
    require('@tailwindcss/line-clamp'),
  ],
}
