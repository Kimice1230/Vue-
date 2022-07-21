<template>
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
    .itemMusicTop{
        max-width: 100%;
        height: 1rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem;
        .itemLeft,.itemRight{
            width: 25%;
            height: 100%;
            display:flex;
            justify-content: space-between;
        }
    }
</style>