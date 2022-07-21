import service from "..";
//获取轮播图
export function getBanner(){
    return service(
        {
        method:"GET",
        url:"/banner?type=2"
    }
    )
}
//获取好歌单
export function getMusicList(){
    return service(
        {
        method:"GET",
        url:"/personalized?limit=10"
    }
    )
}