/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["md:mt-10", "md:mt-20, md:!w-1/2"],
  theme: {
    extend: {},
  },
  plugins: [],
};
