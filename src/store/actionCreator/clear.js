import axios from "axios";
import common from "./common"
import {CLEAR_LIST,CLEAR_NUM} from "../actionType/clear"
export default {
    getClearList(pageNum,isLoading) {
        return (dispatch => {
            //第二次加载下的话加载重新设置isloading
            dispatch(common.changeIsLoading(isLoading))
                axios.get("https://m.jiuxian.com/m_v1/dynamic/mob01ajax/151763?pageNum=" + pageNum)
                    .then(({ data }) => {
                        dispatch({
                            type: CLEAR_LIST,
                            payload: {
                                clearGoods: data.goodsCate.list
                            }
                        })
                        dispatch({
                            type: CLEAR_NUM,
                            payload: {
                                pageNum
                            }
                        })
                        dispatch({
                            type: "CLEAR_ISLOADING",
                            payload: {
                                isLoading: false
                            }
                        })
                    })

        })
    }
}