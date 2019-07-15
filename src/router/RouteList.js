import Home from '../views/Home';
import My from '../views/My';
import Car from '../views/Car';
import Clearance from '../views/Clearance';
import Category from '../views/Category';



export default [
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/home",
        component:Home,
        exact:true
    },
    {
        path:"/my",
        component:My,
        exact:true
    },
    {
        path:"/car",
        component:Car,
        exact:true
    },
    {
        path:"/clearance",
        component:Clearance,
        exact:true
    },
    {
        path:"/category",
        component:Category,
        exact:true
    }
]