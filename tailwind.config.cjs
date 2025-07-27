/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in-up-delay-0': 'fade-in-up 0.8s 0s forwards',
        'fade-in-up-delay-1': 'fade-in-up 0.8s 0.1s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.8s 0.2s forwards',
        'fade-in-up-delay-3': 'fade-in-up 0.8s 0.3s forwards',
        'fade-in-up-delay-4': 'fade-in-up 0.8s 0.4s forwards',
        'fade-in-up-delay-5': 'fade-in-up 0.8s 0.5s forwards',
      },
    },
  },
  plugins: [],
};
