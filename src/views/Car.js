import React, { Component } from 'react'
import '../assets/css/Car.css'
import a from '../assets/img/jx.png';
import {
    bindActionCreators
} from "redux"
import {
    connect
} from "react-redux"
import axios from 'axios'
import CarDetail from "../store/actionCreator/car"

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allMoney: "0.00",
            sumNum: 0,
            allqx: false,
            // 商品
            allgoods: []
        }
    }
    // 全选
    allChoice() {
        this.setState({
            allqx: !this.state.allqx,
        }, () => {
            axios.put("/jx/allChangecar", {
                user: localStorage.user,
                choice: this.state.allqx
            }).then(({ data }) => {
                if (data.ok === 1) {
                    this.getCar()
                }
            })
        })
    }
    // 监控单选--->全选
    oneAll() {
        let bStop = true;
        for (var i = 0; i < this.state.allgoods.length; i++) {
            if (this.state.allgoods[i].choice === false) {
                bStop = false;
                break;
            }
        }       
        this.setState({
            allqx: bStop,
        })
    }
    // 单选
    aloneChoice(id, type) {
        axios.put("/jx/changecar", {
            id,
            type
        }).then(({ data }) => {
            this.getCar()
        })

    }
    // 获取购物车
    getCar() {
        axios.get('/jx/Car', {
            params: {
                username: localStorage.user
            }
        })
            .then(({ data }) => {
                this.setState({
                    allgoods: data.contextList
                }, () => {
                    this.sumNum();
                    this.oneAll();
                })
            })
    }
    componentWillMount() {
        // 获取购物车
        this.getCar()
    }
    // 总价格，数量
    sumNum() {
        var sumNum = 0;
        var allMoney = 0;
        for (var i = 0; i < this.state.allgoods.length; i++) {
            if (this.state.allgoods[i].choice === true) {
                sumNum += this.state.allgoods[i].num / 1;
                allMoney += (this.state.allgoods[i].curPrice * this.state.allgoods[i].num) / 1;
            }
        }
        allMoney += ".00";
        this.setState({
            sumNum,
            allMoney
        })
    }
    // 改变数量
    changeNum(id,type) {
        axios.put("/jx/changeNum",{
            id,
            type
        }).then(({data})=>{
            this.getCar()
        })
    }
    // 跳转商品详情
    jmpDetail(goods) {
        this.props.carDetail.bind(this,goods)()
        this.props.history.push("/detail")
    }
    // 删除购物车商品
    delGoods(id){
        axios.delete("/jx/Car",{
            data:{
                id
            }
        })
        .then(({data})=>{
            this.getCar();
        })
    }
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

                    {/* 遍历购物车 */}
                    {
                        this.state.allgoods.map((v) => {
                            return (
                                <div className="catShopList" key={v._id}>
                                    <div className="catShopCont">
                                        <a href="javascript:void(0)" className="cartDel" cart_unit="item-84706" onClick={this.delGoods.bind(this, v._id)}>|&nbsp;删除</a>
                                        {/* 单选 */}
                                        <span className='pubIcon tureIcon' onClick={this.aloneChoice.bind(this, v._id, !v.choice)} className={v.choice ? 'pubIcon tureIcon' : ' pubIcon falseIcon'}></span>
                                        <div className="catShopInfo ">
                                            <div className="catImg ">
                                                <img src={v.goodsImg} alt="" onClick={this.jmpDetail.bind(this,v)}/>
                                                {v.choice}
                                            </div>
                                            <div className="catInfo">
                                                <h4 className="twoLineEllipsisCart">
                                                    <span  onClick={this.jmpDetail.bind(this,v)}>{v.goodsTitle}</span>
                                                </h4>
                                                <p>
                                                    <span>¥{v.curPrice * v.num}</span>
                                                    <span><strong >限时抢购</strong></span>
                                                </p>
                                                <div className="rsCartItem">
                                                    <div className="comAmount">
                                                        <a className="publicIcon minus on" onClick={this.changeNum.bind(this,v._id,-1)}>-</a>
                                                        <input className="inpVal" type="text" value={v.num} />
                                                        <a className="publicIcon plus " onClick={this.changeNum.bind(this,v._id,1)}>+</a>
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
        car: state.car,
        goods:state.goods
    }
}
function mapDispatchToProps(dispatch) {
    // 列表跳转详情ClearAction
    return bindActionCreators(CarDetail,dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Car);