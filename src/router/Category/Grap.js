import React from "react";
import Detail from "./Detail"
import Two from "./Two"
class Grap extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isShow:true
        }
    }
    render() {
        return(
            <div>
                <div className="headSearch">
                    <span className="iconfont icon-fanhui"></span> <b className="iconfont icon-search" id="search_text">全场商品低至9.9元起</b><span className="iconfont icon-caidan" onClick={()=>{
                    console.log(11111)
                    this.setState({
                        isShow:!this.state.isShow
                    })
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
                {
                    this.state.isShow?<Detail id={this.props.match.params.id}></Detail>:<Two></Two>
                }
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.match.params)//{id:1}
        // this.getGoods()
    }
    //
    // getGoods() {
    //     axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=2")
    //         .then(({data}) => {
    //             this.setState({
    //                 goods: data.goodsCate.list
    //             })
    //
    //         })
    // }

}

export default Grap;