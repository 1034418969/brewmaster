import React, { Component } from 'react'
import '../assets/css/Home.css'



import Carouse from './Home/Carouse'
import Hot from './Home/HotRecommend'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'




export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            killProList:[],
            top:""
        }

    }
    render(){
        return (
            <div className="home">
                    <header style={{background:document.documentElement.scrollTop>355?"rgba(255,0,0,0.6)":"rgba(255,0,0,0)"}}>
                            <i className="iconfont icon-jiuxianwang"></i>
                            <NavLink to={"/search"}>
                                    <div className='home-search'>
                                            <i className="iconfont icon-sousuo"></i>
                                            <input type="text"/>
                                    </div>
                            </NavLink>

                    </header>
                    <Carouse></Carouse>
                    <nav>
                            <a id="__home_icon1" href="https://m.jiuxian.com/m_v1/home/baijiu_new/660/150053">
                                    <img src="https://img06.jiuxian.com/bill/2019/0707/da5c529174484194ab4d5dbdcf3afdee.jpg" />
                            </a>
                            <a id="__home_icon2" href="http://m.jiuxian.com/m_v1/home/putaojiu_new/661/150054">
                                    <img src="https://img08.jiuxian.com/bill/2019/0707/c8f1246cbc0e4704854bc98d43631dad.jpg" />
                            </a>
                            <a id="__home_icon3" href="http://m.jiuxian.com/m_v1/home/yangjiu_new/662/150055">
                                    <img src="https://img06.jiuxian.com/bill/2019/0707/5d69afb0dac44a6ca8860b1fbfb4f164.jpg" />
                            </a>
                            <a id="__home_icon4" href="https://m.jiuxian.com/m_v1/dynamic/mob01/151746">
                                    <img src="https://img10.jiuxian.com/bill/2019/0707/8c14dbebe6744c4ea63647049323261e.jpg" />
                            </a>
                            <a id="__home_icon5" href="https://m.jiuxian.com/mobile/SP/517JXZX/index.html" >
                                    <img src="https://img06.jiuxian.com/bill/2019/0707/098475d032d64037af32046bb7f9ad72.jpg" />
                            </a>
                            <a id="__home_icon6" href="https://mlogin.jiuxian.com/user/login?retUrl=https%3A%2F%2Fmmember.jiuxian.com%2Fget_bonus%2Findex%2F">
                                    <img src="https://img07.jiuxian.com/bill/2019/0707/b7c7b767939346fbb6b442f2b5e2a3ac.jpg" />
                            </a>
                            <a id="__home_icon7" href="https://m.jiuxian.com/mobile/2019/ZJK/index.html">
                                    <img src="https://img10.jiuxian.com/bill/2019/0707/3dcf63ca4b04449098b6dbaad464c247.gif" />
                            </a>
                            <a id="__home_icon8" href="https://jc.jiuxian.com/">
                                    <img src="https://img10.jiuxian.com/bill/2019/0707/29d1d36b7b1c4a2aa50421704b8e9ab2.jpg" />
                            </a>
                            <a id="__home_icon9" href="https://pintuan.jiuxian.com/">
                                    <img src="https://img06.jiuxian.com/bill/2019/0707/ed3350c414e44fc2a95bea232e19d7c3.jpg" />
                            </a>
                            <a id="__home_icon10" href="https://m.jiuxian.com/m_v1/dynamic/mob01/151711">
                                    <img src="https://img09.jiuxian.com/bill/2019/0707/991047b6459b42c3a6261e6f8e81c29d.jpg" />
                            </a>
                            <div className="main_hall">
                                    <img src="https://img09.jiuxian.com/bill/2019/0707/58c711feb6d74dbb9873e64efff79423.jpg" style={{width:"100%",height:"0.87rem"}}/>
                                    <img src="https://img09.jiuxian.com/bill/2019/0707/c4b5faab5b5646c689b99f1cbc31a088.jpg" style={{width:"50%",height:"1.05rem"}}/>
                                    <img src="https://img07.jiuxian.com/bill/2019/0707/fefb6034b02f4d4ab2a62340400bdff3.jpg" style={{width:"50%",height:"1.05rem"}}/>
                            </div>

                    </nav>
                    <div className="home_toutiao">
                            <img src="https://img09.jiuxian.com/bill/2018/0131/dc91033804f74f8c82bd8feec19ac915.jpg"
                                 style={{width:"0.83rem"}}  />
                            <div className="slide">
                                    <div className="swiper-container1" style={{fontSize:"12px",width:"2.5rem",height:"0.2rem",overflow:"hidden"}}>
                                            <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                            <a href="https://m.jiuxian.com/mobile/2018/GJMJC/">酒仙网线下实体火爆招商中</a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                            <a href="https://m.jiuxian.com/mobile/2019/2019GT/index.html">国台限时特惠 买一送一</a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                            <a href="https://m.jiuxian.com/mobile/2019/523JXFH/index.html">古井贡狂欢节 全场满399返150</a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                            <a href="https://m.jiuxian.com/mobile/2019/JGJ/index.html">酒鬼酒专场 领券下单更优惠</a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                            <a href="https://m.jiuxian.com/mobile/2018/GJMJC/">酒仙网线下实体火爆招商中</a>
                                                    </div>

                                                    <div className="swiper-slide">
                                                            <a href="https://m.jiuxian.com/mobile/2019/2019GT/index.html">国台限时特惠 买一送一</a>
                                                    </div>

                                            </div>

                                    </div>
                            </div>
                    </div>
                    <div className="spikeBox">
                            <div className="spikeTit">
                                    <h3>掌上秒拍</h3>
                                    <div className="lastTime" remaintime="341">
                                            <span>距结束</span>
                                            <i className="hours">00</i>
                                            <em>:</em>
                                            <i className="minutes">05</i>
                                            <em>:</em>
                                            <i className="seconds">41</i>
                                    </div>
                                    <a id="__home_mp-more" href="#" className="more">
                                            <span onClick={()=>{this.props.history.push("/secondbuy")}}>更多商品的你来抢！</span>
                                    </a>
                            </div>
                            <div className="spikeWrap">
                                    <div className="swiper-container2">
                                            <div className="swiper-wrapper">

                                                {
                                                    this.state.killProList.map((v,i)=>{
                                                        return (

                                                            <div className="swiper-slide" key={i} onClick={()=>{this.props.history.push("/secondbuy")}}>
                                                                    <div className="spikegoods">
                                                                            <img src={v.proImg} alt="" style={{width:"0.96rem",height:"0.96rem"}}/>
                                                                            <span className="goodname">{v.proName}</span>
                                                                            <span className="googprice">￥{v.proPrice}</span>
                                                                            <span className="googdelprice">￥{v.jxPrice}</span>

                                                                    </div>

                                                            </div>
                                                        )
                                                    })
                                                }


                                            </div>
                                    </div>
                            </div>
                    </div>
                    <div className="threepic">
                            <a href="https://m.jiuxian.com/mobile/2019/709JFJ/index.html">
                                    <img src="https://img09.jiuxian.com/bill/2019/0704/1506e1647d4340778b44630cd1d1bd55.jpg"
                                         style={{width:"100%"}}/>
                            </a>
                            <a href="https://m.jiuxian.com/m_v1/dynamic/mob01/151886">
                                    <img src="https://img10.jiuxian.com/bill/2019/0710/3f6334c4e7da403a8cb39aeceacc61d8.jpg"
                                         style={{width:"100%"}}/>
                            </a>
                            <a href="https://shop.jiuxian.com/show/wap/act/viewShopActivity.htm?viewType=2&amp;actId=3674">
                                    <img src="https://img06.jiuxian.com/bill/2019/0707/1e3807a65b9c431a9ad341a3bd1c1ebb.jpg"
                                         style={{width:"100%"}}/>
                            </a>
                    </div>
                    <div className="choice">
                            <a id="__home_zhutizuo" href="#" className="minH172 height1">
                                    <img className="test-lazyload" src="https://img08.jiuxian.com/bill/2019/0628/1e42195e88ef4cafa5b9efab44fdf7d6.jpg"
                                         style={{width:"1.8413rem"}}/>
                            </a>
                            <div className="youbian">
                                    <a id="__home_zhutiyoushang" href="#" className="borderComT minH86 height1">
                                            <img className="test-lazyload" src="https://img10.jiuxian.com/bill/2019/0606/e2404d867fa54a8ba3e59aa8a77434fd.jpg"/>
                                    </a>
                                    <a id="__home_zhutiyouxia" href="#" className="minH86 height1">
                                            <img className="test-lazyload" src="https://img07.jiuxian.com/bill/2018/1218/af4f40ab44e14047875cb7b96e06e4f9.jpg"/>
                                    </a>
                            </div>
                    </div>
                    <div className="recommend">
                            <div className="swiper-container3">
                                    <div className="swiper-wrapper">

                                            <div className="swiper-slide">
                                                    <a href="#">
                                                            <img src="https://img07.jiuxian.com/bill/2019/0709/018f3b9b903a45c3bd6749a95d0d5498.jpg"
                                                                 className="recommendpic"/>
                                                    </a>
                                            </div>

                                            <div className="swiper-slide">
                                                    <a href="#">
                                                            <img src="https://img08.jiuxian.com/bill/2019/0709/b68ec596ef4c413286f201dfd66ffcbb.jpg"
                                                                 className="recommendpic"/>
                                                    </a>
                                            </div>

                                            <div className="swiper-slide">
                                                    <a href="#">
                                                            <img src="https://img08.jiuxian.com/bill/2019/0710/472834b0fcba4955a4d04bc2aeaa34d2.jpg"
                                                                 className="recommendpic"/>
                                                    </a>
                                            </div>

                                            <div className="swiper-slide">
                                                    <a href="#">
                                                            <img src="https://img10.jiuxian.com/bill/2019/0708/de1c458925f64a41ae06595924fe9d3c.jpg"
                                                                 className="recommendpic"/>
                                                    </a>
                                            </div>

                                            <div className="swiper-slide">
                                                    <a href="#">
                                                            <img src="https://img06.jiuxian.com/bill/2019/0705/fbef7aee05d74a2a92389bc3444ab105.jpg"
                                                                 className="recommendpic"/>
                                                    </a>
                                            </div>


                                            <div className="swiper-slide">
                                                    <a href="#">
                                                            <img src="https://img10.jiuxian.com/bill/2019/0710/e9c35837a3c044298fa8e1021aecfc33.jpg"
                                                                 className="recommendpic"/>
                                                    </a>
                                            </div>

                                            <div className="swiper-slide">
                                                    <a href="#">
                                                            <img src="https://img10.jiuxian.com/bill/2019/0701/317f631bc29148b2aa7feb31714b1578.jpg"
                                                                 className="recommendpic"/>
                                                    </a>
                                            </div>

                                            <div className="swiper-slide">
                                                    <a href="#">
                                                            <img src="https://img06.jiuxian.com/bill/2019/0705/e0c1fe317ab2460fb370654a3b1ef9d5.jpg"
                                                                 className="recommendpic"/>
                                                    </a>
                                            </div>

                                            <div className="swiper-slide">
                                                    <a href="#">
                                                            <img src="https://img09.jiuxian.com/bill/2019/0707/91be6f9dd54c4c2cbd2090b5695cd4e3.jpg"
                                                                 className="recommendpic"/>
                                                    </a>
                                            </div>


                                            <div className="swiper-slide">
                                                    <a href="#">
                                                            <img src="https://img09.jiuxian.com/bill/2019/0612/ec681ea7fae240499a407012ca79a3c7.jpg"
                                                                 className="recommendpic"/>
                                                    </a>
                                            </div>

                                    </div>
                            </div>
                    </div>
                    <div className="fourpic">
                            <a href="">
                                    <img src="https://img07.jiuxian.com/bill/2019/0617/f97481907a4a44578ba12a1399f3e0c9.jpg"
                                         style={{width:"100%"}}/>
                            </a>
                            <a href="https://m.jiuxian.com/mobile/2019/2019GT/index.html">
                                    <img src="https://img09.jiuxian.com/bill/2019/0626/4f9bfb05033c44059aad5533479478d6.jpg"
                                         style={{width:"100%"}}/>
                            </a>
                            <a href="https://shop.jiuxian.com/show/wap/viewShopIndex.htm?viewType=2&amp;shopId=1385">
                                    <img src="https://img08.jiuxian.com/bill/2019/0710/45428c57f64643db8375d0fe6132a3d8.jpg"
                                         style={{width:"100%"}}/>
                            </a>
                            <a href="https://m.jiuxian.com/mobile/2019/JGJ/index.html">
                                    <img src="https://img06.jiuxian.com/bill/2019/0624/a1eb933b54f949e2ad432a4e6186272d.JPG"
                                         style={{width:"100%"}}/>
                            </a>
                    </div>
                    <div className="home_jingxuan">
                            <img src="https://img08.jiuxian.com/bill/2018/0504/3b79febef26042daacd65629b8d4cecf.jpg"
                                 style={{width:"100%"}}/>
                            <div className="jingxuan1">
                                    <img className="jingxuan1_1" src="https://img06.jiuxian.com/bill/2018/1116/e6f8a6a838b345fdb2a24db4bb5a19f2.jpg"/>
                                    <img className="jingxuan1_2" src="https://img06.jiuxian.com/bill/2018/1116/44ea9eb1afc24e108ee34169d5bca895.jpg"/>
                            </div>
                            <div className="jingxuan2">
                                    <img className="jingxuan2_1" src="https://img06.jiuxian.com/bill/2018/1116/eda5f20bea97425fa2c4da6130101d0d.jpg"/>
                                    <img className="jingxuan2_2" src="https://img06.jiuxian.com/bill/2019/0524/eca21af27b9643a18ee356a4972bb37d.jpg"/>
                                    <img className="jingxuan2_3" src="https://img07.jiuxian.com/bill/2019/0401/0b8f7b1d41c842ccafd16d9651ab6d3a.jpg"/>
                            </div>
                    </div>
                    <div className="baijiuguan">
                            <img src="https://img07.jiuxian.com/bill/2018/0504/4693b96b2e244c0e88636247c4044795.jpg"
                                 style={{width:"100%"}}/>
                            <div className="baijiuguan_con">
                                    <img className="con_lft" src="https://img06.jiuxian.com/bill/2019/0506/ff80c650ce344a09904eada48b8ac9e4.jpg"/>
                                    <div className="con_right">
                                            <img className="con_right1" src="https://img09.jiuxian.com/bill/2018/1210/de1e4bceafe54493b0b844ea79a1c179.jpg"/>
                                            <div className="con_right2">
                                                    <img className="con_right2_1" src="https://img10.jiuxian.com/bill/2018/1116/d5ac428dcf9b42fcb3f7a0b0bef71354.jpg"/>
                                                    <img className="con_right2_2" src="https://img08.jiuxian.com/bill/2019/0114/95415ff5ec404e64a548acc5e0baae86.jpg"/>
                                            </div>
                                    </div>
                            </div>
                            <div className="slide4">
                                    <div className="swiper-container4">
                                            <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img09.jiuxian.com/bill/2016/1118/8fe8ce3934814bfcab6fe95f148c9525.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2016/1118/62dd0d533ef94f3c8a8cfb9883fd9c10.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2019/0114/12ee3b5cc6f145739f9b7055b41fe79f.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2017/0406/d1404eeec935421c8b850daa94f140f3.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img08.jiuxian.com/bill/2016/1214/03d76b0ca9c8498a8ddabcd9480f21a8.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2018/0316/5fb276790e024574a049035d47f6d3de.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img10.jiuxian.com/bill/2017/1017/477e11cc54ba44859062bbbcc76747f5.jpg"/>
                                                    </div>

                                            </div>
                                    </div>
                            </div>
                    </div>

                    <div className="baijiuguan">
                            <img src="https://img07.jiuxian.com/bill/2018/0504/4693b96b2e244c0e88636247c4044795.jpg"
                                 style={{width:"100%"}}/>
                            <div className="baijiuguan_con">
                                    <img className="con_lft" src="https://img06.jiuxian.com/bill/2019/0506/ff80c650ce344a09904eada48b8ac9e4.jpg"/>
                                    <div className="con_right">
                                            <img className="con_right1" src="https://img09.jiuxian.com/bill/2018/1210/de1e4bceafe54493b0b844ea79a1c179.jpg"/>
                                            <div className="con_right2">
                                                    <img className="con_right2_1" src="https://img10.jiuxian.com/bill/2018/1116/d5ac428dcf9b42fcb3f7a0b0bef71354.jpg"/>
                                                    <img className="con_right2_2" src="https://img08.jiuxian.com/bill/2019/0114/95415ff5ec404e64a548acc5e0baae86.jpg"/>
                                            </div>
                                    </div>
                            </div>
                            <div className="slide4">
                                    <div className="swiper-container4">
                                            <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img09.jiuxian.com/bill/2016/1118/8fe8ce3934814bfcab6fe95f148c9525.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2016/1118/62dd0d533ef94f3c8a8cfb9883fd9c10.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2019/0114/12ee3b5cc6f145739f9b7055b41fe79f.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2017/0406/d1404eeec935421c8b850daa94f140f3.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img08.jiuxian.com/bill/2016/1214/03d76b0ca9c8498a8ddabcd9480f21a8.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2018/0316/5fb276790e024574a049035d47f6d3de.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img10.jiuxian.com/bill/2017/1017/477e11cc54ba44859062bbbcc76747f5.jpg"/>
                                                    </div>

                                            </div>
                                    </div>
                            </div>
                    </div>
                    <div className="baijiuguan">
                            <img src="https://img07.jiuxian.com/bill/2018/0504/4693b96b2e244c0e88636247c4044795.jpg"
                                 style={{width:"100%"}}/>
                            <div className="baijiuguan_con">
                                    <img className="con_lft" src="https://img06.jiuxian.com/bill/2019/0506/ff80c650ce344a09904eada48b8ac9e4.jpg"/>
                                    <div className="con_right">
                                            <img className="con_right1" src="https://img09.jiuxian.com/bill/2018/1210/de1e4bceafe54493b0b844ea79a1c179.jpg"/>
                                            <div className="con_right2">
                                                    <img className="con_right2_1" src="https://img10.jiuxian.com/bill/2018/1116/d5ac428dcf9b42fcb3f7a0b0bef71354.jpg"/>
                                                    <img className="con_right2_2" src="https://img08.jiuxian.com/bill/2019/0114/95415ff5ec404e64a548acc5e0baae86.jpg"/>
                                            </div>
                                    </div>
                            </div>
                            <div className="slide4">
                                    <div className="swiper-container4">
                                            <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img09.jiuxian.com/bill/2016/1118/8fe8ce3934814bfcab6fe95f148c9525.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2016/1118/62dd0d533ef94f3c8a8cfb9883fd9c10.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2019/0114/12ee3b5cc6f145739f9b7055b41fe79f.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2017/0406/d1404eeec935421c8b850daa94f140f3.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img08.jiuxian.com/bill/2016/1214/03d76b0ca9c8498a8ddabcd9480f21a8.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2018/0316/5fb276790e024574a049035d47f6d3de.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img10.jiuxian.com/bill/2017/1017/477e11cc54ba44859062bbbcc76747f5.jpg"/>
                                                    </div>

                                            </div>
                                    </div>
                            </div>
                    </div>
                    <div className="baijiuguan">
                            <img src="https://img07.jiuxian.com/bill/2018/0504/4693b96b2e244c0e88636247c4044795.jpg"
                                 style={{width:"100%"}}/>
                            <div className="baijiuguan_con">
                                    <img className="con_lft" src="https://img06.jiuxian.com/bill/2019/0506/ff80c650ce344a09904eada48b8ac9e4.jpg"/>
                                    <div className="con_right">
                                            <img className="con_right1" src="https://img09.jiuxian.com/bill/2018/1210/de1e4bceafe54493b0b844ea79a1c179.jpg"/>
                                            <div className="con_right2">
                                                    <img className="con_right2_1" src="https://img10.jiuxian.com/bill/2018/1116/d5ac428dcf9b42fcb3f7a0b0bef71354.jpg"/>
                                                    <img className="con_right2_2" src="https://img08.jiuxian.com/bill/2019/0114/95415ff5ec404e64a548acc5e0baae86.jpg"/>
                                            </div>
                                    </div>
                            </div>
                            <div className="slide4">
                                    <div className="swiper-container4">
                                            <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img09.jiuxian.com/bill/2016/1118/8fe8ce3934814bfcab6fe95f148c9525.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2016/1118/62dd0d533ef94f3c8a8cfb9883fd9c10.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2019/0114/12ee3b5cc6f145739f9b7055b41fe79f.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2017/0406/d1404eeec935421c8b850daa94f140f3.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img08.jiuxian.com/bill/2016/1214/03d76b0ca9c8498a8ddabcd9480f21a8.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img06.jiuxian.com/bill/2018/0316/5fb276790e024574a049035d47f6d3de.jpg"/>
                                                    </div>
                                                    <div className="swiper-slide">
                                                            <img className="baijiuguan_pic" src="https://img10.jiuxian.com/bill/2017/1017/477e11cc54ba44859062bbbcc76747f5.jpg"/>
                                                    </div>

                                            </div>
                                    </div>
                            </div>
                    </div>

                    <div className="topic">
                            <img src="https://img10.jiuxian.com/bill/2018/0504/6dba580b72164560b8fd47fc81f396b5.jpg"
                                 style={{width:"100%"}}/>
                            <div className="topic_con">
                                    <img className="topic_pic" src="https://img07.jiuxian.com/bill/2018/0504/657126212d0540c8bbac602c77d5955c.jpg"/>
                                    <img className="topic_pic" src="https://img06.jiuxian.com/bill/2018/0504/aced73aca3854aeea7aa14e53d641dcb.jpg"/>
                                    <img className="topic_pic" src="https://img06.jiuxian.com/bill/2018/0504/aced73aca3854aeea7aa14e53d641dcb.jpg"/>
                                    <img className="topic_pic" src="https://img09.jiuxian.com/bill/2018/1119/c3297cff4d2a4fdda61fef3570b3672b.png"/>
                                    <img className="topic_pic" src="https://img06.jiuxian.com/bill/2018/1120/551470f5b99b497ea40b042728c31319.jpg"/>
                                    <img className="topic_pic" src="https://img09.jiuxian.com/bill/2019/0603/17b1d00a75e64754aba095a14fcbeb67.jpg"/>
                                    <img className="topic_pic" src="https://img09.jiuxian.com/bill/2018/0504/bb26185e3e514fe18422089dff85f320.jpg"/>
                                    <img className="topic_pic" src="https://img06.jiuxian.com/bill/2018/0613/fd423ab042ec45e0ae46aa8c3676ed1a.jpg"/>

                            </div>

                    </div>
                    <Hot></Hot>

                    <div className="gotop" style={{display:document.documentElement.scrollTop>667?"block":"none"}}>
                            <i className="iconfont icon-fanhuidingbu" onClick={this.gotop.bind(this)}>

                            </i>
                    </div>




            </div>
        )
    }
    componentDidMount(){
      
        axios.get("/jiuxian/m_v1/promote/qgajax.do?t=1562724773679&pagenum=1&tabnum=1")
            .then(({data}) => {
                // console.log("12324324",data)
                this.setState({
                    killProList : data.killProList
                })
                // console.log(this.state.killProList)
                var mySwiper2 = new Swiper ('.swiper-container2', {
                   /* freeMode:true, */ //开启自由模式
                    slidesPerView:'auto'
                })
            })

        var mySwiper1 = new Swiper ('.swiper-container1', {
            autoplay:true,
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
        })
        var mySwiper3 = new Swiper ('.swiper-container3', {
            freeMode:true,
            slidesPerView:'auto'
        })
        var mySwiper4 = new Swiper ('.swiper-container4', {
            freeMode:true,
            slidesPerView:'auto'
        })

        //监听滚动,来控制头部北京颜色和返回顶部按钮的显示
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }
    componentWillUnmount() {
        //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
        window.removeEventListener('scroll', this.handleScroll.bind(this))
    }
    //返回顶部的方法
    gotop(e){
        if(document.documentElement.scrollTop>667){
            document.documentElement.scrollTop=0;
        }
        console.log(document.documentElement.scrollTop)
    }
    //浏览器监听事件，监听滚动条变化
    handleScroll = e => {
        /*console.log(
            '浏览器滚动事件',
            e.srcElement.scrollingElement.scrollTop,
            e.srcElement.scrollingElement.scrollHeight
        )*/
        //e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
        // e.srcElement.scrollingElement.scrollHeight为整个文档高度

        this.setState({
            top:e.srcElement.scrollingElement.scrollTop
        })

    }

    scroll(e) {
        console.log(2222222,e)
        this.setState({
            top: document.documentElement.scrollTop
        })
        console.log(111111111,this.state.top)
        console.log(2222222,e)
    }
}
