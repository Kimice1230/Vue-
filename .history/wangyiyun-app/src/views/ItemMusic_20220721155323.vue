<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList :itemList="state.itemList"/>
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
            itemList:[],

        });
        onMounted(async()=>{
            try{
                let id =useRoute().query.id;
                console.log(id);

                //获取歌单详情页
                let res =await getMusicItemList(id);
                console.log(res);
                state.playlist=res.data.playlist;


                console.log(res.data.privileges[0].id)   
                // let songs =res.data.privileges;
                console.log(res.data.playlist.tracks[0].name)
                
                //获取歌曲
                state.itemList=res.data.playlist.track;
                console.log(state.itemList);
                //获取歌曲id
                // let songsId=[]   
                // for (let id in songs){
                //     songsId.push(songs[id].id);
                // }
                // console.log(songsId);
                    
                //获取歌曲的url
                // let result=await getItemList(songsId);
                // // console.log(result.data.data[0])
                // let itemList=[]
                // for(let i=0;i<10;i++){
                //     itemList.push(result.data.data[i].url);}
                // // console.log(itemList)
                // state.itemList=itemList;
                // console.log(state.itemList)
                
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