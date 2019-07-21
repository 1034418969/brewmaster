import React, { Component } from 'react'
import Top from '../components/toprouter'
import axios from 'axios'
import { clearInterval } from 'timers';
export default class Settlement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OK: true,
            djs:3
        }
    }
    componentWillMount() {
        console.log(this)
        axios.delete('/jx/Carjs', {
            data: {
                user: localStorage.user
            }
        }).then(({ data }) => {
            if (!data.ok) {
                this.setState({
                    OK: false
                },()=>{
                    var ioo = setInterval(()=>{
                        this.setState({
                            djs:this.state.djs-1
                        },()=>{
                            if(this.state.djs <= 0){
                                window.clearInterval(ioo);
                                this.setState({
                                    OK: true
                                })
                                this.props.history.push('/car')
                            }
                        })
                    },1000)
                })
            }
        })
    }
    render() {
        return (
            <div>
                <Top></Top>
                <h1 style={{ textAlign: 'center', fontSize: '30px', marginTop: '0.5rem', display: this.state.OK ? 'block' : 'none' }}>支付成功</h1>
                <div style={{ textAlign: 'center', fontSize: '30px', marginTop: '0.5rem', display: this.state.OK ? 'none' : 'block' }}>
                    <span>支付失败</span><br/>
                    <span>转到购物车<i>{this.state.djs}</i></span>
                </div>
            </div>
        )
    }
}
