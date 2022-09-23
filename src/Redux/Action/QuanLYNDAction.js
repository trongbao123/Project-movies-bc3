import { qlND } from "../../Service/QuanLyND";
import {
  LAY_Loai_ND,
  LAY_THONG_TIN_ND,
  LS_DAT_VE,
  QL_ND,
  THONG_TIN_ND,
  THONG_TIN_TK_ND,
} from "../types/QuanLyNDTypes";
import { history } from "../../App";
import swal from "sweetalert";
export const QLNDAction = (ttDangNhap) => {
  //thông tin người dùng mk tk

  // call api
  return async (dispatch) => {
    try {
      const result = await qlND.LayDSND(ttDangNhap);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      console.log("result", result.data.content);
      if (result.status === 200) {
        dispatch({
          type: QL_ND,
          ttDangNhap: result.data.content,
        });
        swal({
          title: "Good job!",
          text: "Đăng nhập thành công",
          icon: "success",
        });
        // chuyển về trang trước đó
        history.goBack();
      }

      console.log("result", result);
    } catch (errors) {
      // xử lý thất bại
      swal({
        title: "warning!",
        text: "sai tài khoản hoặc mật khẩu vui lòng  đăng nhập lại",
        icon: "warning",
      });
      console.log("error", errors);
    }
  };
};

export const LichsudatveAction = () => {
  return async (dispatch) => {
    try {
      const result = await qlND.Lichsudatve();
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      console.log("result", result.data.content);
      if (result.status === 200) {
        dispatch({
          type: LS_DAT_VE,
          thongtinnguoidung: result.data.content,
        });
      }

      console.log("result", result);
    } catch (errors) {
      // xử lý thất bại
      console.log("error", errors);
    }
  };
};

export const QuanLyNDAdminAction = (tukhoa = "") => {
  return async (dispatch) => {
    try {
      const result = await qlND.QlNguoiDung(tukhoa);
      dispatch({
        type: LAY_THONG_TIN_ND,
        qlnguoidung: result.data.content,
      });
      console.log(result, "thông tin người dùng admin");
    } catch (error) {
      console.log(error.responses?.content, "lỗi thông tin người dùng admin");
    }
  };
};

export const ThemNDAction = (formdata) => {
  // call api
  return async (dispatch) => {
    try {
      const result = await qlND.ThemNguoiDung(formdata);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer

      await swal({
        title: "Good job!",
        text: "Thêm Người Dùng Thành Công",
        icon: "success",
        button: "Success",
      });
      console.log("result", result);
      history.push("/admin/user");
      await dispatch(QuanLyNDAdminAction());
    } catch (errors) {
      // xử lý thất bại
      swal({
        title: "warning!",
        text: errors.reponse?.data.content,
        icon: "warning",
        button: "Aww yiss!",
      });
      console.log("error", errors);
    }
  };
};

export const LayDSLoaiNDActions = () => {
  // call api
  return async (dispatch) => {
    try {
      const result = await qlND.LayDSLoaiNguoiDung();
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      dispatch({
        type: LAY_Loai_ND,
        dsloaiNd: result.data.content,
      });

      console.log("result", result);
    } catch (errors) {
      // xử lý thất bại

      console.log("error", errors);
    }
  };
};

export const LayThongTinTKcuaNDAcTions = (taikhoan) => {
  // call api
  return async (dispatch) => {
    try {
      const result = await qlND.LayThongTinCuaND(taikhoan);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      await dispatch({
        type: THONG_TIN_TK_ND,
        LayTHongTinTkCuaND: result.data.content,
      });
      await swal({
        title: "Success!",
        text: "Lấy thông tin  Thành Công",
        icon: "success",
        button: "ok",
      });

      console.log("result edit người dùng", result);
    } catch (errors) {
      // xử lý thất bại
      swal({
        title: "warning!",
        text: "lấy thông tin thất bại",
        icon: "warning",
        button: "Cancel!",
      });
      console.log("errors", errors);
    }
  };
};

export const CapNhatNDAcTions = (formData) => {
  // call api
  return async (dispatch) => {
    try {
      const result = await qlND.CapnhatND(formData);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer

      await swal({
        title: "Success!",
        text: "Cập  nhật  Thành Công",
        icon: "success",
        button: "Success",
      });
      
      history.goBack();
   
      await dispatch(QuanLyNDAdminAction());
      console.log("result edit phim", result);
    } catch (errors) {
      // xử lý thất bại
      swal({
        title: "warning!",
        text: "Cập  nhật thất bại",
        icon: "warning",
        button: "Cancel!",
      });
      console.log("errors", errors);
    }
  };
};

export const XoaNDAcTions = (taiKhoan) => {
  // call api
  return async (dispatch) => {
    try {
      const result = await qlND.XoaND(taiKhoan);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      console.log("result xóa Nd", result);
      await swal({
        title: "Good job!",
        text: "xóa Người Dùng thành công",
        icon: "success",
        button: "Aww yiss!",
      });
      await dispatch(QuanLyNDAdminAction());
    } catch (errors) {
      // xử lý thất bại
      swal({
        title: "warning!",
        text: "xóa Người Dùng thất bại",
        icon: "warning",
        button: "Aww yiss!",
      });
      console.log("errors", errors);
    }
  };
};
