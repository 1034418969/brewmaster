import React, { Component } from 'react'
import "../assets/css/Brewmaster.css"
import TabBarExample from '../components/TabBarExample';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";

import Routers from '../router'
 class test extends Component {
    render() {
        return (
            <div id="brewmaster">
                <Router>
                    <div id="main">
                        <Routers></Routers>
                    </div>
                    <TabBarExample ></TabBarExample>
                </Router>
            </div>
        )
    }
}

  export default test
