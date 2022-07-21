<template>
  <div>歌单详情页</div>
</template>

<script>
import { onMounted,reactive } from '@vue/runtime-core';
import{useRoute} from "vue-router";
import {getMusicItemList} from "@/request/api/item.js"

import ItemMusicTop from "@/components"

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
            }catch(error){
                console.log(error.message)
            }
        })
        return {state}
    }
}
</script>

<style>

</style>