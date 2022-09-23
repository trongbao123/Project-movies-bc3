import { ThongTinDatVe } from "../Core/models/thongtindatve";
import { baseService } from "../Service/BaseService";


export class QuanLyDatveService extends baseService {
  constructor() {
    super();
  }
  LayDSve = (malichchieu) =>{//lay từ Api
    return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${malichchieu}`);
  }

  datve = (thongtindatve = new ThongTinDatVe()) =>{
    return this.post(`/api/QuanLyDatVe/DatVe`,thongtindatve);
  }
  taolichChieu = (thongtinlichchieu)=>{
    return this.post(`/api/QuanLyDatVe/TaoLichChieu`,thongtinlichchieu)
  }
}

export const qldatve = new QuanLyDatveService();
