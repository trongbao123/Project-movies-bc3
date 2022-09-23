import {
  Space,
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LayDSRapAction, LayThongTinCumRapActions } from '../../../Redux/Action/QuanLyRapActions';
import { qldatve } from '../../../Service/QuanLyDatVeServices';
import { qlrap } from '../../../Service/QuanLyRap';
import swal from "sweetalert";


export default function Showtime(props) {

  const Formik = useFormik({
  
  initialValues:{
    maPhim: props.computedMatch.params.id,
    ngayChieuGioChieu: '',
    maRap: '',
    giaVe: '',
  },
    onSubmit: async (values) => {
      console.log('values', values);
  try {
    const result = await qldatve.taolichChieu(values)
    await swal({
      title: "Good job!",
      text: result.data.content,
      icon: "success",
      button: "Success",
    });
  } catch (error) {
    console.log(error, 'error')
  }
   
   
    }
  })


  const [state,setState] = useState({
    heThongChieu:[],
    CumRapChieu:[],
  });
  console.log(state.heThongChieu)
  const [componentSize, setComponentSize] = useState('default');

useEffect(async () => { 
    try {
      const result =  await qlrap.LayThongTinHeThongRap()
      setState({
        ...state,
        heThongChieu:result.data.content
      })
    } catch (error) {
      console.log(error)
    }
 }, []);
 

  const renderHeThongRap = () =>{
    return state.heThongChieu.map((rap,index) => { 
      return   {label:rap.tenHeThongRap,value:rap.maHeThongRap} 
        
     })
  }


  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };


 const onchangeHeThongRap = async (values,options) =>{
      console.log(values,'mã hệ thống rạp')
      console.log(options,'mã hệ thống rạp')
      try {
        let result = await qlrap.LayThongTinCumRap(values);
        setState({
          ...state,
          CumRapChieu:result.data.content
        })
        console.log(result,'result')
      } catch (error) {
        console.log(error)
      }
  }

  const RenderCumRap = () =>{
    return state.CumRapChieu?.map((cumrap,index) => { 
      console.log('list cụm rap', cumrap)
      return {label:cumrap.tenCumRap,value:cumrap.maCumRap} 
      
      
     })
  }

  const handlechangeCumRap = (value) =>{
    Formik.setFieldValue('maRap',value)
  }
  const { RangePicker } = DatePicker;
  const onChangeNumber = (value) => {
    Formik.setFieldValue('giaVe',value)
  };
  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    Formik.setFieldValue('ngayChieuGioChieu',moment(value).format('DD/MM/YYYY hh:mm:ss'))
  };
  const onOk = (value) => {
    Formik.setFieldValue('ngayChieuGioChieu',moment(value).format('DD/MM/YYYY hh:mm:ss'))
  };  
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
    <h3>Tạo Lịch Chiếu</h3>
      <Form.Item label="Hệ Thống Rạp">
        <Select
          options={
            // {label:'AAAA',value:'AAAA' },
            renderHeThongRap()
          }
          onChange={onchangeHeThongRap} placeholder='Chọn Hệ Thống Rạp'
        />
      </Form.Item>
      <Form.Item label="Cụm Rạp">
        <Select
          options={RenderCumRap()}
          onChange={handlechangeCumRap} placeholder='Chọn Cụm Rạp'
        />
      </Form.Item>
      <Form.Item label="Ngày Giờ Chiếu">
      <Space direction="vertical" size={12}>
    <DatePicker  format={"DD/MM/YYYY hh:mm:ss"} showTime onChange={onChange} onOk={onOk} />
  
  </Space>
      </Form.Item>
      <Form.Item label="Giá Vé">
      <InputNumber  onChange={onChangeNumber} />
      </Form.Item>
      <Form.Item label="Tạo Lịch Chiếu">
        <Button htmlType='submit'>Tạo Lịch</Button>
      </Form.Item>
    </Form>
  )
}
