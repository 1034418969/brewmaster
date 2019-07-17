import React from "react"
import '../assets/css/Clear.css';
import ClearAction from "../store/actionCreator/clear"
import {
    bindActionCreators
} from "redux"
import {
    connect
} from "react-redux"
import TopLink from "./Clear/TopLink"
import ClearList from "./Clear/ClearList"
import ClearNav from "./Clear/ClearNav"
import IsLoading from "../components/common/isloading"
class Clearance extends React.Component {
    render() {
        return (
            <div className="clear-container">
                <TopLink></TopLink>
                <ClearNav></ClearNav>
                    {
                        // 下面组件双列显示列表
                    }
                    <ClearList {...this.props}></ClearList>
                {
                    this.props.isLoading?<IsLoading></IsLoading>:<input type="button" value="加载更多" onClick={() => { this.props.getClearList(this.props.pageNum / 1 + 1,true) }} />
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getClearList(1)
        console.log(this.props)
    }
}
function mapStateToProps(state) {
    // console.log(state.clear.pageNum)
    return {
        list: state.clear.list,
        pageNum: state.clear.pageNum,
        isLoading:state.clear.isLoading,
        saleAll:state.clear.saleAll
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ClearAction,dispatch)
    // {//另一种写法
    //     getClearList(pageNum = 1) {
    //         dispatch(ClearAction.getClearList(pageNum))
    //     }
    // }
}
export default connect(mapStateToProps, mapDispatchToProps)(Clearance);
// https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=1