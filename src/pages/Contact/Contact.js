import React, {useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { LayDSRapAction } from "../../Redux/Action/QuanLyRapActions";
import "../Contact/contact.css"



export default function Contact() {
  const {RapArr} = useSelector(state=>state.QuanLyRapReducer);

console.log(RapArr,'rap chiếu')

const dispatch = useDispatch()
//useefffect tự kích hoạt khi component load ra
useEffect(() => { 
      dispatch(LayDSRapAction);
   
}, []);

const rendercumrap = ()  =>{
    return RapArr.map((rap,index) => { 
      return <div key={index} className="col-6">
       <div className="card mb-3" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img style={{height:'200px'}} src={rap.logo} alt="..." />
    </div>
    <div className="col-md-8">
<div className="card-body">
  <span style={{fontSize:20,fontWeight:600}}>Tên Rạp: {rap.maHeThongRap}</span>
  <br />
{rap.lstCumRap?.slice(0,6).map((cumrap,index) => {
      return <span key={index} >
      - <span>Địa  Chỉ: {cumrap.diaChi}</span><br />
      </span>
    })}
</div>
</div>
  </div>
</div>
      </div>


   
     })
}

  return (
    
    <div style={{ marginTop: "60px",color: "white",paddingTop:35 }}>
          <div className="row">
          {rendercumrap()}
          </div>

           
    </div>
    
  );
}
