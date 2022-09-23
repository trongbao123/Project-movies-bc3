import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import "../Home/home.css";
import {useSelector,useDispatch} from 'react-redux';
import { QuanLyRapReducer } from "../../Redux/Reducer/QuanLyRapRrducer";
import CustomArrows from "../../Component/ReactSlick/SimpleSlider";
import { DSPhimAction } from "../../Redux/Action/QuanLyPhimAction";
import { SET_SAP_CHIEU, SET_START_FILM } from "../../Redux/types/ButtonFilmTypes";
import { LayDSRapAction } from "../../Redux/Action/QuanLyRapActions";
import CarouselHome from "../../templates/HomeTemplates/Layout/Carousel/CarouselHome";
import Deal from "../../Component/ComponentDeal/Deal";
import 'animate.css'





export default function Home() {
 
  const {Filmarr} = useSelector(state=>state.QuanLyPhimReducer)
  const {RapArr} = useSelector(state=>state.QuanLyRapReducer)
  console.log(Filmarr,"phim")

  // hamf render giao dien
  // const renderdsFilm = () =>{
  //   return Filmarr.map((ds,index) => { 
  //     return <Film key={index}/>
  //   })
  // }
  const dispatch = useDispatch()
    //useefffect tự kích hoạt khi component load ra
    useEffect(() => {
      // dispath có 2 loại:
      // +1 : action{type:'';data}
      // +2: phải cài middleware: callbaclfuntion(dispath)
          dispatch(DSPhimAction());
          dispatch(LayDSRapAction);
    }, []);

    
  return (
   <div>
      <CarouselHome/>
  <div className="container" style={{ marginTop: 50 }}>
   
    <div>
      <ul
        className="nav nav-pills mb-3 justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            data-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            style={{
              backgroundColor: "#212121",
              fontSize: "24px",
              fontWeight: 500,
            }}
            onClick={() => { 
               const action = {type:SET_START_FILM};
               dispatch(action)
             }}
          >
            Đang Chiếu
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            data-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            style={{
              backgroundColor: "#212121",
              fontSize: "24px",
              fontWeight: 500,
            }}
            onClick={() => { 
              const action = {type:SET_SAP_CHIEU};
              dispatch(action)
             }}
          >
            Sắp Chiếu
          </button>
        </li>
      </ul>
    <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active"  id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                {/* giao dieenj load phim */}
                <CustomArrows Filmarr={Filmarr}/>
            {/* <Carousel autoplay>
           
            </Carousel> */}
              
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
           <CustomArrows Filmarr={Filmarr}/>
        </div>
      </div>

    </div>

  

    <HomeMenu qlrap={RapArr} />

   
  </div>
  <Deal/>
   </div>
  
  )
}


