import { Fragment, useEffect } from "react";
import  {Route}  from 'react-router-dom'
import Deal from "../../Component/ComponentDeal/Deal";

import CarouselHome from "./Layout/Carousel/CarouselHome";

import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";




export const HomeTemplates = (props) => { // path,exact,component
    const {Component,...restProps} = props;

    useEffect(() => {  
        window.scrollTo(0,0);
    })

    return <Route {...restProps} render={(propsRoute) => { //props.location.props.history.props.match
        // props.location 
        return <Fragment>
            <Header {...propsRoute}/>
           
            <Component {...propsRoute}/>
            
            <Footer {...propsRoute}/>
        </Fragment>
     }}/>
}