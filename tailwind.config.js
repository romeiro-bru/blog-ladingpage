/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A1B1F',
        'primary-base-low': '#5F6063',
        'primary-base-lowest': '#B8B8B8',
        'primary-neutral-high': '#323947',
        'primary-neutral-low': '#7B7C7D',
        'primary-neutral-lowest': '#B1B2B4',
        'surface': '#121212',
        'base': '#FFFFFF',
        'back': '#ECECEC',
        'neutral': '#F5F6F8',
        'surface-high': '#D0D0D0',
        'surface-low': '#888888'
      },     
    screens: {
      'sm': '640px',
      'md': '990px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: 'Poppins'
    }
  }
  },
  plugins: [],
}