import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Space, Tabs } from "antd";
import { qlrap } from "../../../Service/QuanLyRap";
import moment from "moment"
const { TabPane } = Tabs;

export default class HomeMenu extends React.PureComponent {
  state = {
    tabPosition: "left",
  };

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };

  componentDidMount() {
    
  }

  rendercumrap = () => {
    console.log("rap123", this.props);
    return this.props.qlrap.map((rap, index) => {
      let { tabPosition } = this.state;
      return <TabPane tab={<img src={rap.logo} className="rounded-full" width="50"/>} key={index}>
               <Tabs tabPosition={tabPosition}>
               {rap.lstCumRap?.map((cumrap,index) => {
                console.log(cumrap.tenCumRap,"list") 
                  return  <TabPane tab={
                  <div style={{width:"300px",display:'flex'}}>
                    <img src={rap.logo} className="rounded-full" width="50"/>
                        <div className="text-left ml-2">
                          {cumrap.tenCumRap}
                        <p style={{color:"red"}}>chi tiết</p>  
                        </div>
                  </div>
                  } key={index}>
                    {cumrap.danhSachPhim.slice(0,5).map((phim,index) => { 
                      return <Fragment key={index}>
                      <div className="my-2" style={{display:"flex"}} >
                          <div className="d-flex">
                            <img style={{width:"100px",height:"100px"}} src={phim.hinhAnh} alt="" />
                            <div className="ml-2 ">
                               <h1  style={{color:'green',fontWeight:'700'}}>{phim.tenPhim}</h1>
                                <p>{cumrap.diaChi}</p>
                                <div className="grid grid-cols-6 gap-6">
                                {phim.lstLichChieuTheoPhim.slice(0,5).map((lichchieu,index) => { 
                                    return <NavLink to={`/checkout/${lichchieu.maLichChieu}`} key={index} className="text-2x px-3" style={{color:"#939325"}}> 
                                        {moment(lichchieu.ngayChieuGioChieu).format('hh:mm A')}
                                    </NavLink>
                                 })}

                                </div>
                            
                            </div>
                    
                          </div>
                          
                      </div>
                      <hr/>
                      </Fragment>
                     
                     })}
                  </TabPane>
                 })}
               </Tabs> 
          </TabPane>
    });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            fontFamily: "ui-monospace",
            fontWeight: 800,
            color: "white",
            marginTop:"150px",
          }}
        >
          LỊCH CHIẾU
        </h1>
        <Tabs tabPosition={tabPosition} style={{width: "100%",border: "solid 1px #f7f8f9",borderRadius: 15,}}>
            {this.rendercumrap()}
        </Tabs>
      </>
    );
  }
}
