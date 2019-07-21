import React,{Component} from "react"
import "../../assets/css/my.css";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
import axios from "axios";
export default class phoneLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            user:"",
            password:""
        }
    }
    sendLogin(){
        this.props.history.push("/my");
        // const userList = JSON.parse(localStorage.userList);
        // console.log(userList)
        // var arr1=[]
        // for (let i=0;i<userList.length;i++){
        //     arr1.push({username:userList[i].user,password:userList[i].password})
        // }
        // console.log(arr1[1])

        // for(var j=0;j<arr1.length;j++) {
        //     if(arr1[j].username===this.state.user.value){
        //         if(arr1[j].password===this.state.password.value){
        //             localStorage.user = this.state.user.value;
        //             localStorage.password = this.state.password.value;
        //             this.props.history.push("/my")
        //             return
        //         }
        //         else {
        //             alert("密码错误")
        //         }
        //         return
        //     }
        //     else {
        //         alert("用户名错误")
        //         return
        //     }
        // }
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
                    <input ref={v=>{this.state.password=v}} type="text" placeholder="请输入验证码"/>
                </div>
                <div className="identify">
                    <input type="text" placeholder="请输入效验码"/>
                    <div className="yzm2" style={{border:"solid 1px #626365"}}>获取效验码</div>
                </div>
                <input type="button" onClick={this.sendLogin.bind(this)} value={"立即登录"} className="loginUp" />
            </div>
        )
    }
}