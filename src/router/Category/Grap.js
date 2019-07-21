import React from "react";
import axios from "axios"
import ClearAction from "../../store/actionCreator/clear"
import {
    NavLink
}from "react-router-dom"
import {
    bindActionCreators
} from "redux"
import {
    connect
} from "react-redux"


class Grap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goodsList: [],
            isShow: true
        }
    }

    render() {
        return (
            <div className="grap">
                <div className="headSearch">
                    <span className="iconfont icon-fanhui" onClick={() => {
                        this.props.history.push("/category")
                    }}></span> <b className="iconfont icon-search" id="search_text">全场商品低至9.9元起</b><span
                    className="iconfont icon-caidan" onClick={() => {
                    this.props.history.push("/two")
                }}></span>

                </div>
                <div className="tabBar">
                    <span>综合</span>
                    <span>销量</span>
                    <span className="iconfont">价格<b className="iconfont icon-xiaosanjiao top"></b> <b
                        className="iconfont icon-xiaosanjiao1 bottom"></b></span>
                    <span className="line">|</span>
                    <span>筛选</span>
                </div>
                <div className="club">
                    <span id="colour">酒仙配送</span>
                    <span>CLUB会员价</span>
                </div>
                <hr className="hr"/>

                <div>
                    {
                        this.state.goodsList.map((v, i) => {
                            return (
                                <NavLink key={i} onClick={this.props.toDetail.bind(this,v)} to="/detail">
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
                                </NavLink>
                            )
                        })
                    }

                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props)//{id:1}
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

function mapStateToProps(state) {
    // console.log(state.goods)
    return {
        goods:state.goods
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ClearAction,dispatch)
    // {//另一种写法
    //     getClearList(pageNum = 1) {
    //         dispatch(ClearAction.getClearList(pageNum))
    //     }
    // }
}
export default connect(mapStateToProps, mapDispatchToProps)(Grap);