// import React from "react";
// import axios from "axios";
// class Item extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             goodsOneList:[],
//             goodsTwoList:[]
//         }
//     }
//     render(){
//         return(
//             <div className="item" >
//                 <div className="items">
//                     {
//                         this.state.goodsOneList.map((v,i)=>{
//                             return(
//                                <section key={v.commonProductInfo.pid}>
//                                    <p><img src={v.commonProductInfo.imgPath} alt=""/></p>
//                                    <p id="itemWords">{v.commonProductInfo.pname}</p>
//                                    <div id="houName">
//                                        {
//                                            v.promo.map((v,i)=>{
//                                                return(
//                                                    <div>
//                                                        <p id="time" style={{background:v.backColor,color:v.wordColor}}>{v.name}</p>
//                                                    </div>
//                                                )
//                                            })
//                                        }
//                                    </div>
//                                    <div id="bottom">
//                                        <strong>&yen;{v.commonProductInfo.actPrice}.00</strong>
//                                        <p id="self"><b>酒</b><span>自营</span></p>
//                                        <p className="comment">{v.commonProductInfo.pid}人评论</p>
//                                    </div>
//                                </section>
//                             )
//                         })
//                     }
//                 </div>
//                 <div className="items">
//                     {
//                         this.state.goodsOneList.map((v,i)=>{
//                             return(
//                                 <section key={v.commonProductInfo.pid}>
//                                     <p><img src={v.commonProductInfo.imgPath} alt=""/></p>
//                                     <p id="itemWords">{v.commonProductInfo.pname}</p>
//                                     <div id="name">
//                                         {
//                                             v.promo.map((v,i)=>{
//                                                 return(
//                                                     <div>
//                                                         <p id="time" style={{background:v.backColor,color:v.wordColor}}>{v.name}</p>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                     <div id="bottom">
//                                         <strong>&yen;{v.commonProductInfo.actPrice}.00</strong>
//                                         <p id="self"><b>酒</b><span>自营</span></p>
//                                         <p className="comment">{v.commonProductInfo.pid}人评论</p>
//                                     </div>
//                                 </section>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
//     componentDidMount(){
//         this.goodsOneList()
//         // this.goodsTwoList()
//     }
//     goodsOneList(){
//         axios.get("https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=1")
//             .then(({data})=>{
//             this.setState({
//                 goodsOneList:data.promoList
//             })
//             console.log(data.promoList,this.state.goodsOneList)
//             })
//     }
    // goodsTwoList(){
    //     axios.get("https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=2")
    //         .then(({data})=>{
    //         this.setState({
    //             goodsTwoList:data.promoList
    //         })
    //         console.log(data)
    //         })
    // }
// }
// export default Item;

import React from "react";
import axios from "axios";
class Item extends React.Component {
    constructor(){
        super()
        this.state = {
            goodsOneList:[],
            goodsTwoList:[]
        }
    }
    render(){
        return(
            <div className="grap">
                <div className="headSearch">
                    <span className="iconfont icon-fanhui" onClick={()=>{this.props.history.push("/category")}}></span> <b className="iconfont icon-search" id="search_text">全场商品低至9.9元起</b><span className="iconfont icon-caidan" onClick={()=>{
                    this.props.history.push("/grap/1")
                }}></span>

                </div>
                <div className="tabBar">
                    <span>综合</span>
                    <span>销量</span>
                    <span className="iconfont">价格<b className="iconfont icon-xiaosanjiao top"></b> <b className="iconfont icon-xiaosanjiao1 bottom"></b></span>
                    <span className="line">|</span>
                    <span>筛选</span>
                </div>
                <div className="club">
                    <span id="colour">酒仙配送</span>
                    <span>CLUB会员价</span>
                </div>
                <hr className="hr"/>
                <div id="item">
                    <div className="items">
                        {
                            this.state.goodsOneList.map((v,i)=>{
                                return(
                                    <section key={v.commonProductInfo.pid}>
                                        <p><img src={v.commonProductInfo.imgPath} alt=""/></p>
                                        <p id="itemWords">{v.commonProductInfo.pname}</p>
                                        {/*<div id="houName">*/}
                                            {/*{*/}
                                           {/*v.promo.map((v,i)=>{*/}
                                               {/*return(*/}
                                                   {/*<div>*/}
                                                       {/*<p id="time" style={{background:v.backColor,color:v.wordColor}}>{v.name}</p>*/}
                                                   {/*</div>*/}
                                               {/*)*/}
                                           {/*})*/}
                                       {/*}*/}
                                       {/*</div>*/}
                                       <div id="bottom">
                                           <b id="price">&yen;{v.commonProductInfo.actPrice}.00</b>
                                           <p id="self"><b>酒</b><i>自营</i><em>{v.commonProductInfo.pid}人评论</em></p>
                                       </div>
                                    </section>
                                )
                            })
                        }
                    </div>
                    <div className="items">
                        {
                            this.state.goodsTwoList.map((v,i)=>{
                                return(
                                    <section key={v.commonProductInfo.pid}>
                                        <p><img src={v.commonProductInfo.imgPath} alt=""/></p>
                                        <p id="itemWords">{v.commonProductInfo.pname}</p>

                                        <div id="bottom">
                                            <b id="price">&yen;{v.commonProductInfo.actPrice}.00</b>
                                            <p id="self"><b>酒</b><i>自营</i><em>{v.commonProductInfo.pid}人评论</em></p>
                                        </div>
                                    </section>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.goodsOneList()
        this.goodsTwoList()
    }

    goodsOneList(){
        axios.get("https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=1")
            .then(({data})=>{
            this.setState({
                goodsOneList:data.promoList
            })
            console.log(data.promoList,this.state.goodsOneList)
            })
    }
    goodsTwoList(){
        axios.get("https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=2")
            .then(({data})=>{
            this.setState({
                goodsTwoList:data.promoList
            })
            console.log(data)
            })
    }


}
export default Item;