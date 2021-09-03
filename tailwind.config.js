module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      DarkModeElement: "hsl(209, 23%, 22%)",
      DarkModeBg: "hsl(207, 26%, 17%)",
      DarkModeText: "hsl(0, 0%, 100%)",
      LightModeText: "hsl(200, 15%, 8%)",
      LightModeInput: "hsl(0, 0%, 52%)",
      LightModeBg: "hsl(0, 0%, 95%)",
      LightModeElement: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
