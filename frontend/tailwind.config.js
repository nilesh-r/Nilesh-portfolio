/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
          to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        'spin-slow-reverse': {
          from: { transform: 'translate(-50%, -50%) rotate(360deg)' },
          to: { transform: 'translate(-50%, -50%) rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.1, transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: 0.3, transform: 'translate(-50%, -50%) scale(1.05)' },
        },
        'scan-line': {
          '0%': { top: '-10%', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { top: '110%', opacity: 0 },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 40s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 30s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'scan-line': 'scan-line 3s linear infinite',
      }
    },
  },
  plugins: [],
}

