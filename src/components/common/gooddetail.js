import React from 'react'
import axios from 'axios'
import '../../assets/css/gooddetail.css'
class Gooddetail extends React.Component{
    constructor (){
        super();
        this.state={
            good:[],
            goodinfo:[],
            city:[],
            isShow:false

        }
    }
    render(){
        return (
            <div class="gooddetail">
                <ul className="address_con"
                    onClick={this.none.bind(this)}
                    ref="dz"
                    style={{display:this.state.isShow?"block":"none"}}
                >
                    {
                        this.state.city.map((v,i)=>{
                            return (
                                <li class="citys" onClick={this.toSheng.bind(this,i)} key={i}>{v[1]}</li>
                            )
                        })
                    }
                </ul>
                <div class="gooddetail_head">
                    <span onClick={()=>{this.props.history.go(-1)}}> 《 </span>
                    <span>商品详情</span>
                    <span>三</span>
                </div>
                <div class="gooddetail_con">
                    <div class="imgbox">
                        <img src={this.state.good.imgPath} alt="" class="goodimg"/>
                    </div>
                    <span class="goodnm spandiv">{this.state.good.pname}</span>
                    <span class="good_info spandiv">{this.state.good.subTitle}</span>
                    <div id="pri">
                        <span className="hot_price">￥{this.state.good.actPrice}</span>
                        <span className="delprice">￥{this.state.good.jxPrice}</span>
                    </div>
                    <span>{this.state.goodinfo.clubDiscountTip}</span>

                </div>
                <div className="address" onClick={this.addressistrue.bind(this)}>
                    <span >地址</span>
                    <span></span>

                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            good:this.props.location.state.good
        })
        console.log(this.props.location.state.good)
        axios.get("/jiuxian/m_v1/goods/detailPromo/" + this.props.location.state.good.pid).then((res) => {
            console.log(1234455666,res)
            this.setState({
                goodinfo:res.data
            })
        })

        //数据：收货地址
        axios.get("/jiuxian/m_v1/goods/getRegions" ).then((res) => {
            console.log("地址：",res.data)
            this.setState({
                city:res.data[1]
            })
        })

    }
    addressistrue(e){
        this.setState({
            isShow:true
        })
    }
    none(e){

       this.setState({
           isShow:false
       })
        // e.stopPropagation();
    }

    toSheng(num,e){
        e.stopPropagation();
        axios.get("/jiuxian/m_v1/goods/getRegions" ).then((res) => {
            console.log("小地址：",res.data[num+2])
            this.setState({
                city:res.data[num+2]
            })
        })
    }

    toShi(num2){
        axios.get("/jiuxian/m_v1/goods/getRegions" ).then((res) => {
            console.log("小地址：",res.data[num2+33])
            this.setState({
                city:res.data[num2+33]
            })
        })
    }
}

export default Gooddetail;


