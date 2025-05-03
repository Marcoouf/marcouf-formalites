/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'animated': '400% 400%',
      },
      animation: {
        'gradient': 'gradientBG 8s ease infinite',
      },
      keyframes: {
        gradientBG: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      colors: {
        accent: 'var(--accent)', // ou 'var(--color-accent)' selon ton choix
      }    },
  },
  plugins: [],
}
