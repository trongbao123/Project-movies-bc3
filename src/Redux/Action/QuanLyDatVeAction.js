import { ThongTinDatVe } from "../../Core/models/thongtindatve";
import { qldatve } from "../../Service/QuanLyDatVeServices";
import { DISPLAY_LOADING, HIDE_LOADING } from "../types/LoadingTypes";
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, QL_DAT_VE } from "../types/QlDatVeTypes";
import { DISPLAYLOADINGACTION, HIDELOADINGACTION } from "./loadingAction";

export const LayDSgheAction =  (ttghe) =>{
    // call api
    return async dispatch =>{
    try {
      dispatch(DISPLAYLOADINGACTION)
        const result = await qldatve.LayDSve(ttghe);
        //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
        console.log("result",result.data.content )
        if (result.status === 200) {
            dispatch({
                type: QL_DAT_VE,
                Chitietdatve: result.data.content, //{arrstatedefault:result.data.content}
              });
        }
        await  dispatch(HIDELOADINGACTION)
        console.log("result", result);
      } catch (errors) {
        // xử lý thất bại
        console.log("error", errors.reponse?.data);
      }
}
}


export const datveAction = (thongtindatve = new ThongTinDatVe()) =>{
  return async dispatch =>{
    try {
      dispatch(DISPLAYLOADINGACTION)
        const result = await qldatve.datve(thongtindatve);
        //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
        console.log("result",result.data.content )
      await dispatch(LayDSgheAction(thongtindatve.malichchieu))
      await dispatch({type: DAT_VE_HOAN_TAT})
      await  dispatch(HIDELOADINGACTION)
        dispatch({type:CHUYEN_TAB});
      } catch (errors) {
        // xử lý thất bại
        dispatch(HIDELOADINGACTION)
        console.log("error", errors.reponse?.data);
      }
}
}