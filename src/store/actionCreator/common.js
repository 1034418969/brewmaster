import {CHANGE_IS_LOADING} from "../actionType/clear"
export default {
    changeIsLoading(isLoading){
        return {
            type:CHANGE_IS_LOADING,
            payload:{
                isLoading
            }
        }
    }
}