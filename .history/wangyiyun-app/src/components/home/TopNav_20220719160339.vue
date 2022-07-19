<template>
  <div class="TopNav">
    <div><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-caidan"></use>
</svg></div>
     
    <div class="topContent">
        <span>我的</span>
        <span>发现</span>
        <span>云村</span>
        <span>视频</span>
     </div>

    <div>
      <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-sousuo"></use>
</svg></div>
  </div>
</template>

<script>
export default {
    name:"TopNav",
}
</script>

<style lang="less" scoped>
.TopNav{
    width:100%;
    padding: 10px;
    display:flex;   
    justify-content: space-between;
    .topContent{
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        font-size: .36rem;
    }
}
    
</style>