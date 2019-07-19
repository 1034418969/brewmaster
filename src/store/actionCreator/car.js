export default {
    carDetail(goods){
        console.log(46487,goods)
        this.props.history.push({
            pathname:"/detail"
        })
        return (dispatch=>{
            localStorage.goods=''
            dispatch({
                type:"CAR_DETAIL",
                payload:{
                    goods
                }
            })
        })
    }
}