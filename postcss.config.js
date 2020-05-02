module.exports = {
  parser: require("postcss-scss"),
  plugins: [
    require("postcss-node-sass"),
    require("postcss-import"),
    require("tailwindcss")("./config/tailwind.config.js"),
    require("autoprefixer"),
    require("cssnano")
  ]
};
