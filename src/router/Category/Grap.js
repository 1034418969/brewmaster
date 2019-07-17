import React from "react";
import axios from "axios"
class Grap extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            goodsList:[],
            isShow:true
        }
    }
    render() {
        return(
            <div className="grap">
                <div className="headSearch">
                    <span className="iconfont icon-fanhui" onClick={()=>{this.props.history.push("/category")}}></span> <b className="iconfont icon-search" id="search_text">全场商品低至9.9元起</b><span className="iconfont icon-caidan" onClick={()=>{
                    console.log(11111)
                    // this.setState({
                    //     isShow:!this.state.isShow
                    // })
                    this.props.history.push("/two")
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
                {/*{*/}
                    {/*this.state.isShow?<Detail id={this.props.match.params.id}></Detail>:<Two></Two>*/}
                {/*}*/}

                <div>
                    {
                        this.state.goodsList.map((v,i)=>{
                            return(
                                <div id="houImg" key={v.goods_id}>
                                    <div className="houImg"><img src={v.goods_thumb} alt=""/></div>
                                    <div id="houWord">
                                        <section>
                                            <p>{v.goods_name}</p>
                                        </section>
                                        <section>
                                            <b id="price">&yen;{v.cur_price}.00</b>
                                            <p id="self"><b>酒</b><i>自营</i><em>{v.goods_id}人评论</em></p>
                                        </section>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.match.params)//{id:1}
        this.getGoodsList()
    }
    //
    getGoodsList() {
        axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151746?pageNum=2")
            .then(({data}) => {
                this.setState({
                    goodsList: data.goodsCate.list
                })
                console.log(data.goodsCate.list)
            })
    }

}

export default Grap;