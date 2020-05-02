const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

/* 
    - TODO:
    - change to webpack instead of parcel
    - set up react/es6 
*/
module.exports = {
  ...defaultConfig,
  context: path.resolve(__dirname, "source"),
  entry: {
    blocks: "./blocks/register-blocks.js",
    app: "./scripts/app.js",
    general: "./scripts/general.js",
    styles: "./styles/main.scss"
  },
  // watch: true,
  // watchOptions: {
  //   ignored: [
  //     "node_modules/**",
  //     "template-parts/**",
  //     "vendor/**",
  //     "inc/**",
  //     "js/**",
  //     "dist/**",
  //     "config/**",
  //     "languages/**",
  //     "**/*.php",
  //     "source/blocks/**",
  //     "source/images/**",
  //     "source/php/**",
  //     "source/temp/**",
  //     "php/**"
  //   ]
  // },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".json"],
    ...defaultConfig.resolve
  },
  module: {
    ...defaultConfig.module,

    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    ...defaultConfig.plugins,
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
