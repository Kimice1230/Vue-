import service from "..";
//获取 
export function getBanner(){
    return service(
        {
        method:"GET",
        url:"/banner?type=2"
    }
    )
}