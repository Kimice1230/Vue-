<template>
  <div class="musicList">
    <div class="musicTop">
        <div class="title">发现好歌单</div>
        <div class="more">查看更多</div>
          
    </div>
    .MusicContent 
  </div>
</template>

<script>
import {getMusicList} from "@/request/api/home.js"
export default {
    data(){
        return {
            musicList:[]
        }
    },
    methods:{
        async getGedan(){
            try{
                let res=await getMusicList();
                console.log(res);
            }catch(error){
                console.log(error.message);
            }
        }
    },
    mounted() {
        this.getGedan();
    },
}
</script>

<style lang="less" scoped>
  .musicList{
    width: 100%;
    height: 5rem;
    padding:0.2rem;
    .musicTop{
        width: 100%;
        height: 0.6rem;
        display:flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        .title{
            font-size: 0.4rem;
            font-weight: 900;
        }
    }
  }
</style>