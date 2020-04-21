const fs = require("fs");
const vf = require("vinyl-fs");
const chalk = require("chalk");

// bundler
const browserify = require("browserify");
const babelify = require("babelify");
const Parcel = require("parcel-bundler");

// js stuff
const babel = require("@babel/core");
const concat = require("concat");
const uglify = require("uglify-js");

// css
const postcss = require("postcss");
const sass = require("postcss-node-sass");
const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss")(process.env.TAILWIND_CONFIG);
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

// server
// server
const browserSync = require("browser-sync").create();
const bundler = new Parcel("./source/js/main.js", {
  outDir: "./dist",
  outFile: "app.js",
  bundleNodeModules: true,
  detailedReport: true,
  https: {
    key: process.env.CERT_KEY,
    cert: process.env.CERT,
  },
  autoInstall: true,
});
bundler.on("bundled", reload);

// Log Setup
function errorMsg() {
  console.log(chalk.red(msg));
}

function successMsg() {
  console.log(chalk.green(msg));
}

// function babelTrans

function reload() {
  browserSync.reload();
}

function cssTask() {
  var scss = fs.readFileSync(process.env.SASS);

  // css process
  postcss([
    sass(),
    tailwindcss,
    autoprefixer,
    // purgecss({
    //   content: ["**/*.php", "source/js/**/*.{js,jsx}"],
    //   defaultExtractor: (content) => content.match(/[\w-/:]*[\w-/:]/g) || [],
    // }),
    // cssnano,
  ])
    .process(scss, {
      parser: require("postcss-scss"),
      from: process.env.SASS,
      to: process.env.DIST_CSS,
    })
    .then((result) => {
      console.log(chalk.blue("PostCSS Ran!"));

      const { css } = result;

      // concat files
      concat([
        "node_modules/node-waves/dist/waves.min.css",
        "node_modules/react-tippy/dist/tippy.css",
      ]).then((newCSS) => {
        newCSS += css;

        fs.writeFile(process.env.DIST_CSS, newCSS, function () {
          vf.src(process.env.DIST_CSS).pipe(browserSync.stream());
          console.log(chalk.red("CSS Compiled!"));
        });
      });
    });
}

function jsTask() {
  bundler.bundle();
}

function prerequisites() {
  cssTask();
  jsTask();
}

function main() {
  browserSync.init(
    {
      proxy: process.env.URL,
      host: process.env.HOST,
      open: "external",
      port: 8000,
      https: {
        key: process.env.CERT_KEY,
        cert: process.env.CERT,
      },
    },
    prerequisites
  );

  browserSync.watch("./source/styles/**/*.scss").on("change", cssTask);
  browserSync.watch(process.env.TAILWIND_CONFIG).on("change", cssTask);
  browserSync.watch("./source/js/**/*.{js,jsx}").on("change", jsTask);
  browserSync.watch("./**/*.php").on("change", reload);
}

main();
