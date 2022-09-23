import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import {useSelector} from 'react-redux';
import _ from 'lodash'
import { UserOutlined } from "@ant-design/icons";
import { TOKEN, USER_LOGIN } from "../../../../util/setting/config";



export default function Header(props) {
  const {userlogin} = useSelector(state=>state.QLNDReducer)



 const renderlogin = () =>{
    if (_.isEmpty(userlogin)) {
      return <Fragment>
         <button
          className="btn btn-outline-danger px-3 "
          type="submit"
        >
          <NavLink style={{color:'white'}} to="/login">
              Sign in
          </NavLink>
        
        </button>
        <button className="btn btn-outline-success px-3 mx-3" type="submit">
        <NavLink style={{color:'white'}} to="/Register">
              Sign up
          </NavLink>
        </button>
      </Fragment>
    }

   return <Fragment>
   <button
      className="btn  px-3 "
      type="submit" style={{display:'flex',justifyContent:'center'}}
    >
      <NavLink style={{color:'white'}} to="/profile">
        <UserOutlined style={{width:'32px',height:'32px',lineHeight:'30px',borderRadius:'20px',backgroundColor:'pink'}} /> hello!{userlogin.taiKhoan} ||
      </NavLink>
    </button>
    <button onClick={() => { 
      console.log(userlogin,'đăng xu')
        localStorage.removeItem(userlogin);
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(TOKEN);
        history.push('/Home')
        window.location.reload();
       }} className="text-success">Đăng Xuất</button>
    </Fragment> 
    }
  


  return (
    <header
      className="navbar  text-light  container-fluid"
      style={{
        position: "fixed",
        zIndex: 1000,
        top: 0,
        left: 0,
        width: "100%",
        height: 60,
        backgroundColor: "rgba(40,40,40,0.85)",
      }}
    >
      <NavLink to="/" className="navbar-brand mx-2">
        <img src="./img/logo-full.png" alt="" style={{ width: "40%" }} />
      </NavLink>
      <ul
        className="nav justify-content-center"
        style={{ marginRight: "88px" }}
      >
        <li className="nav-item">
          <NavLink
            to="/Home"
            className="nav-link active text-white"
            activeClassName="border-b-1 border-white"
          >
            Movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Contact"
            className="nav-link text-white"
            activeClassName="border-b-1 border-white"
          >
           theater
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/filmhot"
            className="nav-link text-white"
            activeClassName="border-b-1 border-white"
          >
           Film Hot
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin"
            className="nav-link text-white"
            activeClassName="border-b-1 border-white"
          >
           Admin
          </NavLink>
        </li>
     
      </ul>

      <div className="d-flex">
          {renderlogin()}
      </div>
    </header>
  );
}
