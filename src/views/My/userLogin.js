import React,{Component} from "react"
import "../../assets/css/my.css";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
import axios from "axios";

export default class userLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            user:"",
            password:""
        }
    }
    sendLogin(){
        if(this.state.user.value && this.state.password.value){
            axios.post("/jx/userlog",{
                username:this.state.user.value,
                password:this.state.password.value
            })
            .then(({data})=>{
               if(data.ok === 1){
                //    将账号密码存入localStorage
                    localStorage.user = this.state.user.value;
                    localStorage.password = this.state.password.value;
                    this.props.history.push("/my");
               } 
               else
                alert(data.msg)
               
            })
        }else{
            alert("账号密码不能为空")
        }
        
        
    }
    render() {
        return (
            <div className="userLogin">
                <span style={{width: "0.55rem", float: "left",
                    height: "0.02rem",
                    backgroundColor: "#de4943",marginTop:"-0.2rem",marginLeft:"0.36rem"}}></span>
                <div className="users">
                    <div className="phone">
                        <i className="iconfont icon-yonghuming"></i>
                        <input ref={v=>{this.state.user=v}} type="text" placeholder="用户名/邮箱/手机号"/>
                        {/*<p><b className="iconfont icon-gantanhao"></b>请输入手机号</p>*/}
                    </div>
                    <div className="phone">
                        <i className="iconfont icon-mima"></i>
                        <input ref={v=>{this.state.password=v}} type="text" placeholder="密码"/>
                    </div>
                    <div className="yzm1">
                        <i className="iconfont icon-refresh"></i>
                        <input type="text" placeholder="请输入验证码"/>
                    </div>
                </div>
                <input type="button" onClick={this.sendLogin.bind(this)} value={"立即登录"} className="loginUp" />
            </div>

        )
    }
}