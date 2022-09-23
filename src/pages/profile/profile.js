import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../templates/HomeTemplates/Layout/Footer/Footer'
import Header from '../../templates/HomeTemplates/Layout/Header/Header'
import '../profile/profile.css';
import  {TwitterOutlined} from '@ant-design/icons'
import moment from 'moment';
import { useFormik } from 'formik';
import { GROUP } from '../../util/setting/config';
import { CapNhatNDAcTions } from '../../Redux/Action/QuanLYNDAction';
import {
  Form,
  Input,
  Button,
  Select
} from 'antd';



export default function Profile(props) {
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [componentSize, setComponentSize] = useState('default');

  const { userlogin } = useSelector((state) => state.QLNDReducer);
  const {Chitietdatve}  = useSelector((state)=>state.QuanLyDatVeReducer)
  console.log(userlogin,'profile')
  console.log(Chitietdatve,'chi tiet dat ve')
  const { thongTinPhim } = Chitietdatve;

  const dispatch = useDispatch()
 const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: userlogin.taiKhoan,
      email: userlogin.email,
      soDT: userlogin.soDT,
      maNhom: GROUP,
      maLoaiNguoiDung: userlogin.maLoaiNguoiDung,
      hoTen:userlogin.hoTen, 
      matKhau:userlogin.matKhau
    },

    onSubmit: (values) => {
      console.log('values', values);
      dispatch(CapNhatNDAcTions(values))
   
    }
  })





  return<div className='body' style={{backgroundImage:'url(../img/cinema-slide.jpg)',backgroundPosition:'center',backgroundSize:'cover'}}>
    <Header/>

<Form labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 14,
    }}
    layout="horizontal"
    initialValues={{
      size: componentSize,
    }}
    onValuesChange={onFormLayoutChange}
    size={componentSize}

    onSubmitCapture={Formik.handleSubmit} id="card">
  <div className="left">
    <svg width={0} height={0}>
      <clipPath id="clipPolygon">
        <polygon points="0 430,405 570,405 0,0 0" />
      </clipPath>
    </svg>		
    <img src="../img/ticket.png" alt="user" className="clip" id='image'/>
    <table className="table">
  <tbody>
    <tr className='MuiTableRow-root'>
      <th scope="col">Tên Phim :</th>
      <td>{thongTinPhim.tenPhim}</td>
    </tr>
    <tr className='MuiTableRow-root'>
      <th scope="col">Địa  Chỉ:</th>
      <td>{thongTinPhim.diaChi}</td>
    </tr>
    <tr>
      <th>Giờ chiếu: </th>
      <td>{thongTinPhim.gioChieu}</td>
    </tr>
    <tr>
      <th>Ngày Chiếu: </th>
      <td>{thongTinPhim.ngayChieu}</td>
    </tr>
    <tr>
      <th>Tên cụm Rạp: </th>
      <td>{thongTinPhim.tenCumRap}</td>
    </tr>
    <tr>
      <th>Tên Rạp: </th>
      <td>{thongTinPhim.tenRap}</td>
    </tr>
  </tbody>
</table>
    <a href="#" className="chat"><span className="entypo-comment" /></a>
  </div>
  <div className="right">
    <h1>Thông Tin Cá Nhân</h1>
<div className="table">
          <Form.Item label="Account">
            <Input name="taiKhoan"
              className='ml-5'
          
              type="text"
              value={Formik.values.taiKhoan}
              onChange={Formik.handleChange}
            />
          
          </Form.Item>
          <Form.Item label="Email">
            <Input name="email" className='ml-5' type="text"  
              value={Formik.values.email}
              onChange={Formik.handleChange}
            />
         
          </Form.Item> 
          <Form.Item label="Name">
            <Input name="hoTen"
              className="ml-5"
            
              
              type="text"
              value={Formik.values.hoTen}
              onChange={Formik.handleChange}
            />
           
          </Form.Item>
          <Form.Item label="Phone">
            <Input name="soDt"
              className="ml-5"
              
          
              type="text"
              value={Formik.values.soDT}
              onChange={Formik.handleChange}
            />
         
          </Form.Item>
          <Form.Item label="Group">
            <Input name="soDt"
              className="ml-5"
              type="text"
              value={Formik.values.maNhom}
              onChange={Formik.handleChange}
            />
         
          </Form.Item>
          <Form.Item label="UserCode">
            <Input name="soDt"
              className="ml-5"
              type="text"
              value={Formik.values.maLoaiNguoiDung}
              onChange={Formik.handleChange}
            />
         
          </Form.Item>
         
  {/* <tbody>
    <tr className='MuiTableRow-root'>
      <th scope="col">Họ và Tên :</th>
      <td>{userlogin.hoTen}</td>
    </tr>
    <tr className='MuiTableRow-root'>
      <th scope="col">Tài  Khoản:</th>
      <td>{userlogin.taiKhoan}</td>
    </tr>
    <tr>
      <th>Email: </th>
      <td>{userlogin.email}</td>
    </tr>
    <tr>
      <th>Người Dùng: </th>
      <td>{userlogin.maLoaiNguoiDung}</td>
    </tr>
    <tr>
      <th>Mã Nhóm: </th>
      <td>{userlogin.maNhom}</td>
    </tr>
  </tbody> */}
</div>

    <nav className="social">
    <Button  htmlType='submit'  className='btn  button mb-4' ><h2 className='text-light'>UPDATE</h2></Button>
      <a href="#"><span><TwitterOutlined /></span></a>
      <a href="#"><span className="entypo-facebook" /></a>
      <a href="#"><span className="entypo-dribbble" /></a>
      <a href="#"><span className="entypo-instagrem" /></a>
    </nav>
  </div>
</Form>




<Footer/>
</div>
}
