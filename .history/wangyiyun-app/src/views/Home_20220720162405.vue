<template>
  <div class="home">
    <TopNav/>
    <SwipeTop/>
    <IconList/>
  </div>
</template>

<script>
import TopNav from '../components/home/TopNav.vue'
import SwipeTop from '../components/home/SwipeTop.vue'
import IconList from ""

export default {
    name:"Home",
    components:{
        TopNav,SwipeTop,IconList
    }
}
</script>

<style>

</style>