import React,{Component} from "react"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class Usersafe extends Component{
    render(){
        return(
            <div className='banner'>
                <div style={{height: "0.4rem", background: "#de4943", color:" #fff",
                    display:"flex",justifyContent:"space-between",paddingLeft:"0.05rem",paddingRight:"0.05rem",
                    position: "fixed",zIndex: "999999", width: "98%"}}>
                    <i onClick={()=>{
                        this.props.history.push("my")
                    }} style={{marginTop:"0.1rem"}} className="iconfont icon-fanhui"></i>
                    <span style={{marginTop:"0.1rem",fontSize:".14rem"}}>试玩swiper</span>
                    <i style={{marginTop:"0.1rem"}} className="iconfont icon-gengduo"></i>
                </div>
                <div style={{height: "0.4rem"}}></div>
                <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                        <div className="swiper-slide"><img style={{width:"200px",height:"50px"}}  src="http://pic51.nipic.com/file/20141025/8649940_220505558734_2.jpg"/></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container',{
            loop : true,
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
}