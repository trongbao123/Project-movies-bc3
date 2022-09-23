import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  datveAction,
  LayDSgheAction,
} from "../../Redux/Action/QuanLyDatVeAction";
import "../Checkout/datve.css";
import { Tabs } from "antd";
import "../Checkout/datve.css";
import {
  IssuesCloseOutlined,
  UserOutlined,
  WarningOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { CHANGE_TAB_ACTIVE, DAT_GHE } from "../../Redux/types/QlDatVeTypes";
import _ from "lodash";
import { ThongTinDatVe } from "../../Core/models/thongtindatve";
import { LichsudatveAction } from "../../Redux/Action/QuanLYNDAction";
import moment from "moment";
import { history } from "../../App";
import { TOKEN, USER_LOGIN } from "../../util/setting/config";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

export default function (props) {
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
  console.log(tabActive, "tab");

  const { userlogin } = useSelector((state) => state.QLNDReducer);
  const dispatch = useDispatch();

  const operations = (
    <Fragment>
    <button
       className="btn  px-3 "
       type="submit" style={{display:'flex',justifyContent:'center'}}
     >
       <NavLink style={{color:'white'}} to="/profile">
         <UserOutlined style={{width:'32px',height:'32px',lineHeight:'30px',borderRadius:'20px',backgroundColor:'pink'}} /> hello!{userlogin.taiKhoan}
       </NavLink>
     </button>
     <button onClick={() => { 
       console.log(userlogin,'đăng xu')
         localStorage.removeItem(userlogin);
         localStorage.removeItem(USER_LOGIN);
         localStorage.removeItem(TOKEN);
         history.push('/Home')
         window.location.reload();
        }} className="text-success">Đăng Xuất</button>
     </Fragment> 
  );

  return (
    <div className="check  style={{color:'white'}}">
      <Tabs
        tabBarExtraContent={operations}
        className="px-5"
        defaultActiveKey="1"
        activeKey={tabActive.toString()}
        onChange={(key) => {
          console.log("key", key);
          dispatch({
            type: CHANGE_TAB_ACTIVE,
            number: key,
          });
        }}
      >
        <TabPane
          tab={
            <NavLink to="/Home">
              <img style={{ width: "8%" }} src="../img/homepage.png"></img>
            </NavLink>
          }
          key="3"
        ></TabPane>
        <TabPane
          tab="01.Chọn Ghế và Thanh Toán"
          style={{ color: "white" }}
          key="1"
        >
          <CheckOut {...props} />
        </TabPane>
        <TabPane tab="02.Kết Quả Đặt Vé" key="2">
          <Kqdatve />
        </TabPane>
      </Tabs>
    </div>
  );
}

function CheckOut(props) {
  const { userlogin } = useSelector((state) => state.QLNDReducer);
  console.log(userlogin, "user");

  const { danhsachghedangdat, ghekhachdat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  const { Chitietdatve } = useSelector((state) => state.QuanLyDatVeReducer);
  console.log(Chitietdatve, "ql đặt vé");

  const dispatch = useDispatch();
  useEffect(() => {
    // gọi hàm tạo ra từ async function
    const action = LayDSgheAction(props.match.params.id);
    //  dispatch funtion action
    dispatch(action);
  }, []);
  console.log(Chitietdatve, "ql đặt vé 1");

  const { thongTinPhim, danhSachGhe } = Chitietdatve;

  const renderGhe = () => {
    return danhSachGhe.map((ghe, index) => {
      let ghevip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let gheThuong = ghe.daDat === true ? "ghedadat" : "";
      let ghDangDat = "";

      let ghedadcdat = "";

      // kiểm tra từng ghế
      let indexGheDat = danhsachghedangdat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      console.log(indexGheDat, "mã ghế");
      if (userlogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        ghedadcdat = "ghedadcdat";
      }
      if (indexGheDat !== -1) {
        ghDangDat = "ghedangdat";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_GHE,
                gheDuocChon: ghe,
              });
            }}
            disabled={gheThuong}
            className={`ghe ${ghevip} ${gheThuong} ${ghDangDat} ${ghedadcdat} `}
          >
            {ghe.daDat ? (
              ghedadcdat !== "" ? (
                <UserOutlined />
              ) : (
                <IssuesCloseOutlined style={{ marginBottom: "7px" }} />
              )
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  const rendergiatien = () => {
    return danhsachghedangdat.map((ghe, index) => {
      return (
        <tr key={index} style={{ overflowY: "scroll", height: "30%" }}>
          <td style={{ color: "red", fontSize: "18px" }}>{ghe.stt}</td>
          <td style={{ color: "green", fontWeight: 600 }}>
            {ghe.giaVe.toLocaleString()}Vnđ
          </td>
        </tr>
      );
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#0000000",
        minHeight: "full",
        marginTop: "-15px",
      }}
    >
      <div className="container">
        <div className="row">
          {/* render ghe */}
          <div className="col-8">
            {/* màn hình  */}
            <div className="screen mt-3">
              <img src="../img/screen.png" />
            </div>

            {/* render số ghế */}
            <div
              className="phongghe"
              style={{ marginTop: "-20px", marginLeft: "25px" }}
            >
              <div>
                <div>{renderGhe()}</div>
              </div>
            </div>
            <table className="table text-white mt-3">
              <thead>
                <tr className="text-white text-center">
                  <th scope="col">Ghế Vip</th>
                  <th scope="col">Ghế chưa chọn</th>
                  <th scope="col">Ghế đã được đặt</th>
                  <th scope="col">Ghế bạn đã đặt</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <th>
                    <button className="btn gheVip"></button>
                  </th>
                  <td>
                    {" "}
                    <button className="btn ghe"></button>
                  </td>
                  <td>
                    {" "}
                    <button className="btn ghedadat">
                      <IssuesCloseOutlined
                        style={{
                          position: "absolute",
                          bottom: "43px",
                          marginLeft: "-8px",
                          color: "ghostwhite",
                        }}
                      ></IssuesCloseOutlined>
                    </button>
                  </td>
                  <td style={{ marginLeft: 60 }}>
                    <button className="btn ghedadcdat ">
                      <UserOutlined
                        style={{
                          position: "absolute",
                          bottom: "43px",
                          marginLeft: "-8px",
                          color: "#b3c221",
                        }}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* đặt vé tính tiền */}
          <div
            style={{
              left: "1000px",
              position: "absolute",
              top: "7px",
              width: "26%",
            }}
            className="col-4"
          >
            <h3
              className="text-success text-center"
              style={{ fontSize: "20px" }}
            >
              {danhsachghedangdat
                .reduce((tongtien, ghe, index) => {
                  return (tongtien += ghe.giaVe);
                }, 0)
                .toLocaleString()}
              vnđ
            </h3>
            <hr />
            {/*Dấu ?: toán tử optainal chaining */}
            <h3
              key={thongTinPhim.tenPhim}
              style={{ fontSize: "20px", color: "white" }}
            >
              Tên Phim: {thongTinPhim?.tenPhim}
            </h3>
            <p style={{ fontSize: "15px", fontWeight: 500 }}>
              Địa điểm: {thongTinPhim.tenCumRap}
            </p>
            <p style={{ fontSize: "15px", fontWeight: 500 }}>
              {" "}
              Ngày Chiếu: {thongTinPhim.ngayChieu}
            </p>
            <hr />
            <div
              className="d-flex"
              style={{
                justifyContent: "space-between",
                overflowY: "scroll",
                height: "200px",
              }}
            >
              <table className="table table-bordered">
                <thead>
                  <tr className="text-white">
                    <th scope="col">Ghế</th>
                    <th scope="col">Giá</th>
                  </tr>
                </thead>
                <tbody className="text-white">{rendergiatien()}</tbody>
              </table>
            </div>
            <hr />
            <div className="my-3" style={{ fontSize: "18px", fontWeight: 600 }}>
              <i>Email: </i> {userlogin.email}
            </div>
            <hr />
            <div className="my-3" style={{ fontSize: "18px", fontWeight: 600 }}>
              <i>phone: </i>
              {userlogin.soDT}
            </div>
            <hr />
            <div
              className="px-4"
              style={{ marginTop: "60px", maxheight: "full" }}
            >
              <button
                onClick={() => {
                  const thongtindatve = new ThongTinDatVe();
                  thongtindatve.malichchieu = props.match.params.id;
                  thongtindatve.danhsachve = danhsachghedangdat;
                  console.log(thongtindatve, "tt dat ve");
                  dispatch(datveAction(thongtindatve));
                }}
                className="btn btn-success "
                style={{
                  width: "100%",
                  fontSize: "18px",
                  fontWeight: 600,
                  backgroundImage: "linear-gradient(223deg,#b4ec51,#429321",
                }}
              >
                ĐẶT VÉ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kqdatve(props) {
  const { thongtinnguoidung } = useSelector((state) => state.QLNDReducer);
  const { userlogin } = useSelector((state) => state.QLNDReducer);
  console.log(thongtinnguoidung, "tt người dùng");

  const renderItem = function () {
    const style = {
      height: "85px",
      width: "100%",
      overflowY: "scroll",
    };
    return thongtinnguoidung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div className="col-6" key={index}>
          <div
            className="card mb-3"
            style={{
              maxWidth: 540,
              backgroundColor: "whitesmoke",
              color: "black",
            }}
          >
            <div className="row no-gutters" style={{ height: "270px" }}>
              <div className="col-md-4">
                <img
                  style={{ width: "100%", height: "270px" }}
                  src={ticket.hinhAnh}
                  alt={ticket.hinhAnh}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Tên Phim: {ticket.tenPhim}</h5>
                  <p className="card-text">
                    Giờ Chiếu: {moment(ticket.ngayDat).format("hh:mm A")}
                  </p>
                  <p>Địa Điểm : {seats.tenHeThongRap}</p>
                  <p>Tên Rap: {seats.tenCumRap}</p>

                  <p style={style}>
                    Ghế :
                    {ticket.danhSachGhe.map((ghe, index) => {
                      return (
                        <span
                          style={{
                            color: "#305803",
                            fontSize: "15px",
                            paddingLeft: "5px",
                          }}
                          key={index}
                        >
                          [{ghe.tenGhe}]
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    // gọi hàm tạo ra từ async function
    const action = LichsudatveAction();
    //  dispatch funtion action
    dispatch(action);
  }, []);
  return (
    <div className="container">
      <div className="text-center">
        <h1 style={{ fontSize: "30px", color: "#673ab7", fontWeight: "700" }}>
          Lịch Sử Đặt Vé.
        </h1>
        <p>Hãy xem lịch sử đặt vé tại đây!</p>
      </div>
      <div className="row">{renderItem()}</div>
    </div>
  );
}
