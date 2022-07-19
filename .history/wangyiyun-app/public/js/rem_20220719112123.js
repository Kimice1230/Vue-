function remSize(){
    //获取设备的宽度
    var deviceWidth =document.clientWidth||window.innerWidth
    if (deviceWidth>=750){
        deviceWidth=750
    } 
    if(deviceWidth<=320){
        deviceWidth=320
    }
    document.documentElement.style.fontSize=(deviceWidth/7.5)+'px'


}
window.onresize=function(){

}