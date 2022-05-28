module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Tailwind Defualts
        "2xs": "300px",
        xs: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // Layout/Header
        "h-xl": "812px",
      },
      fontFamily: {
        firacode: "'Fira Code', monospace",
        rubik: "'Rubik', sans-serif",
      },
      backgroundColor: {
        nord16: "#242933",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-nord"), require("tailwind-scrollbar")],
};
