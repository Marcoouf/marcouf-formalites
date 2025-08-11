/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- TEXTURES / BACKGROUNDS ---
      backgroundImage: {
        'noise-paper': "url('/textures/paper-fine.png')",
        'hex': "url('/textures/hexagons.svg')",
        'diag': "url('/textures/diagonal-lines.svg')",
      },
      backgroundSize: {
        'noise-auto': 'auto',          // pour ta classe bg-noise-auto
        // optionnels si tu veux des tailles prédéfinies :
        // 'pattern-160': '160px 160px',
        // 'pattern-200': '200px 200px',
      },

      // --- TON ANIMATION EXISTANTE ---
      backgroundSize: {                // on conserve ta clé 'animated'
        'animated': '400% 400%',
      },
      animation: {
        'gradient': 'gradientBG 8s ease infinite',
      },
      keyframes: {
        gradientBG: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },

      // --- COULEURS ---
      colors: {
        accent: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}