import { qlrap } from "../../Service/QuanLyRap";
import { THONG_TIN_RAP } from "../types/HeThongRap";

export const LayLichChieuAction =  (id) =>{
    // call api
    return async dispatch =>{
    try {
        const result = await qlrap.layDSLichChieu(id);
        //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
        console.log("result",result.data.content )
        if (result.status === 200) {
            dispatch({
                type: THONG_TIN_RAP,
                ThongTinRapArray: result.data.content,
              });
        }
  
        console.log("result", result);
      } catch (errors) {
        // xử lý thất bại
        console.log("error", errors);
      }
}
}