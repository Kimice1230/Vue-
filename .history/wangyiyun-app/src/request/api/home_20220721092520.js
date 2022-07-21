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
//获取 