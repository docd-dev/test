import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["PlusJakartaSans, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        akira: ["var(--font-akira)"],
        barlow: ["var(--font-barlow)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "slow-bounce-emoji-cool": {
          "0%, 100%": { transform: "translate(-10%,-10%)" },
          "50%": { transform: "translate(0)" },
        },
        "slow-bounce-emoji-surprised": {
          "0%,to": {
            transform: "translate(10%,10%)",
          },
          "50%": {
            transform: "translate(0)",
          },
        },
      },
      animation: {
        "spin-clockwise": "spin-clockwise 10s linear infinite",
        "spin-anticlockwise": "spin-anticlockwise 8s linear infinite",
      },
      screens: {
        "1.5xl": "1500px",
        "3xl": "1800px",
        xs: "540px",
      },
    },
  },
  plugins: [],
};
export default config;
