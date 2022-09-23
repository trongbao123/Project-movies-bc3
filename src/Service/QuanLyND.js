import { baseService } from "../Service/BaseService";
import { GROUP } from "../util/setting/config";

export class QuanLyNDService extends baseService {
  constructor() {
    super();
  }
  LayDSND = (ttNd) =>{//tài khoản , mật khẩu
    return this.post(`/api/QuanLyNguoiDung/DangNhap`,ttNd);
  }

  Dktk = (tttk) =>{
    return  this.post(`/api/QuanLyNguoiDung/DangKy`,tttk);
  }

  Lichsudatve = () =>{
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
  }

  QlNguoiDung = (tuKhoa="") =>{
    if (tuKhoa.trim() !== "") {
      return this.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP}&tuKhoa=${tuKhoa}`
      );
    }
      return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP}`)
  }

  ThemNguoiDung = (formdata) =>{
    return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,formdata)
}

LayDSLoaiNguoiDung = () => {
  return this.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
}

LayThongTinCuaND = (taikhoan) =>{
  return this.post(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taikhoan}`)
}

CapnhatND = (formData) =>{
  return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,formData)
}

XoaND = (taikhoan) => {
  return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`)
}
}

export const qlND = new QuanLyNDService();
