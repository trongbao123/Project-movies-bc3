import React, {  useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';

import { GROUP } from '../../../../util/setting/config';
import { CapNhatPhimAcTions, DSPhimAction, EditPhimAcTions, LayTTPhimAction} from '../../../../Redux/Action/QuanLyPhimAction';


const Edit = (props) => {
 
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [componentSize, setComponentSize] = useState('default');
  const { thongtinPhim } = useSelector(state => state.QuanLyPhimReducer);
  console.log('thongTinPhim', thongtinPhim);
  const [imgSrc, setImgSrc] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {   
    let {id} = props.computedMatch.params
    console.log(props,'id')
    dispatch(LayTTPhimAction(id))
   },[])
  
  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongtinPhim?.maPhim,
      dangChieu: thongtinPhim?.dangChieu,
      sapChieu: thongtinPhim?.sapChieu,
      hot: thongtinPhim?.hot,
      danhGia: thongtinPhim?.danhGia,
      tenPhim: thongtinPhim?.tenPhim,
      trailer: thongtinPhim.trailer,
      moTa: thongtinPhim.moTa,
      maNhom: GROUP,
      ngayKhoiChieu: thongtinPhim.ngayKhoiChieu,
      hinhAnh: null
    },

    onSubmit: (values) => {
      console.log('values', values);
      values.maNhom = GROUP;
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append('File', values.hinhAnh, values.hinhAnh.name);

          }
        }
      }
      dispatch(CapNhatPhimAcTions(formData))
    }
  })

  const handlechangeDataPicker = async (value) =>{
    let ngayKhoiChieu = moment(value);
    await Formik.setFieldValue( ngayKhoiChieu)
    console.log(ngayKhoiChieu,'set')
  }




  const handleChangeInputNumber =  (name) => {
    return async (value) => {
     await Formik.setFieldValue(name, value);
    }
  }

  const handlechangeimg = async (e) =>{
    let file = e.target.files[0];
    if (file.type === 'image/jpeg'|| file.type === 'image/jpg'||file.type === 'image/gif'||file.type === 'image/png') {
       // đem dữ liệu lưu vào formik
       await  Formik.setFieldValue('hinhAnh',file) 
      let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) =>{
          setImgSrc(e.target.result)
            console.log(e.target.result);
           
        } 
       
    }
        // console.log(file,'file')
    }


  


  return (

    <form onSubmit={(e) => { 
      e.preventDefault();
      Formik.handleSubmit(e);
     }}
  
     >
          
         <div className='mt-5' style={{marginLeft:'180px'}}>
         <Form.Item label="Tên Phim" >
          <Input className='ml-2' style={{width:'71%'}} name='tenPhim' type='text'  value={Formik.values.tenPhim}  onChange={Formik.handleChange} />
          </Form.Item>
          <Form.Item label="Trailer" >
          <Input className='ml-4' style={{width:'70%'}} name='trailer' type='text' value={Formik.values.trailer}  onChange={Formik.handleChange} />
          </Form.Item>
          <Form.Item label="Mô tả" >
          <Input className='ml-4' style={{width:'70%'}} name='moTa' type='text' value={Formik.values.moTa}  onChange={Formik.handleChange} />
          </Form.Item>
          <Form.Item label="Ngày khởi Chiếu" >
            <DatePicker  onChange={handlechangeDataPicker} format={"DD/MM/YYYY"} value={moment(Formik.values.ngayKhoiChieu)}/>
          </Form.Item>
          <Form.Item label="Đang Chiếu" valuePropName="checked" >
          <Switch className='ml-2'  onChange={async(value)=>{await Formik.setFieldValue('dangChieu',value)}} checked={Formik.values.dangChieu} />
        </Form.Item>
        <Form.Item label="Sắp Chiếu" valuePropName="checked" >
          <Switch className='ml-3'  onChange={async(value)=> {await Formik.setFieldValue('sapChieu',value)}} checked={Formik.values.sapChieu} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked" onChange={Formik.handleChange}>
          <Switch className='ml-5'  onChange={async (value)=>{await Formik.setFieldValue('hot',value)}} checked={Formik.values.hot}/>
        </Form.Item>
          <Form.Item label="Số sao" >
            <InputNumber min={1} max={5}  name='danhGia' value={Formik.values.danhGia} onChange={handleChangeInputNumber('danhGia')}/>
          </Form.Item>
          <Form.Item label="Hình Ảnh" accept='image/jpeg,image/jpg,image/gif,image/png' valuePropName="fileList">
            <input type="file"  onChange={handlechangeimg} />
          <br />
          <img onChange={handlechangeimg} width={150} height={150} src={imgSrc ===''? thongtinPhim.hinhAnh : imgSrc} alt='...' />
          </Form.Item>
          <Form.Item label="Tác Vụ" >
            <button  className='btn bg-primary  text-white' type='submit'>Update</button>
          </Form.Item>
        
         </div>
         
    </form>
  );
};



export default Edit;