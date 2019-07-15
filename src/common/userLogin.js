import React,{Component} from "react"
import "../css/my.css";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
export default class userLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            user:"",
            password:""
        }
    }
    sendLogin(){
        const userList = JSON.parse(localStorage.userList);
        var arr1=[],arr2=[]
        for (let i=0;i<userList.length;i++){
            arr1.push(userList[i].user)
            arr2.push(userList[i].password)
        }
        console.log(arr1)
        console.log(arr2)
        // console.log(userList[i].user.includes(this.state.user.value))
        // console.log(this.state.user.value)
        // console.log(userList[i].password)
        // console.log(this.state.password.value)
        if(arr1.includes(this.state.user.value) && arr2.includes(this.state.password.value)){
            localStorage.user = this.state.user.value;
            localStorage.password = this.state.password.value;
            this.props.history.push("/my")
        }else {
            alert("用户名错误")
        }
        // }
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