/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#28CB8B',
        secondary: '#263238',
        info: '#2194f3',
        neutral: {
          black: '#263238',
          d_grey: '#4D4D4D',
          grey: '#717171',
          l_grey: '#89939E',
          grey_blue: '#ABBED1',
          silver: '#F5F7FA',
          white: '#FFFFFF',
        },
        success: '#2E7D31',
        warning: '#FBC02D',
        error: '#E53835',
        shades: {
          1: '#43A046',
          2: '#388E3B',
          3: '#237D31',
          4: '#1B5E1F',
          5: '#103E13',
        },
        tints: {
          1: '#66BB69',
          2: '#81C784',
          3: '#A5D6A7',
          4: '#C8E6C9',
          5: '#E8F5E9',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        h1: ['64px', { lineHeight: '76px', fontWeight: '600' }],
        h2: ['36px', { lineHeight: '44px', fontWeight: '600' }],
        h3: ['28px', { lineHeight: '36px', fontWeight: '600' }],
        h4: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        body1: ['18px', { lineHeight: '28px', fontWeight: '400' }],
        body2: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        body3: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        body4: ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
      boxShadow: {
        sm: '0 2px 4px rgba(171, 190, 209, 0.6)',
        md: '0 4px 6px rgba(171, 190, 209, 0.4)',
        lg: '0 6px 8px rgba(171, 190, 209, 0.3)',
        xl: '0 8px 16px rgba(171, 190, 209, 0.4)',
        '2xl': '0 16px 32px rgba(171, 190, 209, 0.3)',
      },
    },
  },
  plugins: [],
};
