import React, { Component } from 'react'
import '../assets/css/Car.css'
import a from '../assets/img/jx.png';




export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            money:"0.00",

        }
    }
    componentWillMount(){

    }
    render() {
        return (
            <div id="car">
                <div id="carList">
                    {/* 酒仙自营 */}
                    <div className="pucTitle">
                        <span className='pubIcon falseIcon'></span>
                        <span className="jxzy"><img src={a} alt="" /></span>
                        <span className='title'>酒仙自营</span>
                        <span className="cartCoupons">领券 <b className="pubIcon "></b></span>
                    </div>
                    {/* 商品 */}
                    <div className="catShopList">
                        <div className="catShopCont">
                            <a href="javascript:void(0)" className="cartDel" cart_unit="item-84706">|&nbsp;删除</a>
                            <span className='pubIcon falseIcon'></span>
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
                </div>
                <div id="catBomAllCheak">
                    <label data-type="checkallcli">
                        <i className="pubIcon falseIcon" data-type="checkall"></i>
                        <span>全选</span>
                    </label>
                    <div>
                        <p><span>合计：</span><em>￥66.00</em></p>
                        <p className="colorTxt"><span>优惠：</span><strong>￥0.00</strong></p>
                    </div>
                    <span>
                        <a href="javascript:void(0)" className="delBtn">去结算&nbsp;(1)</a>
                    </span>
                </div>
            </div>
        )
    }

}
