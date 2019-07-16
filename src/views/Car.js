import React, { Component } from 'react'
import '../assets/css/pucTitle.css'
import a from '../assets/img/jx.png'
export default class Car extends Component {
    render() {
        return (
            <div id="car">
                {/* 酒仙自营 */}
                <div className="pucTitle">
                    <span className='pubIcon falseIcon'></span>
                    <span className="jxzy"><img src={a} alt="" /></span>
                    <span className='title'>酒仙自营</span>
                    <span className="cartCoupons">领券 <b></b></span>
                </div>
                <div className="catShopList">
                    <div className="catShopCont">
                        <span className='pubIcon falseIcon'></span>
                        <div className="catShopInfo ">
                            <div className="catImg ">
                                <img src="https://img09.jiuxian.com/2019/0228/beb024bdb3b64be29808c5de1686e61c4.jpg" alt="" />
                            </div>
                            <div className="catInfo">
                                <h4 class="twoLineEllipsisCart">
                                    <span>法国茉莉花博若莱干红葡萄酒750ml 【升级版】+嘉年华黑珍珠海马酒刀</span>
                                </h4>
                                <p>
                                    <span>¥66.00</span>
                                    <span><strong >限时抢购</strong></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
