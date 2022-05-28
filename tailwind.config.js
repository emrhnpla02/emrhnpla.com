module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
       // Layout/Header
        "h-xl":"812px",
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
