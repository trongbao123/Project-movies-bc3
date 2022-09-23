import { SET_CAROUSEL } from "../types/CarouselTypes";

const stateDefault = {
    ImgArr:[
    {
        "maBanner": 1,
        "maPhim": 1282,
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
      },
    ]};

    export const CarouselReducer = (state=stateDefault,action)=>{
        switch (action.type) {
            
            case SET_CAROUSEL: {
                state.ImgArr = action.ImgArr;
                return {...state}
            }
                
                
        
            default : return{...state}
        }
    }