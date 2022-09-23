import { qlrap } from "../../Service/QuanLyRap";
import { SET_HE_THONG_RAP } from "../types/HeThongRap";

export const LayDSRapAction = async (dispatch) =>{
    // call api
    try {
        const result = await qlrap.LayDSBanner();
        //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
        console.log("result",result.data.content )
        if (result.status === 200) {
            dispatch({
                type: SET_HE_THONG_RAP,
                RapArr: result.data.content,
              });
        }
  
        console.log("result", result);
      } catch (errors) {
        // xử lý thất bại
        console.log("error", errors);
      }
}