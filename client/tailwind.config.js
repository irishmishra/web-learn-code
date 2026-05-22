export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"]
      },
      colors: {
        ink: "#101827",
        ocean: "#0E7C7B",
        amber: "#F2C14E",
        coral: "#EF476F"
      },
      boxShadow: {
        glass: "0 24px 80px rgba(16, 24, 39, 0.14)"
      }
    }
  },
  plugins: []
};
