import React, { useEffect } from "react";
import "../Detail/detail.css";
import "../../assets/css/style.css";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LayLichChieuAction } from "../../Redux/Action/ThongTinRapAction";
import moment from "moment";
import {StarOutlined} from'@ant-design/icons';
import { Rate } from 'antd';
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default function Detail(props) {
  const { ThongTinRapArray } = useSelector((state) => state.QuanLyPhimReducer);
  console.log({ThongTinRapArray});
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    console.log("id", id);
    dispatch(LayLichChieuAction(id));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${ThongTinRapArray.hinhAnh})`,
        
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="detail " style={{ marginTop: "60px" }}>
        <div className="container">
          <div className="row">
            <div className="img-left col-8">
              <div className="row bg-all">
                <div className="col-6 bg">
                  <img src={ThongTinRapArray.hinhAnh} alt="" />
                </div>
                <div className="col-6 " style={{}}>
                <p style={{fontSize:'15px',fontWeight:'bolder',color:'palegreen'}}>Tên Phim: {ThongTinRapArray.tenPhim}</p>
                  <p style={{fontSize:'15px',fontWeight:'bolder',color:'palegreen'}}>Mã Phim: {ThongTinRapArray.maPhim}</p>
                  <p style={{fontSize:'15px',fontWeight:'bolder',color:'palegreen',width:'120%'}}>Mô Tả: {ThongTinRapArray.moTa}</p>
                  <p style={{fontSize:'15px',fontWeight:'bolder',color:'palegreen'}}>Giờ Chiếu: {moment(ThongTinRapArray.ngayKhoiChieu).format('DD/MM/YYYY')} </p>
                  <button className="btn btn-success" ><a style={{color:'white',textDecoration:'none'}} href="#lichchieu">Đặt Vé</a></button>
                </div>
              </div>
            </div>

            <div className="animate col-4 mt-5 ">
         <div >
 <div className="inner-content text-center">
  <div className="c100 p50 big center green">
  <span className="danhgia">{ThongTinRapArray.danhGia*10}%</span>
    <div className="slice"><div className="bar" /><div className="fill" /></div>
  </div>
</div>
          </div>
                <p style={{position:"absolute",left:'27px',top:'30px',color:'chocolate'}}></p>
              
              <div className="start" style={{marginTop:75,marginLeft:100,fontSize:27,color:'yellow'}} ><Rate allowHalf defaultValue={ThongTinRapArray.danhGia} /></div>
            </div>
          </div>


          <div style={{paddingBottom:'30px',marginTop:10}}>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Lịch Chiếu" key={1}>
                <div id="lichchieu">
                  <Tabs
                    tabPosition={"left"}
                    style={{
                      width: "100%",
                      marginTop: "-16px",
                      border: "solid 1px #f7f8f9",
                      borderRadius: 5,
                      backgroundColor: "#f7f8f9",
                    }} className='htr'
                  >
                      {ThongTinRapArray.heThongRapChieu?.map((htr,index) => { 
                        return <TabPane tab={ 
                        <div>
                          <img style={{width:50,height:50}} src={htr.logo}></img>
                              {htr.tenHeThongRap}
                        </div>} key={index}>
                              {htr.cumRapChieu?.map((cumrap,index) => { 
                                  return <div key={index}>
                                    <div className="row">
                                        <div className="col-12 d-flex mt-3">
                                          <img  style={{width:'10%',height:'90px'}} src={cumrap.hinhAnh} alt="" />
                                        <div>
                                        <div style={{color:"crimson",paddingLeft:'30px',fontSize:'20px' }}>
                                          {cumrap.tenCumRap}
                                          </div>
                                        <p className="mt-2" style={{color:"crimson",paddingLeft:'30px',fontSize:'15px',width:'85%' }}>{cumrap.diaChi}</p>
                                        </div>
                                          
                      
                                        </div>
                                      
                                        <div className="mt-1 px-3">
                                            {cumrap.lichChieuPhim?.slice(0,5).map((lich,index) => { 
                                              return <NavLink to={`/checkout/${lich.maLichChieu}`} key={index}>
                                                  <div style={{color:"black",fontSize:'20px'}}>{moment(lich.ngayChieuGioChieu).format('hh:mm A')}</div>
                                              </NavLink>
                                            })}
                                        </div>
                                    </div>
                                      
                                  </div>
                              })}
                        </TabPane>
                      })}
                  </Tabs>
                </div>
                </TabPane>  

                <TabPane tab="Thông Tin" key={2}>
                      <div className="row mt-3 text-light">
                        <div className="col-6 px-5" >
                        <p style={{fontSize:'15px',fontWeight:'bolder',color:'white'}}>Tên Phim: {ThongTinRapArray.tenPhim}</p>
                      <p style={{fontSize:'15px',fontWeight:'bolder',color:'white'}}>Mã Phim: {ThongTinRapArray.maPhim}</p>
                      <p style={{fontSize:'15px',fontWeight:'bolder',color:'white'}}>Giờ Chiếu: {moment(ThongTinRapArray.ngayKhoiChieu).format('hh:mm A')} </p>
                      </div>
                      <div className="col-6">
                      <h3 style={{fontSize:'15px',fontWeight:'bolder',color:'white',width:'90%'}}>Mô Tả: {ThongTinRapArray.moTa}</h3>
                      </div>
                      </div>
                </TabPane>
                <TabPane tab="Đánh Giá" key={4}>
                  <div className="d-flex justify-content-center mt-4">
                  <p className="mt-2" style={{fontSize:"25px"}}>Đánh Giá :</p>
                  <button className="start d-flex mt-3" style={{marginLeft:100,color:'yellow'}} >
                     <img width={20} src="../img/star.png" allowHalf defaultValue={ThongTinRapArray.danhGia} />
                     <img width={20} src="../img/star.png" allowHalf defaultValue={ThongTinRapArray.danhGia} />
                     <img width={20} src="../img/star.png" allowHalf defaultValue={ThongTinRapArray.danhGia} />
                     <img width={20} src="../img/star.png" allowHalf defaultValue={ThongTinRapArray.danhGia} />
                     <img width={20} src="../img/star.png" allowHalf defaultValue={ThongTinRapArray.danhGia} />
                     </button>
                 

                  </div>
              

                </TabPane>
            </Tabs>
          </div>
      
        
        </div>
      </div>
    </div>
  );
}
