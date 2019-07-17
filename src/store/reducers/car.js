import stateInit from "../state/car"
export default function (state = stateInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state));
    if (type === "DEL_GOODS") {
         state.lis = state.list.filter((v) => {
            return v.id !== "id";
        })
    }
    return state;
}