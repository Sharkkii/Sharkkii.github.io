const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./docs/"),
    filename: "bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./docs")
    }
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm-bundler.js",
      "@": path.resolve(__dirname, "./src/")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            // global resources of SCSS
            options: {
              resources: [
                "./src/assets/css/resources.scss",
                "./src/assets/css/default.scss",
                "./src/assets/css/mixin.scss",
                "./src/assets/css/page.scss",
                "./src/assets/css/const.scss"
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: "vue-style-loader!css-loader!sass-loader"
          }
        }
      },
      {
        test: /\.png$/i,
        use: [
          "file-loader"
        ],
      }
      // {
      //   test: /\.js$/,
      //   loader: ""
      // }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}