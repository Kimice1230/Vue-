<template>
    <div class="itemMusicTop">
        <div class="itemMusicTop">
            <div class="itemLeft">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-caidan"></use>
                </svg>
                <span>歌单</span>
            </div>
            <div class="itemRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-caidan"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-caidan"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup(props){
        console.log(props)
    },
    props:['playlist']
}
</script>

<style lang="less" scoped>
    .item
</style>