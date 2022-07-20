const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
/* 开发环境配置 */
devServer:{
    /* 代理目录 */
    proxy:{
        '^/api':{
            target:'http://127.0.0.1:8081',
            ws: true,
            changeOrigin: true
        }
    }



})
