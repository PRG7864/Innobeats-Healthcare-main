/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: "#2459a8",
          navy: "#153b78",
          green: "#009b5a",
          yellow: "#f6bd21",
          red: "#dd3c31",
          ink: "#102033",
          muted: "#637181",
          wash: "#f4f8fc",
          orange: "#ff6600",
          "soft-green": "#eaf8f1",
          "soft-yellow": "#fff6d9",
        }
      },
      boxShadow: {
        premium: "0 22px 70px rgba(21, 59, 120, 0.14)",
        card: "0 10px 30px -10px rgba(21, 59, 120, 0.1)",
        hover: "0 20px 40px -15px rgba(21, 59, 120, 0.15)",
      }
    },
  },
  plugins: [],
}
