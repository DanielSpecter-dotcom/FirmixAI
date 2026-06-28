/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        guiño: {
          '0%, 92%, 100%': { transform: 'scaleY(0)' },
          '97%': { transform: 'scaleY(1.1)' },
        },
        brillo: {
          '0%, 92%': { transform: 'scale(0)', opacity: '0' },
          '97%': { transform: 'scale(2)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'blink-one-eye': 'guiño 8s infinite ease-in-out',
        'sparkle': 'brillo 8s infinite ease-in-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      colors: {
        navy: {
          50:   '#f4f6fa',
          100:  '#e8edf5',
          200:  '#cbd7e9',
          300:  '#9fb5d7',
          400:  '#6d8dc0',
          500:  '#4a6da7',
          600:  '#385489',
          700:  '#2f446f',
          800:  '#1b263b',
          850:  '#131c2e',
          900:  '#0d1117',
          950:  '#0e131b',
          1000: '#0e131b',
        },
        amber: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        emerald: {
          50:  '#ecfdf5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      fontFamily: {
        sans:    ['Outfit', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-amber': '0 0 15px -3px rgba(245, 158, 11, 0.4)',
        'glow-navy':  '0 0 20px -5px rgba(56, 84, 137, 0.5)',
      },
      spacing: {
        '4.5': '1.125rem',
      },
      width: {
        '4.5': '1.125rem',
      },
      height: {
        '4.5': '1.125rem',
      },
    }
  },
  plugins: [],
}
