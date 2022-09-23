import { GROUP } from "../util/setting/config";
import { baseService } from "./BaseService";

export class QuanLyRap extends baseService {
  constructor() {
    super();
  }

  LayDSBanner = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP}`
    );
  };

  layDSLichChieu = (maPhim) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };

  LayThongTinHeThongRap = () => {
    return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  };

  LayThongTinCumRap = (maCumRap) => {
    return this.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maCumRap}`
    );
  };
}

export const qlrap = new QuanLyRap();
