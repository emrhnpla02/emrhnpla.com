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
        // AboutMe/Terminal
        "t-xl": "1164px",
        // AboutMe/Links
        "l-xl": "1004px",
        // AboutMe/Alternate
        "alt-xl": "800px",
        "alt-lg": "624px",
        "alt-md": "354px",
        // Skills
        "sk-xl": "1258px",
        "sk-lg": "934px",
        "sk-md": "548px",
        // Projects
        "p-xl": "1228px",
        "p-lg": "1030px",
        "p-md": "716px",
        "p-sm": "500px",
        // Contact
        "c-xl": "1500px",
        "c-lg": "1432px",
        "c-md": "892px",
        "c-sm": "500px",
      },
      fontFamily: {
        firacode: "'Fira Code', monospace",
        rubik: "'Rubik', sans-serif",
        iflower: "'Indie Flower', cursive",
      },
      colors: {
        session: "#14F473",
        protonmail: "#1B1340",
      },
      backgroundColor: {
        nord16: "#242933",
      },
      height: {
        88: "22rem",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-nord"), require("tailwind-scrollbar")],
};
