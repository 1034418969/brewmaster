import React from 'react';
import '../assets/css/Detail.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink

} from "react-router-dom"
import iconfont from "../assets/font/iconfont.css"
import Connect from "../views/Detail/Connect"
import Shop from "../views/Detail/Shop"
import Car from "../views/Detail/Car"
import JionCar  from "../views/Detail/JionCar"
import Buy from "../views/Detail/Buy"
import Default from '../views/Detail/Default';

class Detail extends React.Component{
  render(){
  return (
    <div className="App">
     <div className="last">
       
       <Router>
         <Route path={"/detail"} component={Default} exact></Route>
         <Route path={"/connect"} component={Connect}></Route>
         <Route path={"/shop"} component={Shop}></Route>
         <Route path={"/car"} component={Car}></Route>
         <Route path={"/jioncar"} component={JionCar}></Route>
         <Route path={"/buy"} component={Buy}></Route>
         
         <NavLink exact to={"/detail"}></NavLink>
         <div className="qwe">
         <NavLink to={"/connect"} className="iconfont icon-kefu liney"><span className="size">在线收藏</span></NavLink>
         <NavLink to={"/shop"}  className="iconfont icon-shoucang2 liney" ><span className="size">收藏</span></NavLink>
         <NavLink to={"/car"} className="iconfont icon-gouwuche line_1"><span className="size">购物车</span></NavLink>
         <NavLink to={"/jioncar"} className="jion">加入购物车</NavLink>
         <NavLink to={"/buy"} className="gobuy" >立即购买</NavLink>
         </div>
       </Router>
     </div>
    </div>
  )
  }
 
}

export default Detail;
