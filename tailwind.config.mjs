/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      green: "#B9FF66",
      black: "#000000",
      white: "#FFFFFF",
      grey: "#F3F3F3",
    },
    extend: {
      colors: {
        dark: "#191A23",
        hovergrey: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
