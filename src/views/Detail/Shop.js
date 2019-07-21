import React,{Component} from "react"
class Shop extends Component{
    componentWillMount(){
        if(!localStorage.user){
            this.props.history.push("/login")
        }
    }
    render(){
        return(
            <div>你好我是店铺客服</div>
        )
    }
}
export default Shop;