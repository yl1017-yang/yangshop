const { defineConfig } = require('@vue/cli-service');
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'/yangshop',  // webpack의 output.publicPath 대신 사용
  //outputDir:'./docs',  // webpack의 output.path 대신 사용
  outputDir: '../backend/public',
  devServer: { 
    proxy: { 
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  chainWebpack : config => {
    // config를 통해 chaining방식으로 옵션 수정 가능
  },

  //@ 경로설정 https://imkh.dev/vue-alias-path/
  // webpack 추가 설정 merge 가능
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

  css: {
    loaderOptions: {
      scss: {
		    additionalData: ` 
          @import "@styles/modules.scss"; 
        `,
      },
    },
  },

})
