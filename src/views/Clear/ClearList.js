import React from "react";
import {
    bindActionCreators
} from "redux"
import {
    connect
} from "react-redux"
import ClearAction from "../../store/actionCreator/clear"
class ClearList extends React.Component {
    render() {
        return (
            <ul className="clearList">
                {
                    this.props.list.map((v, i) => {
                        return (
                            <li key={i} onClick={this.props.toDetail.bind(this,v)}>
                                <div className={"goods_top"}>
                                    <img src={v.goods_thumb} alt="" />
                                    <div></div>
                                    {
                                        v.showCur_price?<div></div>:<div className="sale-all">已经售完</div>
                                    }
                                    <p>{v.goods_name}</p>
                                    <span>{v.sub_title}</span>
                                </div>
                                <div className={"goods_Bot"}>
                                    <span>
                                        &yen;{v.cur_price}
                                        <s>&yen;{v.shop_price}</s>
                                    </span>
                                    <span className={"buy"}>点击购买</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    componentDidMount(){
        console.log(this.props.goods)
    }
    // toDetail(v){
    //     this.props.history.push({
    //         pathname:"/detail",
    //         state:{
    //             v
    //         }
    //     })
    // }
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
export default connect(mapStateToProps, mapDispatchToProps)(ClearList);