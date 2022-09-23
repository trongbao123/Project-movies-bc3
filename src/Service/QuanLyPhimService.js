import { baseService } from "../Service/BaseService";
import { GROUP } from "../util/setting/config";

export class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }

  LayDSBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  layDsPhim = (tenPhim = "") => {
    if (tenPhim.trim() !== "") {
      return this.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}&tenPhim=${tenPhim}`
      );
    }
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}`);
  };

  themphim = (formdata) => {
    return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formdata);
  };

  CapNhatphimUpload = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  layttphim = (maphim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maphim}`);
  };

  xoaphim = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}

export const ql = new QuanLyPhimService();
