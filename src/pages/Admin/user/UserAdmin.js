import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined,CalendarOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DSPhimAction} from '../../../Redux/Action/QuanLyPhimAction';
import { NavLink } from "react-router-dom";
import {  QuanLyNDAdminAction, XoaNDAcTions } from '../../../Redux/Action/QuanLYNDAction';

 function User (props) {
  const { qlnguoidung} = useSelector(state=>state.QLNDReducer);
  console.log(qlnguoidung,'thông tin người dùng  admin');
  const dispatch =  useDispatch();

  useEffect(() => {  
      dispatch(QuanLyNDAdminAction())
  },[]);

  


  const columns = [
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      sorter: (a, b) => {
        let taikhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taikhoanA>taiKhoanB) {
            return 1;
        }
        return -1
      },
      width:'10%',
     sortDirections:['descend','ascend']
    },
      {
        title: 'Họ Tên',
        dataIndex: 'hoTen',
        value:(text,object)=>{
          return <span key={object} >{text}</span>
        },
        width:'10%', 
        sorter: (a, b) => a.hoTen - b.hoTen,
        sortDirections: ['descend','ascend'],
       
      },
     
      {
        title: 'email',
        dataIndex: 'email',
        value:(text,object)=>{
          return <span key={object} >{text}</span>
        },
        width:'10%',
        sorter: (a, b) => a.hoTen - b.hoTen,
        sortDirections: ['descend','ascend'],
       
      },
    
      {
          title: 'Mật Khẩu',
          dataIndex: 'matKhau',
          sorter: (a, b) => {
            let mkA = a.matKhau.toLowerCase().trim();
            let mkB = b.matKhau.toLowerCase().trim();
            if (mkA>mkB) {
                return 1;
                
            }
            return -1
          },
    
          width:'10%',
         sortDirections:['descend','ascend']
        },
        {
          title: 'Số điện thoại',
          dataIndex: 'soDT',
          sorter: (a, b) => {
            let sdtA = a.soDT.toLowerCase().trim();
            let sdtB = b.soDT.toLowerCase().trim();
            if (sdtA>sdtB) {
                return 1;
                
            }
            return -1
          },
    
          width:'10%',
         sortDirections:['descend','ascend']
        },
        {
          title: 'Loại Người Dùng',
          dataIndex: 'maLoaiNguoiDung',
          sorter: (a, b) => {
            let ndA = a.maLoaiNguoiDung.toLowerCase().trim();
            let ndB = b.maLoaiNguoiDung.toLowerCase().trim();
            if (ndA>ndB) {
                return 1;
                
            }
            return -1
          },
    
          width:'10%',
         sortDirections:['descend','ascend']
        },
        {
          title: 'Hành  Động',
          dataIndex: 'taiKhoan',
          render:(text,ttnd,index)=>{
              return <Fragment key={index}>
                  <NavLink style={{fontSize:20}} className=" text-primary mr-3 p-2" to={`/admin/user/edituser/${ttnd.taiKhoan}`}><img width={30}  src="../img/edit-text.png" alt="" /></NavLink>
                  <span  onClick={() => { 
                    dispatch(XoaNDAcTions(ttnd.taiKhoan))
                   }} style={{fontSize:20,cursor:'pointer'}} className=" text-danger mr-3 p-2" ><img  width={30} src="../img/delete.png" alt="" /></span>
              </Fragment>
          },
          width:'20%',
         sortDirections:['descend','ascend']
        },
    ];

    const data = qlnguoidung;
    const { Search } = Input;
  
    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1890ff',
        }}
      />
    );
    
    const onSearch = (value) => {
      console.log(value)
      dispatch(QuanLyNDAdminAction(value))
    
      };
    
      
    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };
  
return (
  <div className='container'>
      
      <h3 style={{fontSize:30,fontWeight:600}}>Quản Lý Người Dùng</h3>
      <Button className='mb-3'>
       <NavLink to='/admin/user/adduser'>Thêm Người Dùng</NavLink>   
      </Button>
      <Search className='mb-4' placeholder="search account" onSearch={onSearch} enterButton />
 
      <Table columns={columns}   dataSource={data} onChange={onChange} rowKey={"maLoaiNguoiDung"}/>
  </div>
)
}

export default User;
