import React, {Component} from 'react'
import "../assets/css/Category.css"
// import iconfont from "./iconfont/iconfont.css";
import {
    BrowserRouter as Router,
    NavLink,
    Link,
    Route
} from "react-router-dom";
import Grap from "../router/Category/Grap.js";

export default class Category extends Component {
    constructor(){
        super();
        this.state = {
            goodsList:[""]
        }
    }

    render() {
        return (
            <div className="App">
                <header className="Hou-header">
                    <b className="iconfont icon-fanhui" onClick={()=>{this.props.history.push("/")}}></b>
                    <b>菜单</b>
                    <span className="iconfont icon-menu"></span>
                </header>
                <div>
                    <div className="searchInput">
                        <b className="iconfont icon-search" id="search_text">酒粉节：领津贴每满199减20</b>
                    </div>
                </div>
                <div className="detail">
                    <ul id="menu-list" onClick={this.getIndex}>
                        <li><i className="iconfont icon-icon-test"></i><span>白酒</span></li>
                        <li><i className="iconfont icon-jiubei"></i><span>葡萄酒</span></li>
                        <li><i className="iconfont icon-wineGlass"></i><span>洋酒</span></li>
                        <li><i className="iconfont icon-icon"></i><span>整箱购</span></li>
                        <li><i className="iconfont icon-shou"></i><span>老酒</span></li>
                        <li><i className="iconfont icon-xiangzi"></i><span>清仓特卖</span></li>
                        <li><i className="iconfont icon-feiji"></i><span>海外直采</span></li>
                        <li><i className="iconfont icon-tanzitubiao"></i><span>精美大坛</span></li>
                        <li><i className="iconfont icon-ziyuan"></i><span>红酒整箱</span></li>
                        <li><i className="iconfont icon-zhidexinlai_fuzhi"></i><span>值得买</span></li>
                        <li><i className="iconfont icon-xiaoliang"></i><span>销量排行</span></li>
                        <li><i className="iconfont icon-lishangwanglai"></i><span>礼尚往来</span></li>
                    </ul>
                </div>

                {/*<nav className="nav">*/}
                {/*<NavLink to={"/grap/1"} className="navLink" onClick={()=>{this.props.history.push("/grap/1")}}><i className="iconfont icon-icon-test"></i><span>白酒</span></NavLink>*/}
                {/*<NavLink to={"/grap/2"} className="navLink"><i className="iconfont icon-jiubei"></i><span>葡萄酒</span></NavLink>*/}
                {/*<NavLink to={"/grap/3"} className="navLink"><i className="iconfont icon-wineGlass"></i><span>洋酒</span></NavLink>*/}
                {/*<NavLink to={"/grap/4"} className="navLink"><i className="iconfont icon-icon"></i><span>整箱购</span></NavLink>*/}
                {/*<NavLink to={"/grap/5"} className="navLink"><i className="iconfont icon-shou"></i><span>老酒</span></NavLink>*/}
                {/*<NavLink to={"/grap/6"} className="navLink"><i className="iconfont icon-xiangzi"></i><span>清仓特卖</span></NavLink>*/}
                {/*<NavLink to={"/grap/1"} className="navLink"><i className="iconfont icon-feiji"></i><span>海外直采</span></NavLink>*/}
                {/*<NavLink to={"/grap/2"} className="navLink" ><i className="iconfont icon-tanzitubiao"></i><span>精美大坛</span></NavLink>*/}
                {/*<NavLink to={"/grap/3"} className="navLink"><i className="iconfont icon-ziyuan"></i><span>红酒整箱</span></NavLink>*/}
                {/*<NavLink to={"/grap/4"} className="navLink"><i className="iconfont icon-zhidexinlai_fuzhi"></i><span>值得买</span></NavLink>*/}
                {/*<NavLink to={"/grap/5"} className="navLink" ><i className="iconfont icon-xiaoliang"></i><span>销量排行</span></NavLink>*/}
                {/*<NavLink to={"/grap/6"} className="navLink"><i className="iconfont icon-lishangwanglai"></i><span>礼尚往来</span></NavLink>*/}
                {/*</nav>*/}

                {/*<nav className="hiden">*/}
                {/*<Route path={"/grap/:id"} component={Grap}></Route>*/}
                {/*<Route path={"/wine/:id"} component={Wine}></Route>*/}
                {/*<Route path={"/box/:id"} component=></Route>*/}
                {/*</nav>*/}


            </div>
        )
    }
    componentDidMount(){
        console.log(55555,this.props.history)
    }


    getIndex=(e)=>{
        var _this = this;
        var ul_menu = document.getElementById("menu-list");
        var li_list = ul_menu.getElementsByTagName("li");
        for( let i = 0; i < li_list.length; i ++ ){
            li_list[i].onclick = function(){
                let num = i+1
                console.log(num,i)
                let qqq ="Grap/"+num;
                console.log(qqq)
                _this.props.history.push(qqq)
                e.preventDefault();
            }
        }
    }
}
