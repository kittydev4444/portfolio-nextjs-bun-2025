import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/globals.css",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        bubblegum: ['"Bubblegum Sans"', "cursive"],
        nunito: ['"Nunito"', "sans-serif"],
      },
      colors: {
        kitty: {
          dark: "#171e27",
          darker: "#212b38",
          light: "#F8F8F2",
          yellow: "#FFFFA5",
          orange: "#ffcb6b",
          "orange-light": "#FFB86C",
          "orange-pale": "#ffd580",
          "green-pale": "#caffb5",
          green: "#94CF95",
          "green-dark": "#79c07b",
          blue: "#6EC1D6",
          "blue-light": "#9dcaf8",
          pink: "#f8b1c8",
          "pink-hot": "#F692B2",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        jiggle: "jiggle 2s ease-in-out infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "bubble-float": "bubble-float 8s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        jiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "bubble-float": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-30px) scale(1.05)" },
        },
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(to right, rgba(105, 193, 214, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(105, 193, 214, 0.1) 1px, transparent 1px)",
        "cyber-grid-dark":
          "linear-gradient(to right, rgba(105, 193, 214, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(105, 193, 214, 0.2) 1px, transparent 1px)",
      },
    },
  },
  plugins: [
    heroui(),
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".neon-yellow": {
          textShadow: `0 0 5px ${theme("colors.kitty.yellow")}, 
                       0 0 10px ${theme("colors.kitty.yellow")}, 
                       0 0 15px ${theme("colors.kitty.yellow")}`,
        },
        ".neon-text": {
          textShadow: `0 0 5px ${theme("colors.kitty.pink-hot")}, 
                       0 0 10px ${theme("colors.kitty.pink-hot")}, 
                       0 0 15px ${theme("colors.kitty.pink-hot")}`,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
