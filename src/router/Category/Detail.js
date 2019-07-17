import React from "react";
import axios from "axios";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: []
        }
    }

    render() {
        return (
            <div>
                    {
                        this.state.goods.map((v, i) => {
                            return (
                                <div className="content" key={v.goods_id}>
                                    <div className="img"><img src={v.goods_thumb} alt=""/></div>
                                    <div className="words">
                                        <div>
                                            <p id="words">{v.goods_name}</p>
                                            <span id="limit">{v.headlabel}</span>
                                        </div>
                                        <div className="one">
                                            <b id="price">&yen;{v.cur_price}.00</b>
                                            <p id="self"><b>酒</b><i>自营</i></p>
                                            <p className="comment">{v.goods_id}人评论</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
    getGoods() {
        // console.log(page,"page")
        axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=2")
            .then(({data}) => {
                 this.setState({
                    goods: data.goodsCate.list
                })
                console.log(data)
            })
    }
    componentWillReceiveProps(a,b){
        console.log(a,b,"ab")
        this.getGoods(a.id)
    }
    componentDidMount(){
        console.log(this.props);
        this.getGoods(this.props.num)
    }


}
export default Detail;
