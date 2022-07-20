<template>
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in state.images" :key="index">
    <img :src="image.pic" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
import {reactive,onMounted} from 'vue'
import {getBanner} from '@/request/api/home.js'
export default {
    name:"Swipe",
    setup() {
     const state=reactive({
      images:[
        'http://img.yzcdn.cn/1.jpg',
        'http://img.yzcdn.cn/2.jpg'
      ]
     }
      
      );
      const axios=require('axios');
      const api='http://localhost:3000/banner?type=2'
      // axios.defaults.withCredentials= true;
      onMounted(async ()=>{
        // axios.get(api).then((res)=>{
        //   console.log(res);
        //   state.images=res.data.banners;
        //   console.log(state.images)
        // })
        let res=await getBanner();
        console.log(res)
      })
      return{state}
    }
  }
 
</script>

<style lang="less">

    .van-swipe{
      width: 100%;
      height: 3rem;
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
</style>