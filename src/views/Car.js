import React, { Component } from 'react'
import '../assets/css/Car.css'
import a from '../assets/img/jx.png';
// import {
//     bindActionCreators
// } from "redux"
import {
    connect
} from "react-redux"



class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allMoney: "0.00",
            sumNum: 0,
            allqx: false,
            aloneqx: false,
            allgoods: [
                {
                    id: 1,
                    num: 1,
                    money: 20,
                    choice: false
                },
                {
                    id: 2,
                    num: 3,
                    money: 40,
                    choice: false
                }
            ]
        }
    }
    // 全选
    allChoice() {
        this.setState({
            allqx: !this.state.allqx,
        }, () => {
            for (var i = 0; i < this.state.allgoods.length; i++) {
                this.state.allgoods[i].choice = this.state.allqx;
                this.setState({
                    allgoods: this.state.allgoods
                })
            }
        },()=>{
            this.sumNum();
        })
    }
    // 单选
    aloneChoice(id) {
        for (var i = 0; i < this.state.allgoods.length; i++) {
            if (this.state.allgoods[i].id === id) {
                this.state.allgoods[i].choice = !this.state.allgoods[i].choice;
                this.setState({
                    allgoods: this.state.allgoods
                })
            }
        }
        let bStop = true;
        for (var i = 0; i < this.state.allgoods.length; i++) {
            if (this.state.allgoods[i].choice === false) {
                bStop = false;
                break;
            }
        }
        this.setState({
            allqx: bStop,
        },()=>{
            this.sumNum();
        })
    }
    // 总价格，数量
    sumNum(){
        var sumNum = 0;
        var allMoney = 0;
        for(var i = 0; i < this.state.allgoods.length; i++){
            if(this.state.allgoods[i].choice === true){
                sumNum +=this.state.allgoods[i].num;
                allMoney +=this.state.allgoods[i].money;
            }
        }
        this.setState({
            sumNum,
            allMoney
        })

    }
    // 改变数量
    render() {
        return (
            <div id="car">
                <div id="carList">
                    {/* 酒仙自营 */}
                    <div className="pucTitle">
                        {/* 全选 */}
                        <span className={this.state.allqx ? 'pubIcon tureIcon' : 'pubIcon falseIcon'} onClick={this.allChoice.bind(this)}></span>
                        <span className="jxzy"><img src={a} alt="" /></span>
                        <span className='title'>酒仙自营</span>
                        <span className="cartCoupons">领券 <b className="pubIcon "></b></span>
                    </div>
                    {/* 商品 */}
                    <div className="catShopList">
                        <div className="catShopCont">
                            <a href="javascript:void(0)" className="cartDel" cart_unit="item-84706" onClick={this.props.delGoods.bind(this, "id")}>|&nbsp;删除</a>
                            {/* 单选 */}
                            <span ref='alone' onClick={this.aloneChoice.bind(this, this.state.allgoods[0].id)} className={this.state.allgoods[0].choice ? 'pubIcon tureIcon' : 'pubIcon falseIcon'}></span>
                            <div className="catShopInfo ">
                                <div className="catImg ">
                                    <img src="https://img09.jiuxian.com/2019/0228/beb024bdb3b64be29808c5de1686e61c4.jpg" alt="" />
                                </div>
                                <div className="catInfo">
                                    <h4 className="twoLineEllipsisCart">
                                        <span>法国茉莉花博若莱干红葡萄酒750ml 【升级版】+嘉年华黑珍珠海马酒刀</span>
                                    </h4>
                                    <p>
                                        <span>¥66.00</span>
                                        <span><strong >限时抢购</strong></span>
                                    </p>
                                    <div className="rsCartItem">
                                        <div className="comAmount">
                                            <a className="publicIcon minus on">-</a>
                                            <input className="inpVal" type="text" value={1} />
                                            <a className="publicIcon plus ">+</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="catShopList">
                        <div className="catShopCont">
                            <a href="javascript:void(0)" className="cartDel" cart_unit="item-84706" onClick={this.props.delGoods.bind(this, "id")}>|&nbsp;删除</a>
                            {/* 单选 */}
                            <span ref='alone' onClick={this.aloneChoice.bind(this, this.state.allgoods[1].id)} className={this.state.allgoods[1].choice ? 'pubIcon tureIcon' : 'pubIcon falseIcon'}></span>
                            <div className="catShopInfo ">
                                <div className="catImg ">
                                    <img src="https://img09.jiuxian.com/2019/0228/beb024bdb3b64be29808c5de1686e61c4.jpg" alt="" />
                                </div>
                                <div className="catInfo">
                                    <h4 className="twoLineEllipsisCart">
                                        <span>法国茉莉花博若莱干红葡萄酒750ml 【升级版】+嘉年华黑珍珠海马酒刀</span>
                                    </h4>
                                    <p>
                                        <span>¥66.00</span>
                                        <span><strong >限时抢购</strong></span>
                                    </p>
                                    <div className="rsCartItem">
                                        <div className="comAmount">
                                            <a className="publicIcon minus on">-</a>
                                            <input className="inpVal" type="text" value={1} />
                                            <a className="publicIcon plus ">+</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 遍历购物车 */}
                    {
                        this.props.car.list.map((v) => {
                            return (
                                <div className="catShopList" key={v.id}>
                                    <div className="catShopCont">
                                        <a href="javascript:void(0)" className="cartDel" cart_unit="item-84706" onClick={this.props.delGoods.bind(this, v.id)}>|&nbsp;删除</a>
                                        {/* 单选 */}
                                        <span className='pubIcon tureIcon' onClick={this.aloneChoice.bind(this)} className={this.state.aloneqx ? 'pubIcon tureIcon' : 'pubIcon falseIcon'}></span>
                                        <div className="catShopInfo ">
                                            <div className="catImg ">
                                                <img src="https://img09.jiuxian.com/2019/0228/beb024bdb3b64be29808c5de1686e61c4.jpg" alt="" />
                                            </div>
                                            <div className="catInfo">
                                                <h4 className="twoLineEllipsisCart">
                                                    <span>{v.goodsTitle}</span>
                                                </h4>
                                                <p>
                                                    <span>¥{v.goodsPrice}</span>
                                                    <span><strong >限时抢购</strong></span>
                                                </p>
                                                <div className="rsCartItem">
                                                    <div className="comAmount">
                                                        <a className="publicIcon minus on">-</a>
                                                        <input className="inpVal" type="text" value={v.num} />
                                                        <a className="publicIcon plus ">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div id="catBomAllCheak">
                    <label data-type="checkallcli">
                        <i className={this.state.allqx ? 'pubIcon tureIcon' : 'pubIcon falseIcon'} onClick={this.allChoice.bind(this)} data-type="checkall"></i>
                        <span>全选</span>
                    </label>
                    <div>
                        <p><span>合计：</span>￥<em ref="allMoney">{this.state.allMoney}</em></p>
                        <p className="colorTxt"><span>优惠：</span>￥<strong>0.00</strong></p>
                    </div>
                    <span>
                        <a href="javascript:void(0)" className="delBtn">去结算<strong ref="sumNum">({this.state.sumNum})</strong></a>
                    </span>
                </div>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        car: state.car
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // 删除购物车商品
        delGoods(id) {
            dispatch({
                type: "DEL_GOODS",
                payload: {
                    id
                }
            })
        }
        // 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Car);