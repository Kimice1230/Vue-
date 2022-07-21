<template>
  <div class="home">
    <TopNav/>
    <SwipeTop/>
    <IconList/>
    <MusicList/>
  </div>
</template>

<script>
import TopNav from '../components/home/TopNav.vue'
import SwipeTop from '../components/home/SwipeTop.vue'
import IconList from '../components/home/IconList.vue'
import MusicList

export default {
    name:"Home",
    components:{
        TopNav,SwipeTop,IconList
    }
}
</script>

<style>
  
</style>