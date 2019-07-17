import React from "react"
import '../../assets/css/Detail.css';
import iconfont from "../../assets/font/iconfont.css"


import{
    connect
} from "react-redux"
class Connect extends React.Component{
    constructor(){
        super()
        this.state={
            one:[],            
            
        }
    }

    render(){
        return(
            <div className="App">
                <div className="nav">
                   <span>&lt;</span>
                   <span>配送地址</span>
                   <span className="iconfont icon-gengduo"></span>
                </div>
                <div className="navy">
                   <div className="navy_1">
                     <p className="frame receiver">
                     <span>收货人：</span>
                     <input type="text" name="consignee"/>
                     </p>
                     <p className="frame tel">
                     <span>手机号码：</span>
                     <input type="text" name="mobile"  />
                     </p>
                     <p className="frame fixedTel">
                     <span>固定电话（选填）：</span>
                     <input type="text" name="fixedTel"/>
                     </p>
                     <div className="frame area">
                     <span className="position">所在地区:</span>
                     <div className="selectArea">
                      <select  name="province" >
                        <option value={"0"}>请选择</option>  
                      </select>
                      <select  name="city" >
                        <option value={"0"}>请选择</option> 
                      </select>
                      <select  name="district">
                        <option value={"0"}>请选择</option>
                      </select>
                     </div>
                     </div>
                     <p className="frame street">
                       <span>详细地址：</span>
	                   <input type="text" name="address" />
                     </p>
                     
                   </div>
                </div>
                <input type="submit" className="btn" value={"确认"} style={{borderRadius: "5px"}}></input>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.state.data)
        //this.props.getAddress()
        console.log(111111111111111111)
        
    }
}
function mapStateToProps(state){
    return{
        address:state.address
    }
    

}
function mapDispatchToProps(dispatch){
    return{
        // getAddress(){
        //     ///jiuxian/m_v1/dynamic/mob01ajax/151763?pageNum=2 "https://m.jiuxian.com
        //     //https://mmember.jiuxian.com/address/getRegionList?province_id=3
        //     axios.get("").then(({data})=>{
        //         console.log(data)
        //     })
        // }
        
    }

}
export default connect(mapStateToProps,mapDispatchToProps) (Connect);
// export default Connect;