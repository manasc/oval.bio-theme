const mix = require("laravel-mix");

let mixOptions;

if (process.env.NODE_ENV === "development") {
  // if in dev mode
  mixOptions = {
    processCssUrls: false,
    purifyCss: false,
    postCss: [require("tailwindcss"), require("autoprefixer")],
    cssNano: false,
  };
} else {
  // if in production mode
  mixOptions = {
    processCssUrls: false,
    purifyCss: false,
    postCss: [require("tailwindcss"), require("autoprefixer")],
    cssNano: {
      discardComments: true,
    },
  };
}

mix
  .js("source/scripts/general.js", "dist/")
  .react("source/scripts/app.js", "dist/")
  .sass("source/styles/main.scss", "dist/styles.css", {
    sassOptions: {
      outputStyle: "nested",
    },
    implementation: require("node-sass"),
  })
  .options(mixOptions)
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
