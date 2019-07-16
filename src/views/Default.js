import React from "react"
import '../App.css';
import iconfont from "../iconfont/iconfont.css"
import assets from "../assets/img/jiu.jpg"
import jxzy  from "../assets/img/jxzy.png"
import axios from "axios"

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {
    connect
} from "react-redux"
class Tools{
  static currency(v,n=2){
    return "￥"+v.toFixed(n);
}
}

class Default extends React.Component{
  constructor(){
    super()
    this.state={
      isShow:true
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
               <span>&lt;</span>
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
            {
                this.props.details.details.map(v=>{
                   return(
                       <div key={v.goods_id}>
                        <div className="tu">

                          
              <img src={v.goods_thumb} className="img" />

            </div>
            {/* <div className='banner'>
                <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                        <div className="swiper-slide"><img style={{width:"200px",height:"50px"}}  src={v.goods_thumb} alt=""/></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div> */}
             <div className="details ">
             <div className="active">
               <div>
                <span className="span_2">
                 <a href="#" className="iconfont icon-huangguan jiu"></a>
                 <a href="#">酒仙甄选</a>
                </span>
               
                <img src={jxzy} className="jxzy" />
                <span className="span_1">{v.goods_name}</span>
                </div>
                <div className="detailsTip" >固态法白酒酿造的白酒，严格三斤粮食酿造一斤酒，让这款酒具有浓郁的口感。
                浓香型酒香气幽雅，口感绵柔，醇甜，细腻，后味悠长。
                </div>
                <div className="b_1">
                <span className="price"><b>{Tools.currency(v.cur_price/1)}</b></span>
                <span className="price_2"><s>酒仙价:{Tools.currency(v.shop_price/1)}</s></span>
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
            
          </div>
                       </div>
                   )
                })
            }
             
          
         </div>
        )
    }
    componentDidMount(){
        console.log(this.props.details.details,"props")
        this.props.getDefault()
        var mySwiper = new Swiper('.swiper-container',{
          pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              //type: 'fraction',
              //type : 'progressbar',
              //type : 'custom',
            },
          
          })
    }
}
function mapStateToProps(state) {
    return {
       details:state.details
    }
}
function mapDispatchToProps(dispatch){
 return{
     getDefault(){
         //https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=2
        axios.get("/jiuxian/m_v1/dynamic/mob01ajax/151763?pageNum=2").then(({data})=>{
            console.log(data)
             const details=data.goodsCate.list
             console.log(details)
             dispatch({
                 type:"UP_DEFAUIT",
                 payload:{
                     details
                 }
             })
          })

     }
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Default);