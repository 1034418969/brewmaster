import stateInit from "../state/goods"
export default function(state=stateInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type==="ADD_GOODS"){
        state.id=payload.id;
        state.goodsName=payload.goodsName;
        state.curPrice=payload.curPrice;
        state.shopPrice=payload.shopPrice;
        state.goodsImg=payload.goodsImg;
        state.goodsTitle=payload.goodsTitle;  
    }
    // 购物车添加商品
    if(type==="ADD_CARGOODS"){
        console.log(payload)
        state = payload.goods;
    }
    if(type=== "CAR_DETAIL"){
        console.log(121221,payload)
        state.id=payload.id;
        state.goodsName=payload.goods.goodsName;
        state.curPrice=payload.goods.curPrice;
        state.shopPrice=payload.goods.shopPrice;
        state.goodsImg=payload.goods.goodsImg;
        state.goodsTitle=payload.goods.goodsTitle; 
    }
    return state;
}
