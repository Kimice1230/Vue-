<template>
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img />
  </van-swipe-item>
</van-swipe>
</template>

<script>
export default {
    name:"Swipe",
    data() {
    return {
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }  
}
</script>

<style>

</style>