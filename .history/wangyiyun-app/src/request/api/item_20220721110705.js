import service from "..";
//获取歌单详情页数据
export function getMusicList(){
    return service(
        {
        method:"GET",
        url:`/playlist/detail?id=${data}`
    }
    )
}