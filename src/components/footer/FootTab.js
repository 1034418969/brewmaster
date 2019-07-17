import React from "react";
import "../../static/Clear.css"
import "../../font_1290535_gpk94i8s898/iconfont.css"
import {
    NavLink
} from "react-router-dom"
class FootTab extends React.Component {
    render() {
        return (
            <div className={"footer"}>

                <NavLink exact activeStyle={{ color: "red" }} to={"/"}>
                    <div>
                        <span className="iconfont icon-shouye"></span>
                        <span>Home</span>
                    </div>
                </NavLink>
                <NavLink activeStyle={{ color: "red" }} to={"/discover"}>
                    <div>
                        <span className="iconfont icon-faxian"></span>
                        <span>发现</span>
                    </div>
                </NavLink>
                <NavLink activeStyle={{ color: "red" }} to={"/clear"}>
                    <div>
                        <span className="iconfont icon-kefu"></span>
                        <span>劲爆清仓</span>
                    </div>
                </NavLink>
                <NavLink activeStyle={{ color: "red" }} to={"/car"}>
                    <div>
                        <span className="iconfont icon-27"></span>
                        <span>购物车</span>
                    </div>
                </NavLink>
                <NavLink activeStyle={{ color: "red" }} to={"/my"}>
                    <div>
                        <span className="iconfont icon-my_icon"></span>
                        <span>我的</span>
                    </div>
                </NavLink>
            </div>
        )
    }
}
export default FootTab;