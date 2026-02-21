/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}", // articles MDX
  ],
  theme: {
    extend: {
      // --- TEXTURES / BACKGROUNDS ---
      backgroundImage: {
        'noise-paper': "radial-gradient(circle at 0.5px 0.5px, rgba(15, 23, 42, 0.08) 0.5px, transparent 0.5px)",
      },
      backgroundSize: {
        'noise-auto': 'auto',         // pour ta classe bg-noise-auto
        'animated': '400% 400%',      // animé pour gradient
      },

      // --- ANIMATIONS ---
      animation: {
        'gradient': 'gradientBG 8s ease infinite',
      },
      keyframes: {
        gradientBG: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },

      // --- COULEURS (variables CSS) ---
      colors: {
        accent: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },

      // --- TYPOGRAPHY (prose) ---
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: '#1f2937', // gray-800
            h1: { color: '#111827', fontWeight: '800' },
            h2: { color: '#111827', fontWeight: '700', marginTop: '1.75em' },
            h3: { color: '#111827', fontWeight: '600' },
            a: {
              color: '#047857',
              textDecoration: 'none',
              overflowWrap: 'anywhere',
              wordBreak: 'break-word',
            }, // green-600
            'a:hover': { textDecoration: 'underline' },
            code: { backgroundColor: '#f3f4f6', padding: '0.15rem 0.35rem', borderRadius: '0.35rem' },
            blockquote: { borderLeftColor: '#15803d' },
            hr: { marginTop: '2.5rem', marginBottom: '2.5rem' },
            img: { borderRadius: '0.75rem' },
            table: {
              width: '100%',
              display: 'block',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
            },
            th: { whiteSpace: 'normal' },
            td: { whiteSpace: 'normal' },
            thead: { backgroundColor: '#f9fafb' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
