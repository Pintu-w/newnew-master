/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'general-sans': ['GeneralSans'],
        general: ['General Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}