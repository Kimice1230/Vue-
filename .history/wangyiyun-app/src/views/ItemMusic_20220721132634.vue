<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList/>
</template>

<script>
import { onMounted,reactive } from '@vue/runtime-core';
import{useRoute} from "vue-router";
import {getMusicItemList,getItemList} from "@/request/api/item.js"

import ItemMusicTop from "@/components/item/ItemMusicTop"
import ItemMusicList from "@/components/item/ItemMusicList"

export default {
    setup(){
        const state=reactive({
            playlist:{},
            itemList:{}
        });
        onMounted(async()=>{
            try{
                let id =useRoute().query.id;
                console.log(id)
                //获取歌单详情页
                let res =await getMusicItemList(id)
                console.log(res)
                state.playlist=res.data.playlist
                //获取歌单歌曲
                let result =await getItemList(id);
                console.log(result.id)
                console.log(`https://music.163.com/song/media/outer/url?id=${result.id}.mp3` )
                //防止页面刷新，数据丢失，将数据保存到sessionStorage
                sessionStorage.setItem('itemDetail',JSON.stringify(state))
            }catch(error){
                console.log(error.message)
            }
        })
        return {state}
    },
    components:{
        ItemMusicTop,ItemMusicList
    }
}
</script>

<style>

</style>