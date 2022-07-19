function remSize(){
    //获取设备的宽度
    var deviceWidth =document.clientWidth||window.innerWidth
    if (deviceWidth>=750){
        deviceWidth=750
    } 
    if(deviceWidth<=320){
        deviceWidth=320
    }
    //750 --> 1rem==100px ,375px-->1rem==50px
    document.documentElement.style.fontSize=(deviceWidth/7.5)+'px'
    //设置字体大小
    document.querySelector


}
window.onresize=function(){

}