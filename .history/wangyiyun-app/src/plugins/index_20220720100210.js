import { Swipe, SwipeItem,Button,Lazyload} from 'vant'
let plugins=[
    Swipe, SwipeItem,Button,Lazyload
]
export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}