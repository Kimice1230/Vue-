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

————————————————
版权声明：本文为CSDN博主「黄河爱浪」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u013350495/article/details/123946361

})
