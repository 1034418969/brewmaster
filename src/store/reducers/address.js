import addressInit from "../state/details "
export default function(state=addressInit,action){
    state=JSON.parse(JSON.stringify(state))
    return state
}