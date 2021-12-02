module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['poppins'],
    },
    colors: {
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
