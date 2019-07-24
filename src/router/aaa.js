import React, { Component } from 'react'
import {
    Route,
    withRouter
} from "react-router-dom";
import RouteList from './RouteList'
import Tz from '.'
 class route extends Component {
    
    render() {
        return (
            <div className={"aaaa"}>
                {
                    RouteList.map((v, i) => {
                        return (<Route path={v.path} exact={v.exact}  render={()=><Tz {...v}></Tz>} key={i}></Route>)
                    })
                }
            </div>

        )
    }
    componentDidMount(){
        console.log()
        document.querySelector(".aaaa").onscroll = function(){
            console.log(this.props,6611161)
        }
        
    }
}
export default withRouter(route)