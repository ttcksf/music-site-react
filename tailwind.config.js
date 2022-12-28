// content,extendをカスタマイズ
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // カラーパレットの名前は使えない
        main: "#02b875",
        sub: "#212121",
      },
      screens: {
        sm: { max: "767px" },
        md: "800px",
      },
    },
  },
  plugins: [],
};
