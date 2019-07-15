import React,{Component} from "react"
import "../css/my.css";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
export default class phoneLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            user:""
        }
    }
    sendLogin(){
        const userList = JSON.parse(localStorage.userList);
        if(userList.includes(this.state.user.value)){
            localStorage.user = this.state.user.value;
            this.props.history.push("/my")
        }else {
            alert("用户名错误")
        }
    }
    render() {
        return (
            <div className="phoneLogin">
                <span style={{width: "1.1rem", float: "left",
                    height: "0.02rem",
                    backgroundColor: "#de4943",marginTop:"-0.2rem",marginLeft:"2.28rem"}}></span>
                <div className="phone">
                    <i className="iconfont icon-shouji"></i>
                    <input  ref={v=>{this.state.user=v}} type="text" placeholder="请输入手机号，新用户将自动注册"/>
                    {/*<p><b className="iconfont icon-gantanhao"></b>请输入手机号</p>*/}
                </div>
                <div className="yzm1">
                    <i className="iconfont icon-refresh"></i>
                    <input type="text" placeholder="请输入验证码"/>
                </div>
                <div className="identify">
                    <input type="text" placeholder="请输入效验码"/>
                    <div className="yzm2">获取效验码</div>
                </div>
                <input type="button" onClick={this.sendLogin.bind(this)} value={"立即登录"} className="loginUp" />
            </div>
        )
    }
}