import React, { Component } from 'react'
import {
    Route
} from "react-router-dom";
import RouteList from './RouteList'
export default class route extends Component {
    render() {
        return (
            <div>
                {
                    RouteList.map((v, i) => {
                        return (<Route {...v} key={i}></Route>)
                    })
                }
            </div>

        )
    }
}
