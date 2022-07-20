const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  proxyTable:{
    '/api:'{
      target:""
    }  
  }

})
