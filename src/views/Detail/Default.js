import React from "react"
import '../../assets/css/Detail.css';
import iconfont from "../../assets/font/iconfont.css"
import jxzy  from "../../assets/img/jxzy.png"
import axios from "axios"
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch

} from "react-router-dom"

import {
    connect
} from "react-redux"
class Tools{
  static currency(v,n=2){
    return "￥"+v.toFixed(n);
}
}

class Default extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isShow:true,
      details:{},
      goods:{}
    }
  }
  cancelButton(){
     this.setState({
       isShow:!this.state.isShow
     })
  }
    render(){
        return(
            <div className="App">
              
             <div className="main">
               <span onClick={()=>{
                 this.props.history.go(-1)
               }}>&lt;</span>
               <span>商品详情</span>
               <span className="iconfont icon-gengduo"></span>
            </div>
            <div className="common" style={{display:this.state.isShow?"flex":"none",width: "100%",
                                            height: "43px",
                                            background: "#2e2e2e",
                                            padding:"0 10px",
                                            boxSizing: "border-box",
                                            alignItems: "center"}}>
              <span className="iconfont icon-x-copy sorry" onClick={this.cancelButton.bind(this) }></span>
              <span className="xian">酒</span>
              <h3>
								<p>打开酒仙网APP</p>
								<p >新人领198元礼包</p>
		       	</h3>
             <a className="down-btn" >立即打开</a>
            </div>
            <div key={this.state.goods.goodsName}>
                <div className="tu">
                <img src={this.state.goods.goodsImg} className="img" />
            </div>
             <div className="details ">
             <div className="active">
               <div>
                <span className="span_2">
                 <a href="#" className="iconfont icon-huangguan jiu"></a>
                 <a href="#">酒仙甄选</a>
                </span>
               
                <img src={jxzy} className="jxzy" />
                <span className="span_1">{this.props.goods.goods_name}</span>
                </div>
                <div className="detailsTip" >固态法白酒酿造的白酒，严格三斤粮食酿造一斤酒，让这款酒具有浓郁的口感。
                浓香型酒香气幽雅，口感绵柔，醇甜，细腻，后味悠长。
                </div>
                <div className="b_1">
                <span className="price"><b>{Tools.currency(this.state.goods.curPrice/1)}</b></span>
                <span className="price_2"><s>酒仙价:{Tools.currency(this.state.goods.shopPrice/1)}</s></span>
                </div>
                <div className="final">
                  <span className="iconfont icon-club word"></span>
                  <span>会员下单再享98折,可省1.00元</span>
                </div>
                <a href="#" className="final_1">限时抢购</a>
             </div>
            </div>
             <div className="jintie-wrap" >
                     <div className="dt"></div>
                     <div className="dd">
                       <div className="voucher-list">
                           <div className="jintie">每满199减20,领取津贴全平台可用<div className="jintie_lq">点击领取</div></div>
                       </div>
                 </div>
             </div>
             <div className="voucher-wrap"  >
                 <div className="dt">领券</div>
                 <div className="dd">
                     <div className="voucher-list" > 
                       <div className="voucher-item"> 
                         <span>满599减45</span> 
                       </div> 
                       <div className="voucher-item">
                         <span>满399减25</span>  
                       </div> 
                       <div className="voucher-item">
                         <span>满199减10</span> 
                         </div>
                       </div>
     
                 </div>
          </div>
             <div className="discount ">
            <div className="discount_1">
             <span className="iconfont icon-club word"></span>
             <span>购买CLUB会员享受更多优惠</span>
            </div>
            <div style={{height:"50px"}}></div>
          </div>
        </div>
        <div className="qwe">
              <NavLink to={"/connect"} className="iconfont icon-kefu liney"><span className="size">在线收藏</span></NavLink>
              <NavLink to={"/shop"}  className="iconfont icon-shoucang2 liney" ><span className="size">收藏</span></NavLink>
              <NavLink to={"/car"} className="iconfont icon-gouwuche line_1"><span className="size">购物车</span></NavLink>
              <NavLink to={"/jioncar"} className="jion" onClick={this.props.carList.bind(this)}>加入购物车</NavLink>
              <NavLink to={"/buy"} className="gobuy" >立即购买</NavLink>
              </div>
      </div>
        )
    }
    componentDidMount(){
        // 如果localStorage没有值
        if(!localStorage.goods){
             this.setState({
            goods:this.props.goods
          },()=>{
            console.log(this.state.goods,"9090");
            localStorage.goods=JSON.stringify(this.state.goods);
          })
        }else{// 如果localStorage有值
          // 如果redux有值
          if(this.props.goods.id){
            this.setState({
              goods:this.props.goods
            },()=>{
              console.log(this.state.goods,"9090");
              localStorage.goods=JSON.stringify(this.state.goods);
            })
          }else{
            this.setState({
              goods:JSON.parse(localStorage.goods)
            },()=>{
              console.log(this.state.goods,"9090");
            })
          }
          console.log(this.state.goods,"333")
        }
   
    }
   
}
function mapStateToProps(state) {
  console.log(state,33333)
    return {
      goods:state.goods
    }
}
function mapDispatchToProps(dispatch){
 return{
  carList(){
    this.state.push({
      buyNum:1,
      goodsId:this.props.goods.id,
      goodsName:this.props.goods.goods_name,
      curPrice:this.state.goods.curPrice,
      shopPrice:this.state.goods.shopPrice,
      goodsImg: this.state.goods.goodsImg
    })

}
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Default);