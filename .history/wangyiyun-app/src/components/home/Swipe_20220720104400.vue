<template>
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
import axios from 'axios'
import {mounted} from 'vue'
export default {
    name:"Swipe",
    data() {
     const images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  },
  mounted () {
    axios
      .get('http://localhost:8080/banner?type=2')
      .then(res => {
        console.log(res);
      })
  }
}
</script>

<style lang="less">
  #swiperTop{
    .van-swipe{
      width: 100%;
      height: 1rem;
      .van-swipe-item{
        padding:0 0.2rem;
        img{
          width:100%;
          height: 100%;
          border-radius: 0.2rem;
        }
      }
      .van-swipe_indicator--active{
        background-color: rgb(219,130,130);
      }
      
    }
  }
</style>