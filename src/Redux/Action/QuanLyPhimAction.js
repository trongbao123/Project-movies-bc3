import { ql } from "../../Service/QuanLyPhimService";
import { SET_QLPHIM, THONG_TIN_PHIM } from "../types/Quanlyphimtype";
import { history } from "../../App";
import swal from "sweetalert";

export const DSPhimAction = (tenPhim = "") => {
  // call api
  return async (dispatch) => {
    try {
      const result = await ql.layDsPhim(tenPhim);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      dispatch({
        type: SET_QLPHIM,
        Filmarr: result.data.content,
      });

      console.log("result", result);
    } catch (errors) {
      // xử lý thất bại
      console.log("error", errors);
    }
  };
};
export const ThemPhimAction = (formdata) => {
  // call api
  return async (dispatch) => {
    try {
      const result = await ql.themphim(formdata);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer

      await swal({
        title: "Good job!",
        text: "Thêm Phim Thành Công",
        icon: "success",
        button: "Success",
      });
      console.log("result", result);
      history.push("/admin/film");
      await dispatch(DSPhimAction());
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

export const CapNhatPhimAcTions = (formData) => {
  // call api
  return async (dispatch) => {
    try {
      const result = await ql.CapNhatphimUpload(formData);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      await swal({
        title: "warning!",
        text: "Cập  nhật phim Thành Công",
        icon: "Success",
        button: "Success",
      });

      history.push("/admin/film");
      await dispatch(DSPhimAction());
      console.log("result edit phim", result);
    } catch (errors) {
      // xử lý thất bại
      swal({
        title: "warning!",
        text: "Cập  nhật phim thất bại",
        icon: "warning",
        button: "Cancel!",
      });
      console.log("errors", errors);
    }
  };
};

export const LayTTPhimAction = (maPhim) => {
  // call api
  return async (dispatch) => {
    try {
      const result = await ql.layttphim(maPhim);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      await dispatch({
        type: THONG_TIN_PHIM,
        thongtinPhim: result.data.content,
      });
      await dispatch(DSPhimAction());

      console.log("result lấy tt phim", result);
    } catch (errors) {
      // xử lý thất bại
      swal({
        title: "warning!",
        text: "lấy thông  tin thất bại",
        icon: "warning",
        button: "Aww yiss!",
      });
      console.log("errors", errors.response?.data);
    }
  };
};

export const XoaPhimAcTions = (maPhim) => {
  // call api
  return async (dispatch) => {
    try {
      const result = await ql.xoaphim(maPhim);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      console.log("result xóa phim", result);
      await swal({
        title: "Good job!",
        text: "xóa phim thành công",
        icon: "success",
        button: "Aww yiss!",
      });
      await dispatch(DSPhimAction());
    } catch (errors) {
      // xử lý thất bại
      swal({
        title: "warning!",
        text: "xóa phim thất bại",
        icon: "warning",
        button: "Aww yiss!",
      });
      console.log("errors", errors);
    }
  };
};
