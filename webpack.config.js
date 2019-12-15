var path = require("path")
module.exports = {
   entry: "./src/index.tsx",
   output: {
      path: path.resolve(__dirname, "build"),
      filename: "index.js",
      libraryTarget: "commonjs2",
   },
   module: {
      rules: [
         {
            test: /\.ts|tsx$/,
            include: path.resolve(__dirname, "src"),
            exclude: /(node_modules|bower_components|build)/,
            use: {
               loader: "ts-loader",
            },
         },
      ],
   },
   resolve: {
      extensions: [".tsx", ".ts", ".js"],
   },
   mode: "production",
   externals: {
      react: "react",
      "styled-components": {
         commonjs: "styled-components",
         commonjs2: "styled-components",
         amd: "styled-components",
      },
   },
}
