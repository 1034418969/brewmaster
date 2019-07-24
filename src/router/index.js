import React, { Component } from 'react'
import {
    withRouter
} from "react-router-dom";
class tz extends Component {
    render() {
        return (
            <this.props.component history={this.props.history}></this.props.component>
        )
    }
    componentDidMount(){
        if(this.props.isShow){
            if(!localStorage.user){
                this.props.history.push("/login")
            }
        }
        
    }
}
export default withRouter(tz)