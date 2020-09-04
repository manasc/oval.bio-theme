const mix = require("laravel-mix");

mix
  .js("source/scripts/general.js", "dist/")
  .react("source/scripts/app.js", "dist/")
  .sass("source/styles/main.scss", "dist/styles.css", {
    sassOptions: {
      outputStyle: "nested",
    },
    implementation: require("node-sass"),
  })
  .options({
    processCssUrls: false,
    postCss: [
      require("tailwindcss"),
      require("autoprefixer"),
      // require("cssnano")
    ],
  })
  .copy("source/images/**/*.*", "dist/images/")
  .browserSync({
    proxy: "https://oval.bio.test",
    host: "oval.bio.test",
    open: "external",
    https: {
      key: "/Users/manas/.config/valet/Certificates/oval.bio.test.key",
      cert: "/Users/manas/.config/valet/Certificates/oval.bio.test.crt",
    },
    files: ["**/*.php", "dist/*.css", "dist/*.js"],
  })
  .disableSuccessNotifications();
