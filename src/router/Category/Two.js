import React from "react";
import axios from "axios";
class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
            goodsOneList:[],
            goodsTwoList:[]
        }
    }
    render(){
        return(
            <div className="item" >
                <div className="items">
                    {
                        this.state.goodsOneList.map((v,i)=>{
                            return(
                               <section key={v.commonProductInfo.pid}>
                                   <p><img src={v.commonProductInfo.imgPath} alt=""/></p>
                                   <p id="itemWords">{v.commonProductInfo.pname}</p>
                                   <div id="name">
                                       {
                                           v.promo.map((v,i)=>{
                                               return(
                                                   <div>
                                                       <p id="time" style={{background:v.backColor,color:v.wordColor}}>{v.name}</p>
                                                   </div>
                                               )
                                           })
                                       }
                                   </div>
                                   <div id="bottom">
                                       <strong>&yen;{v.commonProductInfo.actPrice}.00</strong>
                                       <p id="self"><b>酒</b><span>自营</span></p>
                                       <p className="comment">{v.commonProductInfo.pid}人评论</p>
                                   </div>
                               </section>
                            )
                        })
                    }
                </div>
                <div className="items">
                    {
                        this.state.goodsOneList.map((v,i)=>{
                            return(
                                <section key={v.commonProductInfo.pid}>
                                    <p><img src={v.commonProductInfo.imgPath} alt=""/></p>
                                    <p id="itemWords">{v.commonProductInfo.pname}</p>
                                    <div id="name">
                                        {
                                            v.promo.map((v,i)=>{
                                                return(
                                                    <div>
                                                        <p id="time" style={{background:v.backColor,color:v.wordColor}}>{v.name}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div id="bottom">
                                        <strong>&yen;{v.commonProductInfo.actPrice}.00</strong>
                                        <p id="self"><b>酒</b><span>自营</span></p>
                                        <p className="comment">{v.commonProductInfo.pid}人评论</p>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.goodsOneList()
        // this.goodsTwoList()
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
    // goodsTwoList(){
    //     axios.get("https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=2")
    //         .then(({data})=>{
    //         this.setState({
    //             goodsTwoList:data.promoList
    //         })
    //         console.log(data)
    //         })
    // }
}
export default Item;