import React, { Component } from 'react'
import TabBarExample from '../components/TabBarExample';
import Home from '../views/Home';
import My from '../views/My';
import Car from '../views/Car';
import Clearance from '../views/Clearance';
import Category from '../views/Category';
import { 
    BrowserRouter as Router,
    Route,
  
   } from "react-router-dom";
export default class test extends Component {
    render() {
        return (
            <div>
            <Route exact path={'/'}  component={Home}></Route>
            <Route exact path={'/home'}  component={Home}></Route>
            <Route exact path={'/car'}  component={Car}></Route>
            <Route exact path={'/clearance'}  component={Clearance}></Route>
            <Route exact path={'/category'}  component={Category}></Route>
            <Route exact path={'/my'}  component={My}></Route>

            <TabBarExample history={this.props.history}></TabBarExample>
            </div>
        )
    }
    componentDidMount(){
        console.log(this,"1111111111")
    }
}
