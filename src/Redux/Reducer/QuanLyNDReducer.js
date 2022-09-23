
import { TOKEN, USER_LOGIN, USER_REGISTER} from "../../util/setting/config";
import { LAY_Loai_ND, LAY_THONG_TIN_ND, LS_DAT_VE, QL_ND, QL_ND_DK, THONG_TIN_ND, THONG_TIN_TK_ND } from "../types/QuanLyNDTypes";

let userRegister = {

};

let user = {

}


if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
 
}






const stateDefault = {
    userlogin:user,
    thongtinnguoidung:{},
    userRigester:userRegister,
    qlnguoidung:[],
    dsloaiNd:[],
    LayTHongTinTkCuaND:{},
}

    export const QLNDReducer = (state=stateDefault,action)=>{
        switch (action.type) {
            
            case QL_ND: {
      
                const {ttDangNhap} = action;
                localStorage.setItem(USER_LOGIN,JSON.stringify(ttDangNhap));
                localStorage.setItem(TOKEN,ttDangNhap.accessToken);
                console.log(TOKEN,'localstorange')
                return {...state,userlogin:ttDangNhap}
            }
             
            case QL_ND_DK:{
               state.userRigester = action.userRegister
             
                return {...state}
            }
       
            case LS_DAT_VE:{
                state.thongtinnguoidung = action.thongtinnguoidung
                return{...state}
            }

            case LAY_THONG_TIN_ND:{
                state.qlnguoidung = action.qlnguoidung
                return{...state}
            }

            case LAY_Loai_ND:{
                state.dsloaiNd = action.dsloaiNd
                return{...state}
            }

            case THONG_TIN_TK_ND:{
                state.LayTHongTinTkCuaND = action.LayTHongTinTkCuaND
                return{...state}
            }
        
            default : return{...state}
        }
    }