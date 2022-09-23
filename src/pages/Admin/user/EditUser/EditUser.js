import React, {  useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select
} from 'antd';
import { useFormik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';

import { GROUP } from '../../../../util/setting/config';
import {  CapNhatNDAcTions, LayDSLoaiNDActions, LayThongTinTKcuaNDAcTions } from '../../../../Redux/Action/QuanLYNDAction';



const EditUser = (props) => {
 
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [componentSize, setComponentSize] = useState('default');

  const { LayTHongTinTkCuaND} = useSelector(state=>state.QLNDReducer);
  console.log(LayTHongTinTkCuaND,'thông tin người dùng  admin');

  const {dsloaiNd} = useSelector(state=>state.QLNDReducer);
  console.log(dsloaiNd,'loại ngươi dùng');


  const dispatch =  useDispatch();

  useEffect(() => {  
    let {id} = props.computedMatch.params
    console.log(id,'tài khoản người dùng')
    console.log(props,'props')
      dispatch(LayThongTinTKcuaNDAcTions(id))
      dispatch(LayDSLoaiNDActions())
  },[]);
  
  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: LayTHongTinTkCuaND.taiKhoan,
      matKhau: LayTHongTinTkCuaND.matKhau,
      email: LayTHongTinTkCuaND.email,
      soDT: LayTHongTinTkCuaND.soDT,
      maNhom: GROUP,
      maLoaiNguoiDung: LayTHongTinTkCuaND.maLoaiNguoiDung,
      hoTen:LayTHongTinTkCuaND.hoTen 
    },

    onSubmit: (values) => {
      console.log('values', values);
      dispatch(CapNhatNDAcTions(values))
   
    }
  })

  // const handlechangeMaloaiND = (value) =>{
  //   Formik.setFieldValue('maLoaiNguoiDung',value)
  // }

  // const rendermaLoaiND = () =>{
  //   return dsloaiNd.map((nd,index) => { 
  //     return   {label:nd.tenLoai,value:nd.maLoaiNguoiDung} 
        
  //    })
  // }
  return (

    <Form
    labelCol={{
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

    onSubmitCapture={Formik.handleSubmit}
  >
          
        
         <div className="mt-5" style={{ marginLeft: "180px" }}>
          <Form.Item label="Tài Khoản">
            <Input name="taiKhoan"
            
          
              type="text"
              value={Formik.values.taiKhoan}
              onChange={Formik.handleChange}
            />
          
          </Form.Item>
          <Form.Item label="Mật Khẩu">
            <Input name="matKhau"
             
              type="text"
              value={Formik.values.matKhau}
              onChange={Formik.handleChange}
            />
           
          </Form.Item>
          <Form.Item label="Họ Tên">
            <Input name="hoTen"
              className=""
            
              
              type="text"
              value={Formik.values.hoTen}
              onChange={Formik.handleChange}
            />
           
          </Form.Item>
   
 
        <Form.Item label="Người Dùng">
            <span name="maLoaiNguoiDung"
              className=""
            
              style={{cursor:'no-drop',width: "71%" ,marginLeft:'10px'}}
              type="text"
              value={Formik.values.maLoaiNguoiDung}
              onChange={Formik.handleChange}
            >{Formik.values.maLoaiNguoiDung}</span>
           
          </Form.Item>
  
          <Form.Item label="Số Điện Thoại">
            <Input name="soDt"
              className=""
              
          
              type="text"
              value={Formik.values.soDT}
              onChange={Formik.handleChange}
            />
         
          </Form.Item>
          <Form.Item label="Email">
            <Input name="email" type="text"  
              value={Formik.values.email}
              onChange={Formik.handleChange}
            />
         
          </Form.Item>     
          <Form.Item label="Tác Vụ" >
            <Button htmlType='submit'  className='btn bg-primary  text-white' >Save</Button>
          </Form.Item>
        
         </div>
         
    </Form>
  );
};



export default EditUser;
