import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined,CalendarOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DSPhimAction, XoaPhimAcTions } from '../../../Redux/Action/QuanLyPhimAction';
import { NavLink } from "react-router-dom";

  
export default function Film(props) {
    const { Filmarr} = useSelector(state=>state.QuanLyPhimReducer);
    console.log(Filmarr,'fim admin');
    const dispatch =  useDispatch();

    useEffect(() => {  
        dispatch(DSPhimAction())
    },[]);
    const columns = [
        {
          title: 'maPhim',
          dataIndex: 'maPhim',
          value:(text,object)=>{
            return <span key={object} >{text}</span>
          },
          width:'20%',
          filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Submenu',
              value: 'Submenu',
              children: [
                {
                  text: 'Green',
                  value: 'Green',
                },
                {
                  text: 'Black',
                  value: 'Black',
                },
              ],
            },
          ],  
          sorter: (a, b) => a.maPhim - b.maPhim,
          sortDirections: ['descend','ascend'],
         
        },
       
        {
          title: 'hinhAnh',
          dataIndex: 'hinhAnh',
          width:'20%',
            render:(text,film,index)=>{
                return <Fragment>
                    <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e) => { e.target.onError=null;e.target.src=`https://piscum.photos/id/${index}/50/50` }} />
                </Fragment>
            },
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Tên Phim',
          dataIndex: 'tenPhim',
          sorter: (a, b) => {
            let tenPhimA = a.tenPhim.toLowerCase().trim();
            let tenPhimB = b.tenPhim.toLowerCase().trim();
            if (tenPhimA>tenPhimB) {
                return 1;
            }
            return -1
          },
          width:'20%',
         sortDirections:['descend','ascend']
        },
        {
            title: 'Mô Tả',
            dataIndex: 'moTa',
            sorter: (a, b) => {
              let motaA = a.moTa.toLowerCase().trim();
              let moTaB = b.moTa.toLowerCase().trim();
              if (motaA>moTaB) {
                  return 1;
                  
              }
              return -1
            },
            render:(text,film,index)=>{
                return <Fragment key={index}>
                    {film.moTa.length>50 ?film.moTa.substr(0,50)+'...': film.moTa}
                </Fragment>
            },
            width:'20%',
           sortDirections:['descend','ascend']
          },
          {
            title: 'Hành  Động',
            dataIndex: 'maPhim',
            render:(text,film,index)=>{
                return <Fragment  key={index}>
                    <NavLink   className=" text-primary mr-3 mt-5 " to={`/admin/film/edit/${film.maPhim}`}><img width={30}  src="../img/edit-text.png" alt="" /></NavLink>
                    <span  onClick={() => { 
                          if (window.confirm('Bạn có muốn xóa'+''+ film.tenPhim)) {
                            dispatch(XoaPhimAcTions(film.maPhim));
                          }console.log(film.maPhim,'ma phim cần xóa')
                     }} style={{fontSize:20,cursor:'pointer'}} className=" text-danger mr-3 p-2 mt-5" ><img  width={30} src="../img/delete.png" alt="" /></span>
                     <NavLink style={{fontSize:20}} className=" text-success mr-3 p-2 mt-5" to={`/admin/film/showtime/${film.maPhim}`}>
                     <img width={30} src="../img/calendar.png" alt="" />
                     </NavLink>
                </Fragment>
            },
            width:'20%',
           sortDirections:['descend','ascend']
          },
      ];
      const data = Filmarr;
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
        dispatch(DSPhimAction(value))
      
        };
      
        
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
    
  return (
    <div className='container'>
        
        <h3 style={{fontSize:30,fontWeight:600}}>Quản Lý Phim</h3>
        <Button className='mb-3'>
         <NavLink to='/admin/film/addnew'>Thêm Phim</NavLink>   
        </Button>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
   
        <Table className='mt-5' columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"}/>
    </div>
  )
}
