import React from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './Carouse.css'
class Carouse extends React.Component{
    constructor (){
        super();
    }
    render(){
        return (
            <div className='swiper'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href="">
                                <img src="https://img10.jiuxian.com/bill/2019/0704/166a597b18bc4e978cbe7fb8603ebc87.jpg"
                                     className="swiper-lazy"
                                     style={{width:"100%" ,height:"1.80rem"}}/>
                            </a>
                        </div>

                        <div className="swiper-slide">
                            <a href="">
                                <img src="https://img06.jiuxian.com/bill/2019/0704/0f632c095c1b4cc79eb8e60eb1bb3026.jpg"
                                     className="swiper-lazy"
                                     style={{width:"100%" ,height:"1.80rem"}}/>
                            </a>
                        </div>

                        <div className="swiper-slide">
                            <img src="https://img06.jiuxian.com/bill/2019/0709/8ed09ad4207f49b69918380c343a2239.jpg"
                                 className="swiper-lazy"
                                 style={{width:"100%" ,height:"1.80rem"}}/>
                        </div>

                        <div className="swiper-slide">
                            <img src="https://img10.jiuxian.com/bill/2019/0704/f4414ebbee924ea6b9212957821f394f.jpg"
                                 className="swiper-lazy"
                                 style={{width:"100%" ,height:"1.80rem"}}/>
                        </div>

                        <div className="swiper-slide">
                            <img src="https://img06.jiuxian.com/bill/2019/0707/6c216dfe851c49ad9ee4c4aaa9dfcb00.jpg"
                                 className="swiper-lazy"
                                 style={{width:"100%" ,height:"1.80rem"}}/>
                        </div>

                        <div className="swiper-slide">
                            <img src="https://img07.jiuxian.com/bill/2019/0706/cfb46b5216694dc384995e4dacc263de.jpg"
                                 className="swiper-lazy"
                                 style={{width:"100%" ,height:"1.80rem"}}/>
                        </div>

                    </div>

                    <div className="swiper-pagination"></div>






                </div>
            </div>
        )
    }

    componentDidMount(){
        var mySwiper = new Swiper ('.swiper-container', {
            autoplay:true,
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },



        })
    }
}

export default Carouse;