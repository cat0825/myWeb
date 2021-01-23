const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['src/pages/**/*.js', 'src/components/**/*.js', 'src/layouts/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        charcoal: '#303030',
        inherit: 'inherit',
        primary: {
          default: '#0070F3',
          light: '#D3E5FF'
        }
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      fontSize: {
        xxs: '.675rem',
        '3xl': ['1.875rem', '1.25'],
        '4xl': ['2.25rem', '1.25'],
        '5xl': ['3rem', '1.25']
      },
      minHeight: {
        20: '5rem'
      },
      lineHeight: {
        slack: '1.7',
        slacker: '1.75'
      },
      listStyleType: {
        circle: 'circle'
      },
      spacing: {
        '2px': '2px'
      }
    }
  },
  variants: {
    extend: {
      // borderWidth: ['last'],
      margin: ['last'],
      padding: ['first', 'last']
    }
  },
  plugins: []
}