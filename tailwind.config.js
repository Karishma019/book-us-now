/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E2022",
        secondary: "#989090",
        red: "#CF2D2D",
        grey: "#B0BABF",
        bgPrimary: "#ffffff",
      },

      backgroundImage: {
        showCase: "url('/src/assets/Banner.svg')",
      },

      fontFamily: {
        sans: [
          '"Inter var", sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss03"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "-xl": { max: "1080px" },
      // => @media (max-width: 1279px) { ... }

      "-lg": { max: "1007px" },
      // => @media (max-width: 1023px) { ... }

      "-md": { max: "824px" },
      // => @media (max-width: 767px) { ... }

      "-sm": { max: "668px" },
      // => @media (max-width: 668px) { ... }
    },
  },
  screens: {
    "-xs": { max: "475px" },
  },
  plugins: [],
};
