<template>
  <div class="home">
    <TopNav/>
    <Swi/>
  </div>
</template>

<script>
import TopNav from '../components/home/TopNav.vue'
import Swipe from '../components/home/Swipe.vue'
export default {
    name:"Home",
    components:{
        TopNav,Swipe
    }
}
</script>

<style>

</style>