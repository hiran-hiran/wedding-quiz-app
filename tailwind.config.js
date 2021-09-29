module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        m: '"M PLUS Rounded 1c"',
      },
      colors: {
        fandango: "#fd5291",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
