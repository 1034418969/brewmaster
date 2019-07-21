import React,{Component} from "react"
import "../../assets/css/my.css";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
import phoneLogin from "./phoneLogin"
import userLogin from "./userLogin"
class Login extends Component{

    render(){
        return (
            <Router>
            <div className="logins">
            <div style={{height: "0.4rem", background: "#de4943", color:" #fff",
            display:"flex",justifyContent:"space-between",paddingLeft:"0.05rem",paddingRight:"0.05rem"}}>
    <i onClick={this.goback.bind(this)} style={{marginTop:"0.1rem"}} className="iconfont icon-fanhui"></i>
            <span style={{marginTop:"0.1rem",fontSize:".14rem"}}>用户登录</span>
        <i style={{marginTop:"0.1rem"}} className="iconfont icon-gengduo"></i>
            </div>
            <div className="nav_ysk">
            <ul>
            <li style={{listStyle:"none",float:"left",marginLeft: "0.36rem"}}>
    <NavLink style={{height: "0.3rem", lineHeight: "0.4rem",fontSize:"0.14rem",margin:"1px",display:"block"}}
        exact  to={"/login"}>账号登录</NavLink>
            </li>
            <li style={{listStyle:"none",float:"right",marginRight:"0.36rem"}}>
    <NavLink style={{height: "0.3rem", lineHeight: "0.4rem",fontSize:"0.14rem",margin:"1px",display:"block"}}
        to={"/login/phoneLogin"}>手机动态密码登录</NavLink>
            </li>
            </ul>
            </div>

            <Route path={"/login"} exact component={userLogin} ></Route>
            <Route path={"/login/phoneLogin"} component={phoneLogin}></Route>


        {/*<NavLink to={"/gaga"}><input type="button" value={"立即登录"} className="loginUp" /></NavLink>*/}

        {/*<Route component={My}></Route>*/}


    <div className="free">
            <a onClick={this.zhuce.bind(this)}  href="javascript:;" className="regist">免费注册</a>
            <a href="javascript:;" className="getpwd">找回密码</a>
            </div>
            <div className="title">
            <div className="line"></div>
            <div className="partner">合作伙伴登录</div>
            <ul>
            <li>
            <a href="https://mlogin.jiuxian.com/unionLogin/qqlogin" style={{color:"rgb(94,172,232)"}} className="iconfont icon-qq-copy"></a>
            <a href="https://mlogin.jiuxian.com/unionLogin/alipay" style={{color:"rgb(255,136,20)"}} className="iconfont icon-Icon"></a>
            </li>
            </ul>
            </div>
            </div>
            </Router>

    );
    }
    zhuce(){
        this.props.history.push("/free")
    }
    goback(){
        this.props.history.push("/")
    }
}

export default Login;