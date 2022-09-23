import React, { useEffect, useState } from "react";
import {  Form, Input, DatePicker,Select, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { LayDSLoaiNDActions, ThemNDAction } from "../../../../Redux/Action/QuanLYNDAction";


export default function AddUser(props) {
  const [componentSize, setComponentSize] = useState('default');
    const [componentDisabled, setComponentDisabled] = useState(true);
    const {dsloaiNd} = useSelector(state=>state.QLNDReducer);
    // console.log(dsloaiNd,'loại ngươi dùng');

  
    const dispatch = useDispatch();
    useEffect(() => {  
        dispatch(LayDSLoaiNDActions())
      
    },[]);
    const onFormLayoutChange = ({ disabled }) => {
      setComponentDisabled(disabled);
      
    };
  
    const Formik = useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        hoTen: ""
      },
      validationSchema: Yup.object({
        // các hàm validation của từng trường dữ liệu
        taiKhoan: Yup.string().required("Tài khoản không để trống").min(6,"Tối thiểu 6 ký tự").max(13, "Tối đa 10 ký tự"),
        matKhau: Yup.string().required("Mật khẩu không để trống"),
        email:Yup.string().required("Email không để trống").email("Email không đúng format"),
        soDt:Yup.string().required("số điện thoại không được để trống"),
        maNhom:Yup.string().required("Mã nhóm không được để trống"),
        maLoaiNguoiDung:Yup.string().required("mã loại người dùng không được để trống"),
        hoTen:Yup.string().required("Họ tên không để trống").matches(/^[A-Z a-z]+$/, "Họ tên không hợp lệ"),
       
      }),
      onSubmit: (value) => {
        console.log(value,'nười dùng')
          dispatch(ThemNDAction(value))
        
      },
    });
  
   
    const handlechangeMaloaiND = (value) =>{
     
      Formik.setFieldValue('maLoaiNguoiDung',value)
    }
  
    const rendermaLoaiND = () =>{
      return dsloaiNd.map((nd,index) => { 
        return   {label:nd.tenLoai,value:nd.maLoaiNguoiDung} 
          
       })
    }

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
        <h3 className="text-center" style={{ fontSize: 30, fontWeight: 600 }}>
          Thêm Người Dùng Mới
        </h3>
  
        <div className="mt-5" style={{ marginLeft: "180px" }}>
          <Form.Item label="Tài Khoản">
            <Input name="taiKhoan"         
              type="text"
              value={Formik.values.taiKhoan}
              onChange={Formik.handleChange}
            />
            {Formik.touched.taiKhoan && Formik.errors.taiKhoan ? (
              <span className="text-danger ml-4">{Formik.errors.taiKhoan}</span>
            ) : null}
          </Form.Item>
          <Form.Item label="Mật Khẩu">
            <Input name="matKhau"
              type="text"
              value={Formik.values.matKhau}
              onChange={Formik.handleChange}
            />
            {Formik.touched.matKhau && Formik.errors.matKhau ? (
              <div className="text-danger ml-4">{Formik.errors.matKhau}</div>
            ) : null}
          </Form.Item>
          <Form.Item label="Email">
            <Input name="email" type="text" 
              value={Formik.values.email}
              onChange={Formik.handleChange}
            />
            {Formik.touched.email && Formik.errors.email ? (
              <div className="text-danger "  style={{ marginLeft:'54px' }}>{Formik.errors.email}</div>
            ) : null}
          </Form.Item>
          <Form.Item label="Số Điện Thoại">
            <Input name="soDt"
              type="text"
              value={Formik.values.soDt}
              onChange={Formik.handleChange}
            />
            {Formik.touched.soDt && Formik.errors.soDt ? (
              <div className="text-danger ">{Formik.errors.soDt}</div>
            ) : null}
          </Form.Item>
          <Form.Item label="Mã Nhóm">
            <Input name="maNhom"
              type="text"
              value={Formik.values.maNhom}
              onChange={Formik.handleChange}
            />
            {Formik.touched.maNhom && Formik.errors.maNhom ? (
              <div className="text-danger ">{Formik.errors.maNhom}</div>
            ) : null}
          </Form.Item>
          <Form.Item label="Người Dùng">
        <Select  
          options={rendermaLoaiND()}
          onChange={handlechangeMaloaiND} placeholder='Chọn Người Dùng'
        />
           </Form.Item>
          <Form.Item label="Họ Tên">
            <Input name="hoTen" 
              type="text"
              value={Formik.values.hoTen}
              onChange={Formik.handleChange}
            />
            {Formik.touched.hoTen && Formik.errors.hoTen ? (
              <div style={{ marginLeft:'42px'}} className="text-danger ">{Formik.errors.hoTen}</div>
            ) : null}
          </Form.Item>      
          <Form.Item label="Tác Vụ">
            <Button htmlType="submit" className="btn bg-primary  text-white" >
              Thêm 
            </Button>

          </Form.Item>
        </div>
      </Form>
    );
  
}
