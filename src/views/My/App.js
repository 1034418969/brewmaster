import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import iconfont from "./font_1285072_pbqfd2gt8ba/iconfont.css"
import My from "./views/My";
import ceshi from "./views/ceshi";
import Login from "./views/Login";
import "./css/my.css";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
import Address from "./views/Address"
import Bonus_list from "./views/Bonus_list"
import Car from "./views/Car"
import Collect from "./views/Collect"
import Exchangecode from "./views/Exchangecode"
import History from "./views/History"
import Initwallet from "./views/Initwallet"
import Order from "./views/Order"
import ToExchange from "./views/ToExchange"
import Usersafe from "./views/Usersafe"
import Free from "./views/free"
class App extends Component{
    render(){
        if(!localStorage.userList){
            localStorage.userList=JSON.stringify([{user:"admin",password:"jiuxian"},{user:"1905",password:"1905"},{user:"react",password:"react"}])
        }

        return (
            <div className="App">
                <Router>
                    <NavLink style={{color: "green"}} activeStyle={{color: "red"}} exact to={"/"}>主分支</NavLink>|
                    {/*<NavLink style={{color: "green"}} activeStyle={{color: "red"}} to={"/login"}>登录</NavLink>|*/}
                    <NavLink style={{color: "green"}} activeStyle={{color: "red"}} to={"/my"}>我的</NavLink>

                    <Route component={My} path={"/"} exact></Route>
                    <Route component={Login} path={"/login"}></Route>
                    <Route component={My} path={"/my"}></Route>

                    <Route exact path={"/address"} component={Address}></Route>
                    <Route exact path={"/bonus_list"} component={Bonus_list}></Route>
                    <Route exact path={"/car"} component={Car}></Route>
                    <Route exact path={"/collect"} component={Collect}></Route>
                    <Route exact path={"/exchangecode"} component={Exchangecode}></Route>
                    <Route exact path={"/history"} component={History}></Route>
                    <Route exact path={"/initwallet"} component={Initwallet}></Route>
                    <Route exact path={"/order"} component={Order}></Route>
                    <Route exact path={"/toExchange"} component={ToExchange}></Route>
                    <Route exact path={"/usersafe"} component={Usersafe}></Route>
                    <Route exact path={"/free"} component={Free}></Route>

                </Router>
            </div>
        );
    }
}

export default App;
