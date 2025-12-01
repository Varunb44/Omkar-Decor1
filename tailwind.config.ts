import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: {
          50: '#fffef5',
          100: '#fffce8',
          200: '#fff8c4',
          300: '#fff094',
          400: '#ffe05c',
          500: '#ffd700',
          600: '#e6c200',
          700: '#cc9900',
          800: '#b38600',
          900: '#997300',
        },
      },
    },
  },
  plugins: [],
};
export default config;







