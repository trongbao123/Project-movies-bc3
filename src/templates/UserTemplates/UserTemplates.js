import { Fragment, useEffect } from "react";
import "../UserTemplates/usertemplates.css";
import  { Route}  from 'react-router-dom'






export const UserTemplates = (props) => { // path,exact,component
    const {Component,...restProps} = props;

    useEffect(() => {  
      window.scrollTo(0,0);
  })


    return <Route {...restProps} render={(propsRoute) => { //props.location.props.history.props.match
        // props.location 
        return <Fragment>
<section className="login" style={{backgroundImage:'url(../img/homeappbg.jpg)',backgroundSize:'cover',backgroundPosition:'bottom',height:"723px"}}>
  <div className="login_box">
        <Component {...propsRoute}/>
    <div className="right" style={{backgroundImage:'url(../img/homeappbg.jpg)'}}>
      <div className="right-text">
        <img style={{marginLeft:'190px',marginTop:'-80px'}} src="../img/logo-full.png" />
        <h5 className="text-white">A UX BASED CREATIVE AGENCEY</h5>
      </div>
      <div className="right-inductor"><img src="../img/logo-full.png" /></div>
    </div>
  </div>
</section>


        </Fragment>
     }}/>
};
