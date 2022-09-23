import React, { Fragment, useEffect } from 'react'
import '../FilmHot/filmhot.css'
import {PlayCircleOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { DSPhimAction } from '../../Redux/Action/QuanLyPhimAction';
import moment from 'moment';






export default function FilmHot(props) {
  const { Filmarr} = useSelector(state=>state.QuanLyPhimReducer);
  console.log(Filmarr,'fim admin');
  const dispatch =  useDispatch();

  useEffect(() => {  
      dispatch(DSPhimAction())
  },[]);

  const renderFilm = () =>{
    return Filmarr.slice(0,8).map((film,index) => { 
      return <Fragment key={index}>
  <div className="film-ovelay col-6" >
  <div>
<div className="box">
      <a className="button" href="#popup1"><PlayCircleOutlined style={{fontSize: '74px',
    marginTop: '-11px',
    marginLeft: '-11px'}} /></a>
    </div>
    
    <div id="popup1" className="overlay">
      <div className="popup">
      <a class="close" href="#">&times;</a>
       <iframe width="1500" height="550"  src={film.trailer} frameborder="50"></iframe>
      </div>
    </div>
</div>
    <div className="card mb-3" >
  <div className="row no-gutters">
  <div className="col-md-8">
      <div className="card-body text-light">
        <h5 className="card-title text-light">Tên Phim: {film.tenPhim}</h5>
        <p className="card-text text-primary"><small className="text-muted">Ngày Khởi Chiếu: {moment(film.ngayKhoiChieu).format("DD/MM/YYYY hh:mm:ss A")}</small></p>
        <p className="card-text" >Mô Tả:  {film.moTa.length>50 ?film.moTa.substr(0,250)+'...': film.moTa}</p>
      </div>
    </div>
    <div className="col-md-4">
      <img src={film.hinhAnh} width={200} alt="..." />
    </div>
    
  </div>


    </div>
  
    </div>

 
      </Fragment>
     })
  }

  return (
    <div className='body'>
      <div className="film" style={{paddingTop:70}}>
      <div className="container">
  <div className="row">
      {renderFilm()}
  
  </div>
 </div>
      </div>




 <div className="modal" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


   </div>
  )
}
