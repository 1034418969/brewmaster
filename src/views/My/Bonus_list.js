import React,{Component} from "react"
export default class Bonus_list extends Component{
    render(){
        return(
            <div style={{height: "0.4rem", background: "#fff", color:" #000",
                display:"flex",justifyContent:"space-between",paddingLeft:"0.05rem",paddingRight:"0.05rem"}}>
                <i onClick={()=>{
                    this.props.history.push("/my")
                }} style={{marginTop:"0.1rem"}} className="iconfont icon-fanhui"></i>
                <span style={{marginTop:"0.1rem",fontSize:".14rem"}}>我的优惠券</span>
                <span style={{marginTop:"0.1rem"}}>添加</span>
            </div>
        )
    }
}