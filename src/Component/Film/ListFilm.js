
import React from "react";
import { NavLink } from "react-router-dom";
import '../Film/film.css'




export default function ListFilm(props)  {
    const{film} = props;

   
    return (
     <div className="film px-3 mt-5" >
        <div className="card " >
            <div className="image" style={{backgroundImage:`url(${film.hinhAnh}), url(./img/bgmovie.jpg) `,border:'solid 1px grey',width:'80%',height:"400px",backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',borderRadius:'15px'}}>
                 <img style={{ opacity:"0"}} src={film.trailer} className="card-img-top" alt="..." />
            </div>  
           <div className="showcase__item">
                <div className="showcase__overlay">
                <p style={{height:'20px'}}>Mô Tả: {film.moTa}</p>
             </div>
            </div>

        <div className="card-body" style={{alignItems:'center'}} >
            <h5 className="card-title text-center text-white" style={{width:'70%',height:"20px",fontSize:'13px'}}>{film.tenPhim}</h5>
            <p className="card-text text-center text-white" style={{width:'70%',height:"30px",fontSize:'15px'}}>{film.ngayKhoiChieu}</p>
            <button className="datve">
            <NavLink style={{color:'black'}} to={`/Detail/${film.maPhim}`} >Đặt vé</NavLink>
            </button>
            
        </div>
        </div>
     </div>
    );
  }

 

       
  

