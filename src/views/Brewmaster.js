import React, { Component } from 'react'
import "../assets/css/Brewmaster.css"
import TabBarExample from '../components/TabBarExample';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Routers from '../router'
export default class test extends Component {
    render() {
        return (
            <div id="brewmaster">
                <Router>
                    <div id="main">
                        <Routers></Routers>
                    </div>
                    <TabBarExample history={this.props.history}></TabBarExample>
                </Router>
            </div>
        )
    }
    componentDidMount() {
        console.log(this, "1111111111")
    }
}
