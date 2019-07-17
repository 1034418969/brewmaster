import initState from "../state/clear"
import {CLEAR_LIST,CLEAR_NUM,CLEAR_ISLOADING,CHANGE_IS_LOADING} from "../actionType/clear"
export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type===CLEAR_LIST){
       state.list=state.list.concat(payload.clearGoods); 
    }
    if(type===CLEAR_NUM){
        state.pageNum=payload.pageNum;
    }
    if(type===CLEAR_ISLOADING){
        state.isLoading=payload.isLoading;
    }
    if(type===CHANGE_IS_LOADING){
        state.isLoading=payload.isLoading;
    }
    return state;
}