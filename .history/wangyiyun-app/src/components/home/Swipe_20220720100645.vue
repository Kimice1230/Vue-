<template>
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
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

<style lang="less">
  #swiperTop{
    .van-swipe{
      width: 100%;
      height: 3rem;
      .van-swipe-item{}
    }
  }
</style>