import { Fragment, useEffect } from "react";
import  {Redirect, Route}  from 'react-router-dom'
import { USER_LOGIN } from "../../util/setting/config";





const CheckTemplates = (props) => { // path,exact,component
    const {Component,...restProps} = props;
    useEffect(() => {  
        window.scrollTo(0,0);
    })


    // if (!localStorage.getItem(USER_LOGIN)) {
    //     return <Redirect to="/login"/>
    // }

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login"></Redirect>
    }
    return <Route {...restProps} render={(propsRoute) => { //props.location.props.history.props.match
        // props.location 
        return <Fragment>
         <Component {...propsRoute}/>
        </Fragment>
     }}/>
};
export default CheckTemplates;