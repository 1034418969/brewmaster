import React,{Component} from "react"
import axios from "axios"
export default class History extends Component{
    constructor(props) {
        super(props);
        this.state = {
            historys:[],
            a:1,
        }
    }
    render(){
        return(
            <div>
                <div style={{height: "0.4rem", background: "#de4943", color:" #fff",
                    display:"flex",justifyContent:"space-between",paddingLeft:"0.05rem",paddingRight:"0.05rem",
                    position: "fixed",zIndex: "999999", width: "98%"}}>
                    <i onClick={()=>{
                        this.props.history.push("my")
                    }} style={{marginTop:"0.1rem"}} className="iconfont icon-fanhui"></i>
                    <span style={{marginTop:"0.1rem",fontSize:".14rem"}}>浏览历史</span>
                    <i style={{marginTop:"0.1rem"}} className="iconfont icon-gengduo"></i>
                </div>
                <div style={{height: "0.4rem"}}></div>
                <div className="browseList">
                    <ul>
                        {
                            this.state.historys.map((v,i) => {
                                return (
                                    <li key={v.goods_id}>
                                        <img src={v.goods_thumb} alt=""/>
                                        <div>
                                            <p className="p1">{v.goods_name}</p>
                                            <p className="p2">价格:  <span
                                                style={{color: "red"}}> ¥{v.cur_price}.00</span></p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div onClick={this.change.bind(this,(this.state.a++))} className="lazytop">点击加载</div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.getHistoryList()
    }
    change(num){
        console.log(num)
        if(num<10){
            axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/150289?pageNum="+num)
                .then(({data})=>{
                    this.setState({
                        historys:this.state.historys.concat(data.goodsCate.list)
                    })
                    console.log(this.state.historys)
                })
        }
        else {
            alert("不要再点啦!!!!!!!!!")
        }
    }
    getHistoryList(){
        axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/150289?pageNum=1")
            .then(({data})=>{
                this.setState({
                    historys:data.goodsCate.list
                })
                console.log(this.state.historys)
            })

    }
}