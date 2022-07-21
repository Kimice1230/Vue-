import service from "..";
//获取歌单详情页数据
export function getMusicItemList(data){
    return service(
        {
        method:"GET",
        url:`/playlist/detail?id=${data}`
    }
    )
}
//获取歌单所有歌曲
export function getMusicItemList(data){
    return service(
        {
        method:"GET",
        url:`/song/url`
    }
    )
}