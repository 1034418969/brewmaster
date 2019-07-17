import stateInit from "../state/goods"
import goods from "../state/goods";
export default function(state=stateInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type==="ADD_GOODS"){
        console.log(2222,payload)
        state.id=payload.id;
        state.goodsName=payload.goodsName;
        state.curPrice=payload.curPrice;
        state.shopPrice=payload.shopPrice;
        state.goodsImg=payload.goodsImg;
        state.goodsTitle=payload.goodsTitle;  
        console.log(1111111,state)
    }
    return state;
}