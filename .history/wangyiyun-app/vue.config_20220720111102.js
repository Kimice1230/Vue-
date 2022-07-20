const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  proxyTable:{
    '/api:':{
      target:"http://127.0.0.1:3000"
      // 开启跨域
      
    }  
  }

})
