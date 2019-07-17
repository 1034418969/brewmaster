import React, { Component } from 'react'
import {
    connect
} from "react-redux"
class My extends Component {
    render() {
        return (
            <div>
                My
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
function mapDispatchToProps(dispatch){
    return {
        shop(){
            console.log(111)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(My);