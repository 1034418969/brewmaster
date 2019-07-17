import React,{Component} from "react"
import "../../assets/css/my.css";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
export default class ToExchange extends Component{
    constructor(props) {
        super(props);
        this.state = {
            coods:[],
            a:1
        }
    }
    render(){
        return(
            <div className="mainBody">
                <div style={{height: "0.4rem", background: "#FFF", color:" #000",
                    display:"flex",justifyContent:"space-between",paddingLeft:"0.05rem",paddingRight:"0.05rem"}}>
                    <i style={{marginTop:"0.1rem"}} className="iconfont icon-fanhui"></i>
                    <span style={{marginTop:"0.1rem",fontSize:".14rem",color:"#000"}}>待领取</span>
                    <i></i>
                </div>
                <div className="excFocus">
                    <a href="https://m.jiuxian.com/m_v1/dynamic/mob01/151574">
                        <img src="https://img10.jiuxian.com/bill/2019/0424/b9ef69bdf63546c8bd586b3b7e977c42.jpg" alt=""/>
                    </a>
                </div>
                <div className="goodsExchangeCon2">
                    <div className="goodsExchangeNull">
                        <i className="iconfont icon-jiushui"></i>
                        <p>暂无待领取的兑换码商品哦</p>
                    </div>
                </div>
                <div className="excItem">
                    <h3>
                        <i className="iconfont icon-gengduo1"></i>
                        在买以下任意商品免运费
                        <i className="iconfont icon-gengduo1"></i>
                    </h3>
                    <div className="excUserTab">
                        <span style={{background:"#fff"}}>超值热卖</span>
                        <span>特色美酒</span>
                        <span>年中榜单</span>
                    </div>
                    <div className="comList">
                        <ul>
                            {
                                this.state.coods.map((v,i) => {
                                    return(
                                        <li key={v.goods_id}>
                                            <a href="https://m.jiuxian.com/m_v1/goods/view/35638">
                                                <div className="pic">
                                                    <img src={v.goods_thumb} alt=""/>
                                                </div>
                                                <div className="name">{v.goods_name}</div>
                                                <div className="proName">{v.sub_title}</div>
                                                <div className="judge">已经有<span>{v.cur_price}</span>评价</div>
                                                <div className="proPrice">
                                                    <font>￥</font><span>{v.shop_price}</span>
                                                </div>
                                            </a>
                                            <a href="javascript:;" className="cartBtn">加入购物车</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.getCodeList()
    }
    getCodeList(num=this.state.a){
        axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum="+num)
            .then(({data})=>{
                this.setState({
                    coods:data.goodsCate.list
                })
                console.log(11111)
                console.log(data)
                console.log(data.goodsCate.list)
                console.log(this.state.coods)
            })
    }
}
