import React from 'react';
import logo from './logo.svg';
import './App.css';
import assets from "./assets/img/jiu.jpg"
import jxzy  from "./assets/img/jxzy.png"
import {
  BrowserRouter as Router,
  Route,
  NavLink

} from "react-router-dom"
import iconfont from "./iconfont/iconfont.css"
import Connect from "./views/Connect"
import Shop from "./views/Shop"
import Car from "./views/Car"
import JionCar  from "./views/JionCar"
import Buy from "./views/Buy"
import Default from './views/Default';

class App extends React.Component{
  render(){
  return (
    <div className="App">
     <div className="last">
       
       <Router>
         <Route path={"/"} component={Default} exact></Route>
         <Route path={"/connect"} component={Connect}></Route>
         <Route path={"/shop"} component={Shop}></Route>
         <Route path={"/car"} component={JionCar}></Route>
         <Route path={"/jioncar"} component={JionCar}></Route>
         <Route path={"/buy"} component={Buy}></Route>
         
         <NavLink exact to={"/"}></NavLink>
         <div className="qwe">
         <NavLink to={"/connect"} className="iconfont icon-kefu line"><span className="size">在线收藏</span></NavLink>
         <NavLink to={"/shop"}  className="iconfont icon-shoucang2 line" ><span className="size">收藏</span></NavLink>
         <NavLink to={"/car"} className="iconfont icon-gouwuche line_1"><span className="size">购物车</span></NavLink>
         <NavLink to={"/jioncar"} className="jion">加入购物车</NavLink>
         <NavLink to={"/buy"} className="gobuy" onClick={this.handle} >立即购买</NavLink>
         </div>
       </Router>
     </div>
    </div>
  )
  }
  handle(){
    const w=window.open('about:blank');
    w.location.href="http://localhost:3000"
  
  }
}

export default App;
