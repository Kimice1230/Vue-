<template>
  <div>歌单详情页</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
imm
export default {
    setup(){
        onMounted(async()=>{
            try{
                let id =userRoute().query.id;
                console.log(id)
                let res =await getMusicItemList(id)
                console.log(res)
            }catch(error){
                console.log(error.message)
            }
        })
    }
}
</script>

<style>

</style>