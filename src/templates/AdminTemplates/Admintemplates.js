import { Fragment, useEffect } from "react";
import  {NavLink, Redirect, Route}  from 'react-router-dom'
import { TOKEN, USER_LOGIN } from "../../util/setting/config";
import { history } from "../../App";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import swal from 'sweetalert'
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
import { useSelector } from "react-redux";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Content, Footer, Sider } = Layout
const {Submenu} = Menu

const AdminTemplates = (props) => { // path,exact,component

   
    const {Component,...restProps} = props;
    const [collapsed, setCollapsed] = useState(false);
    const {userlogin}  =  useSelector(state=>state.QLNDReducer);
    const onCollapse = collapsed =>{
        setCollapsed(collapsed)
    }
    useEffect(() => {  
        window.scrollTo(1,0);
    })


    if (!localStorage.getItem(USER_LOGIN)) {
      swal({
        title: "warning!",
        text: "Vui lòng Đăng Nhập!",
        icon: "warning",
        button: "warning!",
      });
        return <Redirect to="/login"/>
    }

    if (userlogin.maLoaiNguoiDung !== 'QuanTri') {
      swal({
        title: "warning!",
        text: "Bạn không phải quản trị không được truy cập vào trang này!",
        icon: "warning",
        button: "cancel!",
      });
        return <Redirect to="/"> </Redirect>
    }

    const operations =<Fragment >
      <div style={{position:"absolute",left:1335,top:10}}>
      <button
       className="btn  px-3 "
       type="submit" style={{display:'flex',justifyContent:'center',width:'50%',height:20}}
     >
       <NavLink style={{color:'white',display:'flex',justifyContent:'center',marginRight:'32px'}} to="/profile">
         <UserOutlined style={{width:'32px',height:'32px',lineHeight:'30px',borderRadius:'20px',backgroundColor:'pink',color:'black'}} /><span className="text-success">hello!{userlogin.taiKhoan}</span> 
       </NavLink>
     </button>

     <button onClick={() => { 
       console.log(userlogin,'đăng xu')
         localStorage.removeItem(userlogin);
         localStorage.removeItem(USER_LOGIN);
         localStorage.removeItem(TOKEN);
         history.push('/Home')
         window.location.reload();
        }} style={{position:'absolute',top:'-7px',left:'90px'}} className="text-success mt-3">|| Đăng Xuất</button>
      </div>
   
     </Fragment> 




    return <Route {...restProps} render={(propsRoute) => { //props.location.props.history.props.match
        // props.location 
        return <Fragment>
           <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={collapsed}>
        <div className="logo mt-1 py-2" >
          <NavLink to="/Home">
          <img style={{width:'70%',marginLeft:'25px'}} src='../img/logo-full.png' alt="" />
          {operations}
          </NavLink>
         
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
        <Menu.Item key='3' icon={<PieChartOutlined/>}>
            <NavLink to='/admin/Dashboard'>Dashboard</NavLink>
          </Menu.Item>
        <SubMenu key='sub2' icon={<UserOutlined />} title="User">
          <Menu.Item key='1' icon={<FileOutlined/>}>
            <NavLink to='/admin/user'>Users</NavLink>
          </Menu.Item>
          <Menu.Item key='9' icon={<FileOutlined/>}>
            <NavLink to='/admin/user/adduser'>Add User</NavLink>
          </Menu.Item>
        </SubMenu>
          <SubMenu key='sub1' icon={<DesktopOutlined/>} title="Film">
          <Menu.Item key='2' icon={<FileOutlined/>}>
            <NavLink to='/admin/film'>Films</NavLink>
          </Menu.Item>
          <Menu.Item key='5' icon={<FileOutlined/>}>
            <NavLink to='/admin/film/addnew'>Add New</NavLink>
          </Menu.Item>
          </SubMenu>
        
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{backgroundColor:'#e8e8e8'}}>
        <Header  style={{ padding: 0,backgroundColor:'aliceblue' }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360,border: '1px solid #e2dcdc',backgroundColor:'aliceblue' }}>
            <Component  {...props}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>@ Admin Templates react movie 2022 PTB BOOTCAMP03</Footer>
      </Layout>
    </Layout>
        </Fragment>
     }}/>
};
export default AdminTemplates;