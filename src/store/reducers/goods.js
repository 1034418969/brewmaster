import stateInit from "../state/goods"
export default function(state=stateInit,cation){
    state = JSON.parse(JSON.stringify(state));

    
    return state;
}