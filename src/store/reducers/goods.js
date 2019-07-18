import stateInit from "../state/goods"
export default function(state=stateInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    console.log(state)
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
    // 购物车添加商品
    if(type==="ADD_CARGOODS"){
        console.log(payload)
        state = payload.goods;
    }
    console.log(state)
    return state;
}
