import { qlND } from "../../Service/QuanLyND";
import { QL_ND_DK } from "../types/QuanLyNDTypes";
import { history } from "../../App";
import swal from "sweetalert";
export const DangKyAction = (tttk) => {
  //thông tin người dùng mk tk

  // call api
  return async (dispatch) => {
    try {
      const result = await qlND.Dktk(tttk);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      console.log("result", result.data.content);
      if (result.status === 200) {
        await dispatch({
          type: QL_ND_DK,
          userRigester: result.data.content,
        });
        await swal({
          title: "Good job!",
          text: 'Đăng Ký Tài Khoản Thành Công',
          icon: "success",
  
        });
        // chuyển về trang trước đó
        history.push("/login");
      }

      console.log("result", result);
    } catch (errors) {
      // xử lý thất bại
      await swal({
        title: "FAIL!",
        // content: errors.response.data?.content,
        text: 'Thông Tin Điền Vào chưa đúng vui lòng kiểm tra lại! hoặc load lại trang',
        icon: "warning",
  
        
      });
      
      console.log("error", errors);
    }
  };
};
