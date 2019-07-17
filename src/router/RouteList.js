import Home from '../views/Home';
import My from '../views/My';
import Car from '../views/Car';
import Clearance from '../views/Clearance';
import Category from '../views/Category';
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
import Grap from "../router/Category/Grap.js";
import Detail from '../views/Detail';



export default [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/home",
        component: Home,
        exact: true
    },
    {
        path: "/my",
        component: My,
        exact: true
    },
    {
        path: "/car",
        component: Car,
        exact: true
    },
    {
        path: "/clearance",
        component: Clearance,
        exact: true
    },
    {
        path: "/category",
        component: Category,
        exact: true
    },
    {
        path: "/grap/:id",
        component: Grap,
        exact: true
    }, {
        path: "/detail",
        component: Detail,
        exact: true
    },
    {
        path:"/login",
        component:Login,
        exact:true
    },
    {
        path:"/free",
        component:free,
        exact:true
    },
    {
        path:"/order",
        component:order,
        exact:true
    },
    {
        path:"/exchangecode",
        component:exchangecode,
        exact:true
    },
    {
        path:"/toExchange",
        component:toExchange,
        exact:true
    },
    {
        path:"/bonus_list",
        component:bonus_list,
        exact:true
    },
    {
        path:"/history",
        component:history,
        exact:true
    },
    {
        path:"/initwallet",
        component:initwallet,
        exact:true
    },
    {
        path:"/collect",
        component:collect,
        exact:true
    },
    {
        path:"/address",
        component:address,
        exact:true
    },
    {
        path:"/usersafe",
        component:usersafe,
        exact:true
    }
]