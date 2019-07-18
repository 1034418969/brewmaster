import detailsInit from "../state/details "
export default function(state=detailsInit,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type==="UP_DEFAUIT"){
        state.details=payload.details;
        console.log(payload.details.goods_id)
        // let detailsId= state.find(v=>v.id === payload.details.id);
       
    }
    
    return state
}