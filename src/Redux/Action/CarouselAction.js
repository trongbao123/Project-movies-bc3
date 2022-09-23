import axios from "axios";
import { DOMAIN } from "../../util/setting/config";
import { SET_CAROUSEL } from "../types/CarouselTypes";
import { ql } from "../../Service/QuanLyPhimService";
export const getCarouselAction = async (dispatch) => {
    // call api
    try {
      const result = await ql.LayDSBanner();
      //  Đưa lên reducer
      dispatch({
        type: SET_CAROUSEL,
        ImgArr: result.data.content,
      });
      console.log("result", result);
    } catch (errors) {
      // xử lý thất bại
      console.log("error", errors);
    }
  };