//主题街跳转的页面

import React from 'react'
import axios from 'axios'
import '../../assets/css/topic.css'

class Topic extends React.Component{
    name:"topic"
    constructor(){
        super();
        this.state={
            typeNum:0,
            pageNum:0,
            topicgoodList:[]
        }
    }
    componentDidMount(){
        console.log(11,this.props.match.params.typeNum,this.props.match.params.pageNum)

        console.log(22,this.props.match.params.typeNum,this.props.match.params.pageNum)
        this.getDatas()
    }
    render(){
        return(
            <ul className="topic_wrap">
            {
                this.state.topicgoodList.map((v,i)=>{
                    return (
                        <li className="topic_onegood">
                            <img src={v.goods_thumb} className="topic_onegoodimg"/>
                            <p className="topic_onegoodname">{v.goods_name}</p>
                            <p className="topic_onegoodprice"><span>￥{v.cur_price}</span><span>￥{v.shop_price}</span></p>
                        </li>
                    )
                })

            }
            </ul>
        )
    }

    getDatas(){
        this.setState({
            typeNum:this.props.match.params.typeNum,
            pageNum:this.props.match.params.pageNum
        })
        axios.get('/jiuxian/m_v1/dynamic/mob01ajax/150739?pageNum=2').then(({data})=>{
        // axios.get('/jiuxian/m_v1/dynamic/mob01ajax/151746?pageNum=1').then(({data})=>{
            console.log("不同类型1",data)
            this.setState({
                topicgoodList:data.goodsCate.list
            })
        })
        console.log("不同类型",this.state.topicgoodList)
    }
}

export default Topic;

//https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151746? pageNum=2 共9页

