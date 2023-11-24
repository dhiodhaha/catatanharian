/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        barberry: {
          50: "hsl(67, 75%, 95%)",
          100: "hsl(67, 80%, 88%)",
          200: "hsl(65, 81%, 77%)",
          300: "hsl(63, 81%, 64%)",
          400: "hsl(61, 79%, 50%)",
          500: "hsl(58, 77%, 47%)",
          600: "hsl(53, 79%, 40%)",
          700: "hsl(48, 75%, 33%)",
          800: "hsl(44, 66%, 29%)",
          900: "hsl(41, 59%, 26%)",
          950: "hsl(40, 69%, 14%)",
        },
      },
    },
  },
  plugins: [],
};
