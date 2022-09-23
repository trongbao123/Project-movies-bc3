import { SET_HE_THONG_RAP, HE_THONG_RAP } from "../types/HeThongRap";

const stateDefault = {
    RapArr:[
    ],
  
   
};

    export const QuanLyRapReducer = (state=stateDefault,action)=>{
        switch (action.type) {
            
            case SET_HE_THONG_RAP: {
                state.RapArr = action.RapArr;
                return {...state}
            }

         
        
                
            
            default : return{...state}
        }
    }