import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        spinAndDescend: {
          '0%': {
            transform: 'translate(-50%, -150vh) rotate(0deg)', // Starts above the screen
            opacity: '0',
          },
          '100%': {
            transform: 'translate(-50%, -50%) rotate(360deg)', // Ends centered
            opacity: '1',
          },
        },
        descend: {
          '0%': {
            transform: 'translateY(-100vh)', // Starts above the screen
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)', // Ends at the original position
            opacity: '1',
          },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'spin-descend': 'spinAndDescend 3s ease-out forwards', // Use 'forwards' to maintain the final state
        descend: 'descend 2s ease-out forwards', // Use 'forwards' to maintain the final state,
        blink: 'blink 1s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
