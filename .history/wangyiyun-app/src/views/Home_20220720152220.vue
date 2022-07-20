<template>
  <div class="home">
    <TopNav/>
    <Swipe/>
  </div>
</template>

<script>
import TopNav from '../components/home/TopNav.vue'
import SwiperTio from '../components/home/SwipeTop.vue'


export default {
    name:"Home",
    components:{
        TopNav,SwiperTop
    }
}
</script>

<style>

</style>