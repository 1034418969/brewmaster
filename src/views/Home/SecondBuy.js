import React from 'react'
import '../../assets/css/SecondBuy.css'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

class SecondBuy extends React.Component{
    constructor(){
        super();
        this.state={
            secondlist:[]
        }
    }

    render(){
        return (
            <div className="secondbuy">
                <div className="secondbuy_head">
                    <span onClick={()=>{this.props.history.push("/home")}}> 《 </span>
                    <span>掌上秒拍</span>
                    <span>三</span>
                </div>

                <div className="secondbuy_nav">
                        <span onClick={this.change.bind(this,1)}>10点场</span>
                        <span onClick={this.change.bind(this,2)}>15点场</span>
                        <span onClick={this.change.bind(this,3)}>19点场</span>
                        <span onClick={this.change.bind(this,4)}>7点场</span>
                </div>
                <div className="secondbuy_list">
                    <div className="secondbuy_listhead"></div>
                    <ul className="secondbuy_listcon">
                        {
                            this.state.secondlist.map((v,i)=>{
                                return (
                                    <li className="secondbuy_shop" key={i}>
                                        <img src={v.proImg} alt="" className="secondbuy_shopimg"/>
                                        <div className="secondbuy_shopinfo">
                                           <h2 >{v.proName}</h2>
                                            <h4>{v.slogan}</h4>
                                            <h3><span>秒拍价：</span>{v.proPrice}</h3>
                                            <h5 className="sellPercent">
                                                已售{v.sellPercent}%
                                                <div className="percentbox">
                                                    <span style={{display:"block",
                                                                    width:v.sellPercent+"%",
                                                                    height:"100%",
                                                                    background:"#ffcccc"}}>
                                                    </span>
                                                </div>
                                            </h5>
                                            <input type="button" className="qg"
                                                  style={{background:(v.sellPercent===100)?"#666":"#fc4646"}}
                                                    defaultValue={(v.sellPercent===100)?"已卖光":"去抢购"}
                                            >

                                            </input>

                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        axios.get("/jiuxian/m_v1/promote/qgajax.do?from=ad_03&pagenum=1&tabnum=1").then((res)=>{
            console.log("掌上秒拍的数据",res)
            this.setState({
                secondlist:res.data.killProList
            })
            console.log(this.state.secondlist)
        })
        console.log("111")
    }
    change(num){
        console.log("hello",num)
        axios.get("/jiuxian/m_v1/promote/qgajax.do?from=ad_03&pagenum=1&tabnum="+num).then((res)=>{
            console.log("掌上秒拍的数据",res)
            this.setState({
                secondlist:res.data.killProList
            })
            console.log(this.state.secondlist)
        })
    }
}

export default SecondBuy;


// https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=1&tabnum=4




{/*
<div className="secondbuy_nav">
    <NavLink to={"/secondbuy/1"}>
        <span>10点场</span>
    </NavLink>
    <NavLink to={"/secondbuy/2"}>
        <span>15点场</span>
    </NavLink>
    <NavLink to={"/secondbuy/3"}>
        <span>19点场</span>
    </NavLink>
    <NavLink to={"/secondbuy/4"}>
        <span>7点场</span>
    </NavLink>
</div>*/}
