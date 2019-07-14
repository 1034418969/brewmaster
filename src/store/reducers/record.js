import stateInit from "../state/record"
export default function(state=stateInit,cation){
    state = JSON.parse(JSON.stringify(state));

    
    return state;
}