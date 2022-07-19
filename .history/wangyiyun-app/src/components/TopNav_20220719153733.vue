<template>
  <div class="topNav">
    <div><svg class="icon"></svg></div>
     
    <div class="topContent">
        <span>我的</span>
        <span>发现</span>
        <span>云村</span>
        <span>视频</span>
     </div>

    <div><svg class="icon"></svg>
  </div>
</template>

<script>
export default {
    name:"topNav",
}
</script>

<style lang="less" scoped>
.topNav{
    width:100%;
    padding: 10px;
    display:flex;   
    justify-content: space-between;
    .topConten{
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        font-size: .36rem;
    }
}
    
</style>