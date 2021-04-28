const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const path = require("path");

module.exports = {
  output: {
    filename: "app.bundle.js",
    //Simpre va a la raiz
    publicPath: "/"
    /*  path: path.resolve(__dirname, "dist") */
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
	
    new WebpackPwaManifestPlugin({
      //Le pasamos el objeto de configuracion
      name: "Birdgram ",
      shortname: "Birdgram 🐦",
      description:
        "Con Birdgram puedes encontrar fotos de los pajaros mas hermosos",
      background_color: "#fff",
      theme_color: "#b1a",
      //Array iconos de la aplicacion
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          //Le pasamos todos los tamaños que requerimos
          sizes: [16, 32, 48, 96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    // Plugin para el SW- Genera un sw
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          // Le pasamos la url de donde estamos cargando las imagenes, le podemos pasar varias urls
          urlPattern: new RegExp("https://res.cloudinary.com"),
          // Le decimos que primero busque en la cache antes de ir a la red
          handler: "CacheFirst",
          // En las opciones le pasamos el nombre de la cache images
          options: {
            cacheName: "images"
          }
        },
        {
          // Cache para la API
          urlPattern: new RegExp(
            "https://birdgram-server.jorgevelasquez006.now.sh/"
          ),
          // Le decimos que primero valla a la red antes de ir a la cache
          // para tener los datos actulizados
          handler: "NetworkFirst",
          //Le pasamos el nombre de la cache api
          options: {
            cacheName: "api"
          }
        }
      ]
    }),
	
    new FaviconsWebpackPlugin("./src/assets/icon.png")
  ],
  module: {
    rules: [
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "src/assets/[hash].[ext]" }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties"
            ],
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
