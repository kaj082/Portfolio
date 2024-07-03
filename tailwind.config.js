/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1600px" },
      lg: { max: "1199px" },
      md: { max: "991px" },
      sm: { max: "767px" },
      xs: { max: "575px" },
      xxs: { max: "480px" },
      mxl: { raw: "(min-width: 1921px)" },
      hmd: { raw: "(max-height: 800px)" },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "576px",
        md: "767px",
        lg: "991px",
        xl: "1199px",
        "2xl": `1600px`,
      },
    },
    extend: {
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      fontFamily: {
        jakarta: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkgray: "#212121",
        brand: "#000088",
      },
      keyframes: {
        rotate: {
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rippleEffect: {
          "0%": {
            transform: "scale(1)",
            opacity: 1,
          },
          "50%": {
            transform: "scale(10)",
            opacity: 0.375,
          },
          "100%": {
            transform: "scale(35)",
            opacity: 0,
          },
        },
      },
      animation: {
        rippleEffect: "0.9s ease 1 forwards rippleEffect",
      },
    },
  },
  plugins: [],
};
