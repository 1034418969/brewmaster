import React from "react"
import "../../assets/css/Clear.css"
import {
    withRouter
}from "react-router-dom"
class TopLink extends React.Component{
    render(){
        return(
            <div className="top-link">
                <span onClick={this.toHome.bind(this)}>&lt;</span>
                <span>裸价清仓</span>
                <i>&gt;</i>
            </div>
        )
    }
    toHome(){
        this.props.history.push("/")
    }
}
export default withRouter(TopLink);