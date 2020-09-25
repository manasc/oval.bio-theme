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
    proxy: "https://oval.bio.dev",
    host: "oval.bio.dev",
    open: "external",
    https: {
      key: "/Users/Fabian/.config/valet/Certificates/oval.bio.dev.key",
      cert: "/Users/Fabian/.config/valet/Certificates/oval.bio.dev.crt",
    },
    files: ["**/*.php", "dist/*.css", "dist/*.js"],
  })
  .disableSuccessNotifications();
