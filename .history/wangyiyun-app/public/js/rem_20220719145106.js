function remSize(){
    var deviceWidth=document.documentElement.clientwidth || window.innerWidth
    if (deviceWidth>=750){
        deviceWidth =750
    }
    if (deviceWidth<=320){
        deviceWidth =320
    }
}