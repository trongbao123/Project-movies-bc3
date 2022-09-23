import { SET_SAP_CHIEU, SET_START_FILM } from "../types/ButtonFilmTypes";
import { THONG_TIN_RAP } from "../types/HeThongRap";
import { SET_QLPHIM,  THONG_TIN_PHIM } from "../types/Quanlyphimtype"

const stateDefault = {
    Filmarr:[
        {
            "maPhim": 1347,
            "tenPhim": "Inside Out phần 4",
            "biDanh": "inside-out-phan-4",
            "trailer": "https://www.youtube.com/embed/seMwpP0yeu4",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/inside-out-2s59_gp04.jpg",
            "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
            "maNhom": "GP04",
            "ngayKhoiChieu": "2022-06-13T22:32:38.5",
            "danhGia": 12,
            "hot": true,
            "dangChieu": false,
            "sapChieu": false
          },
    ],
    dangChieu:true,
    sapChieu:true,

    filmarrcopy:[],

    ThongTinRapArray:[
 
    ],
    thongtinPhim:[{}]

}

export const QuanLyPhimReducer = (state=stateDefault, action)=>{
    switch (action.type) {
        case SET_QLPHIM:{
            state.Filmarr = action.Filmarr;
            state.filmarrcopy = action.Filmarr;
            return{...state}
        }
            
        case SET_START_FILM: {
            state.dangChieu =! state.dangChieu
            state.Filmarr = state.filmarrcopy.filter(film => film.dangChieu === state.dangChieu);
            return {...state}
        }
            
        case SET_SAP_CHIEU:{
            state.sapChieu =! state.sapChieu
            state.Filmarr= state.filmarrcopy.filter(film => film.sapChieu === state.sapChieu);
            return {...state}
        }      
    
        case THONG_TIN_RAP:{
            state.ThongTinRapArray = action.ThongTinRapArray;
            return {...state}
        }    
        
        case THONG_TIN_PHIM:{
            state.thongtinPhim = action.thongtinPhim
            return{...state}
        }
        default: return{...state}
    }
}