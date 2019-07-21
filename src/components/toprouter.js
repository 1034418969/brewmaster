import React, { Component } from 'react'
import {
    withRouter
} from "react-router-dom";
import '../assets/css/toprouter.css'
import '../assets/font/iconfont.css'
class toprouter extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShow:false
        }
    }

    render() {
        return (
            <div>
                <div style={{
                    height: "0.4rem", background: "#de4943", color: " #fff",
                    display: "flex", justifyContent: "space-between", paddingLeft: "0.05rem", paddingRight: "0.05rem",
                    zIndex: "999999"
                }}>
                    <i onClick={() => {
                        this.props.history.go(-1)
                    }} style={{ marginTop: "0.1rem" }} className="iconfont icon-fanhui"></i>
                    <span style={{ marginTop: "0.1rem", fontSize: ".14rem" }}>个人中心</span>
                    <i style={{ marginTop: "0.1rem" }} className="iconfont icon-gengduo" onClick={()=>this.setState({isShow:!this.state.isShow})}></i>
                </div>
                <div style={{display:this.state.isShow?'block':'none'}} id="toprou">
                    <div onClick={this.isShowTop.bind(this,"/home")}><i className="iconfont icon-shouye"></i><span>首页</span></div>
                    <div onClick={this.isShowTop.bind(this,"/search")}><i className="iconfont icon-sousuo"></i><span>搜索</span></div>
                    <div onClick={this.isShowTop.bind(this,"/car")}><i className="iconfont icon-tubiaolunkuo-"></i><span>购物车</span></div>
                    <div onClick={this.isShowTop.bind(this,"/my")}><i className="iconfont icon-yonghuming"></i><span>我的酒仙</span></div>
                </div>
            </div>
        )
    }
    isShowTop(route){
        this.props.history.push(route)
    }

}
export default withRouter(toprouter)
