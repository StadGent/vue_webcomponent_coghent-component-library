module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xxs: '.7rem'
    },
    fontFamily: {
      body: ['poppins'],
    },
    colors: {
      neutral: {
        0: '#FFFFFF',
        10: '#FAFBFC',
        20: '#F4F5F7',
        30: '#EBECF0',
        40: '#DFE1E6',
        50: '#C1C7D0',
        60: '#B3BAC5',
        70: '#A5ADBA',
        80: '#97A0AF',
        90: '#8993A4',
        100: '#7A869A',
        200: '#6B778C',
        300: '#5E6C84',
        400: '#505F79',
        500: '#42526E',
        600: '#344563',
        700: '#253858',
        800: '#172B4D',
        900: '#091E42',
      },
      background: {
        light: '#f6f5f1',
        medium: '#f0ede6',
        dark: '#ddd7c6',
      },
      accent: {
        yellow: '#fdc20b',
        green: '#02a77f',
        purple: '#b65099',
      },
      text: {
        white: '#ffffff',
        black: '#000000',
        dark: '#2d242a',
        red: '#fa1c1c',
      },
      tag: {
        neutral: '#e0dfdf',
        selected: '#2d242a',
      },
    },
    extend: {
      height: {
        large: '80vh',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 3px 4px 0 rgba(0, 0, 0, 0.4)',
        none: 'none',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
