<template>
  <div class="home">
    <TopNav/>
    <test/>
  </div>
</template>

<script>
import TopNav from '../components/home/TopNav.vue'
import test from '../components/home/test.vue'
export default {
    name:"Home",
    components:{
        TopNav,test
    }
}
</script>

<style>

</style>