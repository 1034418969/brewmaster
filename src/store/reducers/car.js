import stateInit from "../state/car"
export default function(state=stateInit,cation){
    state = JSON.parse(JSON.stringify(state));

    
    return state;
}