import { ThongTinLichChieu } from "../../Core/models/thongtinphongve";
import { CHANGE_TAB_ACTIVE, CHUYEN_TAB, DAT_GHE, DAT_VE_HOAN_TAT, QL_DAT_VE } from "../types/QlDatVeTypes";

const stateDefault = {
    Chitietdatve: new ThongTinLichChieu(),
    danhsachghedangdat:[
        // {      
        //       giaVe: 90000 ,loaiGhe: "Vip",maGhe: 57999,maRap: 517,tenGhe: "39",stt:"39"
        // }
    ],
    ghekhachdat:[{maGhe: 58061},{maGhe: 58063}],
    tabActive:1

};

    export const QuanLyDatVeReducer = (state=stateDefault,action)=>{
        switch (action.type) {
            
            case QL_DAT_VE: {
                state.Chitietdatve = action.Chitietdatve;
                return {...state}
            }
            
            case DAT_GHE:{
                let danhsachgheupdate = [...state.danhsachghedangdat]
                let index = danhsachgheupdate.findIndex(gheDangDat=>gheDangDat.maGhe === action.gheDuocChon.maGhe);
                if (index!=-1) {
                    // tìm thấy ghế dc chọn => xóa
                    danhsachgheupdate.splice(index,1)
                }else{
                    // chưa thấy thêm ghế vào
                    danhsachgheupdate.push(action.gheDuocChon);
                }
                console.log('ob',action)
                return{...state, danhsachghedangdat:danhsachgheupdate}
            }
            
            case DAT_VE_HOAN_TAT:{
                state.danhsachghedangdat=[];
                return {...state}
            }

            case CHUYEN_TAB:{
                state.tabActive = 2
                return {...state}
            }
            case CHANGE_TAB_ACTIVE:{
                console.log('action',action)
                state.tabActive = action.number
                return {...state}
            }
            default : return{...state}
        }
    }