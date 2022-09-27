const path = require("path");
//const webpack = require('webpack');

module.exports = {
  transpileDependencies: true,
  outputDir:'./docs',
  publicPath:'/yangshop',

  //@ 경로설정 https://imkh.dev/vue-alias-path/
  configureWebpack: {
    resolve: {
      alias: {
        "@node_modules": path.resolve(__dirname, "./node_modules"),
        "@src": path.resolve(__dirname, "./src"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@configs": path.resolve(__dirname, "./src/configs"),
        "@styles": path.resolve(__dirname, "./src/styles"),
      }
    }
  },

  // css: {
  //   loaderOptions: {
  //     scss: {
	// 	    additionalData: ` @import "@styles/modules.scss"; `,
  //     },
  //   },
  // },

}
