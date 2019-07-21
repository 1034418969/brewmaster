import React,{Component} from "react"
import "../assets/css/my.css";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom";
// import {
//     Provider
// } from "react-redux"
class My extends Component{
    constructor(){
        super();
        this.forceUpdate();
    }
    // localStorage.userName
    componentWillMount(){
        //     console.log(12121212);
        //     console.log(localStorage)
        //     console.log(111,localStorage.userList)
        //     console.log(2222,JSON.stringify(localStorage.userList).user)
        //     var arr=[];
        //     console.log(localStorage.userList.length)
        //     for(var i=0;i<localStorage.userList.length;i++){
        //         arr.push(localStorage.userList[i].user)
        //     }
        //     console.log(arr)
        //     if(!localStorage.user){
        //         this.props.history.push("/Login");
        //     }
        this.forceUpdate();
        // if(!localStorage.user)
            // this.props.history.push("/login")
    }
    render(){
        return (
            <div>
                <div style={{height: "0.4rem", background: "#de4943", color:" #fff",
                    display:"flex",justifyContent:"space-between",paddingLeft:"0.05rem",paddingRight:"0.05rem",
                    position: "fixed",zIndex: "999999", width: "98%"}}>
                    <i onClick={()=>{
                        this.props.history.push("/")
                    }} style={{marginTop:"0.1rem"}} className="iconfont icon-fanhui"></i>
                    <span style={{marginTop:"0.1rem",fontSize:".14rem"}}>个人中心</span>
                    <i style={{marginTop:"0.1rem"}} className="iconfont icon-gengduo"></i>
                </div>
                
                <div style={{height: "0.4rem"}}></div>
                <div className="my">
                    <div className="bg">
                        <img src="https://misc.jiuxian.com/m_user/images/usercenter/topBg.jpg"/>
                        <div className="userDetail">
                            <div className="userPhoto">
                                <div className="mask"></div>
                                <img src="https://misc.jiuxian.com/m_user/images/usercenter/userPhoto.png" alt=""/>
                            </div>
                            <div className="info">
                                <p className="userName">
                                    <b>{localStorage.user}</b>
                                    <a href="#">立享CLUB会员<i className="iconfont icon-icon_sright"></i></a>
                                </p>
                                <p className="userName">下载客户端 美酒随时抢</p>
                            </div>
                        </div>
                        <div className="order">
                            <p className="grade">LV1 酒虫</p>
                            <div className="orderStatus">
                                <a href="#">
                                    <strong>0</strong>
                                    <span>待付款</span>
                                </a>
                                <a href="#">
                                    <strong>0</strong>
                                    <span>待付款</span>
                                </a>
                                <a href="#">
                                    <strong>0</strong>
                                    <span>待付款</span>
                                </a>
                                <a href="#">
                                    <strong>0</strong>
                                    <span>待付款</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contentFrame">
                        <ul>

                            <li>
                                <NavLink exact to={"/order"} className="tubiao"><i className="iconfont icon-quanbudingdan"></i><span>全部订单</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/car"} className="tubiao"><i className="iconfont icon-gouwuche1"></i><span>购物车</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/exchangecode"} className="tubiao"><i className="iconfont icon-weibiaoti-icon-"></i><span>待领取</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/toExchange"} className="tubiao"><i className="iconfont icon-jifenduihuan"></i><span>去兑换</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/bonus_list"} className="tubiao"><i className="iconfont icon-youhuiquan"></i><span>我的优惠券</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/history"} className="tubiao"><i className="iconfont icon-liulanlishi"></i><span>浏览历史</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/initwallet"} className="tubiao"><i className="iconfont icon-qianbao"></i><span>我的钱包</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/car"} className="tubiao"><i className="iconfont icon-shoucang11-copy"></i><span>我的收藏</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/address"} className="tubiao"><i className="iconfont icon-weizhi"></i><span>地址管理</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/usersafe"} className="tubiao"><i className="iconfont icon-zhanghuanquan"></i><span>账户安全</span></NavLink>
                            </li>

                        </ul>
                        <input onClick={()=>{
                            localStorage.removeItem("user");
                            localStorage.removeItem("password");
                            this.props.history.push("/login")
                        }} type="button" value={"退出登录"} className="loginDown" />
                    </div>
                </div>
                {/*{localStorage.userName}*/}
                {/*<input type="button" value={"退出"} onClick={()=>{*/}
                {/*localStorage.removeItem("userName");*/}
                {/*this.props.history.push("/login");*/}
                {/*}}/>*/}
            </div>
        )
    }
    goback(){
        this.props.history.push("/")
    }
}
export default My;