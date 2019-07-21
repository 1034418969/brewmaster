import React,{Component} from "react"
export default class Initwallet extends Component{
    render(){
        return(
            <div>
                <div style={{height: "0.4rem", background: "#de4943", color:" #fff",
                    display:"flex",justifyContent:"space-between",paddingLeft:"0.05rem",paddingRight:"0.05rem"}}>
                    <i onClick={()=>{
                        this.props.history.push("my")
                    }} style={{marginTop:"0.1rem"}} className="iconfont icon-fanhui"></i>
                    <span style={{marginTop:"0.1rem",fontSize:".14rem"}}>我的钱包</span>
                    <i style={{marginTop:"0.1rem"}} className="iconfont icon-gengduo"></i>
                </div>
                <div>
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                    这里没钱
                </div>
            </div>
        )
    }
}