import React,{Component} from "react"
export default class Free extends Component{
    render(){
        return(
            <div className="frees">
                <div style={{height: "0.4rem", background: "#de4943", color:" #fff",
                    display:"flex",justifyContent:"space-between",paddingLeft:"0.05rem",paddingRight:"0.05rem"}}>
                    <i onClick={this.goback.bind(this)} style={{marginTop:"0.1rem"}} className="iconfont icon-fanhui"></i>
                    <span style={{marginTop:"0.1rem",fontSize:".14rem"}}>用户注册</span>
                    <i style={{marginTop:"0.1rem"}} className="iconfont icon-gengduo"></i>
                </div>
                <div style={{marginTop:"0.2rem"}} className="phone">
                    <i className="iconfont icon-shouji"></i>
                    <input type="text" placeholder="手机号"/>
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
                <div className="phone">
                    <i className="iconfont icon-mima"></i>
                    <input type="text" placeholder="密码"/>
                </div>
                <div className="phone">
                    <i className="iconfont icon-mima"></i>
                    <input type="text" placeholder="再次密码"/>
                </div>
                <input type="button" onClick={()=>{
                    console.log(1111)
                }} value={"立即注册"} className="loginUp" />
            </div>
        )
    }
    goback(){
        this.props.history.push("/login")
    }
}