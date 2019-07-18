import React from 'react'
import axios from 'axios'
import './HotRecommend.css'

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'



class Hot extends React.Component{
    constructor(){
        super();
        this.state={
            promoList:[]
        }
    }

    render(){
        return (
            <div className="hot">
                <h3 className="no"></h3>
                <span className="hot_tit">爆款推荐</span>

                <ul className="hot_shoplist">
                    {
                        this.state.promoList.map((v,i)=>{
                            return(
                                    <NavLink to={{
                                        pathname:"/gooddetail",
                                        state:{
                                            good:v.commonProductInfo
                                        }
                                    }} key={i}>
                                        <li className="hot_shop">
                                            <div className="hot_icon">
                                               {/* {
                                                    v.promo.map((m,n)=>{
                                                        return (
                                                            <span key={n} className="icons" style={{background:m.backColor}}>{m.name}</span>
                                                        )
                                                    })
                                                }*/}
                                            </div>
                                            <img src={v.commonProductInfo.imgPath} alt=""/>
                                            <span className="hot_name">{v.commonProductInfo.pname}</span>
                                            <div id="pri">
                                                <span className="hot_price">￥{v.commonProductInfo.actPrice}</span>
                                                <span className="delprice">￥{v.commonProductInfo.jxPrice}</span>
                                            </div>
                                        </li>
                                    </NavLink>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }

    componentDidMount(){
        axios.get("jiuxian/m_v1/statics/getzx.htm?topicId=1165&pageNum=1").then(({data})=>{
            // console.log(data.promoList)
            this.setState({
                promoList:data. promoList?data.promoList:[]

            })
            console.log("1111igugiu",this.state.promoList)
            console.log("怎么回事")

        })

      /*
       *不同的代理
       axios.get("mmember//address/getRegionList?province_id=3").then(({data})=>{
           console.log("不一样",data)
        })
        */

    }
}

export default Hot;



/*
{
    v.promo.map((m,n)=>{
        return (
            <span key={n} className="icons" style={{background:m.backColor}}>{m.name}</span>
        )
    })
}*/
