import Home from '../views/Home';
import My from '../views/My';
import Car from '../views/Car';
import Clearance from '../views/Clearance';
import Category from '../views/Category';

import Grap from './Category/Grap.js'
import Two from "./Category/Two"


// 商品详情
import Shop from "../views/Detail/Shop"


// My
import Login from "../views/My/Login"
import free from "../views/My/free"
import order from "../views/My/Order"
import exchangecode from "../views/My/Exchangecode"
import toExchange from "../views/My/ToExchange"
import bonus_list from "../views/My/Bonus_list"
import history from "../views/My/History"
import initwallet from "../views/My/Initwallet"
import collect from "../views/My/Collect"
import address from "../views/My/Address"
import usersafe from "../views/My/Usersafe"

import Graps from "../router/Category/Grap.js";
import Detail from '../views/Detail';


//首页的
import Gooddetail from "../components/common/gooddetail.js";
import Search from "../components/common/search.js";
import SecondBuy from "../views/Home/SecondBuy.js"




export default [
    {
        path: "/",
        component: Home,
        exact: true,
        isShow:false
    },
    {
        path: "/home",
        component: Home,
        exact: true,
        isShow:false
    },
    {
        path: "/my",
        component: My,
        exact: true,
        isShow:true
    },
    {
        path: "/car",
        component: Car,
        exact: true,
        isShow:true
    },
    {
        path: "/clearance",
        component: Clearance,
        exact: true,
        isShow:false
    },
    {
        path: "/category",
        component: Category,
        exact: true,
        isShow:false
    },
    {
        path: "/grap/:id",
        component: Grap,
        exact: true,
        isShow:false
    }, {
        path: "/detail",
        component: Detail,
        exact: true,
        isShow:false
    },
    {
        path:"/login",
        component:Login,
        exact:true,
        isShow:true,
    },
    {
        path:"/free",
        component:free,
        exact:true,
        isShow:true,
    },
    {
        path:"/order",
        component:order,
        exact:true,
        isShow:true,
    },
    {
        path:"/exchangecode",
        component:exchangecode,
        exact:true,
        isShow:true,
    },
    {
        path:"/toExchange",
        component:toExchange,
        exact:true,
        isShow:true,
    },
    {
        path:"/bonus_list",
        component:bonus_list,
        exact:true,
        isShow:true,
    },
    {
        path:"/history",
        component:history,
        exact:true,
        isShow:true,
    },
    {
        path:"/initwallet",
        component:initwallet,
        exact:true,
        isShow:true,
    },
    {
        path:"/collect",
        component:collect,
        exact:true,
        isShow:true,
    },
    {
        path:"/address",
        component:address,
        exact:true,
        isShow:true,
    },
    {
        path:"/usersafe",
        component:usersafe,
        exact:true,
        isShow:true,
    },
    {
        path:"/grap/1",
        component:Graps,
        exact:true,
        isShow:false
    },
    {
        path:"/two",
        component:Two,
        exact:true,
        isShow:false
    },
    //首页的
    {
        path:"/search",
        component:Search,
        exact:true,
        isShow:false
    },
    {
        path:"/gooddetail",
        component:Gooddetail,
        exact:true,
        isShow:false
    },
    {
        path:"/secondbuy",
        component:SecondBuy,
        exact:true,
        isShow:false
    },{
        path:"/shop",
        component:Shop,
        exact:true,
        isShow:false
    }
]