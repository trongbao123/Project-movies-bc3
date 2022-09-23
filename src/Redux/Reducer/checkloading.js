import { DISPLAY_LOADING, HIDE_LOADING } from "../types/LoadingTypes";

const stateDefault = {
    isLoading :false
}


export const loadingRducer = (state = stateDefault,action)=>{
    switch (action.type) {
        case DISPLAY_LOADING:{
            state.isLoading = true
            console.log(state.isLoading,'loading thành công')
            return {...state}
        }
        case HIDE_LOADING:{
            state.isLoading = false;
            return {...state}
        }
    
        default: return {...state}
           
    }
} 