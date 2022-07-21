<template>
  <ItemMusicTop :playlist="state.playlist" />
  
</template>

<script>
import { onMounted,reactive } from '@vue/runtime-core';
import{useRoute} from "vue-router";
import {getMusicItemList} from "@/request/api/item.js"

import ItemMusicTop from "@/components/item/ItemMusicTop"
import ItemMusicList from "@/components/item/ItemMusicList"

export default {
    setup(){
        const state=reactive({
            playlist:{}
        });
        onMounted(async()=>{
            try{
                let id =useRoute().query.id;
                console.log(id)
                let res =await getMusicItemList(id)
                console.log(res)
                state.playlist=res.data.playlist
                //防止页面刷新，数据丢失，将数据保存到sessionStorage
                sessionStorage.setItem('itemDetail',JSON.stringify(state))
            }catch(error){
                console.log(error.message)
            }
        })
        return {state}
    },
    components:{
        ItemMusicTop,ItemMusicLis 
    }
}
</script>

<style>

</style>