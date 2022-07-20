<template>
  <div class="home">
    <TopNav/>
    <Swipe/>
  </div>
</template>

<script>
import TopNav from '../components/home/TopNav.vue'
import Swipe from '../components/home/SwiperTop.vue'


export default {
    name:"Home",
    components:{
        TopNav,Swipe
    }
}
</script>

<style>

</style>