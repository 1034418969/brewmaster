import stateInit from "../state/order"
export default function(state=stateInit,cation){
    state = JSON.parse(JSON.stringify(state));

    
    return state;
}