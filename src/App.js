import "./App.css";
import 'animate.css'
import { createBrowserHistory } from "history";
import { HomeTemplates } from "./templates/HomeTemplates/HomeTemplates";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";


import Detail from "./pages/Detail/Detail";
import CheckOut from "./pages/Checkout/CheckOut";
import { Suspense, lazy, Component } from "react";
import Register from "./pages/Register/Register";
import CheckTemplates from "./templates/CheckTemplates/Check";
import { UserTemplates } from "./templates/UserTemplates/UserTemplates";
import Logins from "./pages/Logins/logins";
import Loading from "./Component/Loading/checkLoading";
import Profile from "./pages/profile/profile";
import Contact from "./pages/Contact/Contact";
import AdminTemplates from "./templates/AdminTemplates/Admintemplates";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";

import Film from "./pages/Admin/Film/film";
import Showtime from "./pages/Admin/Showtime/showtime";
import User from "./pages/Admin/user/UserAdmin";
import AddFilm from "./pages/Admin/Film/AddFIlm/AddFilm";
import Edit from "./pages/Admin/Film/Edit/Edit";
import AddUser from "./pages/Admin/user/AddUser/AddUser";
import EditUser from "./pages/Admin/user/EditUser/EditUser";
import FilmHot from "./pages/FilmHot/FilmHot";



const CheckTemplatesLazy = lazy(() =>
  import("./templates/CheckTemplates/Check")
);

export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      {/* // BrowserRouter hoặc Router nếu cần history để khởi tạo việc điều hướng */}
      <BrowserRouter>
        {/* Switch Để nhóm các Route lại với nhau */}
        <Loading />
        <Switch>
          {/* Cấp thất nhất là Route -> Khởi tạo các Routing */}
          <HomeTemplates path="/Home" exact Component={Home} />
          <HomeTemplates path="/Contact" exact Component={Contact} />
      
          <HomeTemplates path="/Detail/:id" exact Component={Detail} />
          <Route path="/Register" exact component={Register} />
          <HomeTemplates path="/profile" exact component={Profile} />
          {/* <Suspense fallback={<h1>Loading.........</h1>}> */}
          <CheckTemplates path="/checkout/:id" exact Component={CheckOut} />
           
          {/* </Suspense> */}
          <UserTemplates path="/login" exact Component={Logins} />
          <HomeTemplates path="/" exact Component={Home} />
          <HomeTemplates path="/filmhot" exact Component={FilmHot} />
          <AdminTemplates path='/admin' exact Component={Dashboard}/>
          <AdminTemplates path='/admin/Dashboard' exact Component={Dashboard}/>
          <AdminTemplates path='/admin/user' exact Component={User}/>
          <AdminTemplates path='/admin/film' exact Component={Film}/>
       
          <AdminTemplates path='/admin/film/addnew' exact Component={AddFilm}/>
          <AdminTemplates path='/admin/film/edit/:id'   exact Component={Edit}/>
          <AdminTemplates path='/admin/film/showtime/:id' exact Component={Showtime}/>
          <AdminTemplates path='/admin/user/adduser' exact Component={AddUser}/>
          <AdminTemplates path='/admin/user/edituser/:id'   exact Component={EditUser}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
