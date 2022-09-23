import React from "react";
import _ from 'lodash'
import '../Footer/footer.css'
import { useSelector } from "react-redux";

export default function Footer(props) {

  const {RapArr} = useSelector(state=>state.QuanLyRapReducer)
  // var object = {'a':1,'b':2}
  // hàm pick chỉ cho object ko trả về array cú pháp _.pick(object,['a','b'])
  const Rap = _.map(RapArr,(hethongrap)=>_.pick((hethongrap),['maHeThongRap','TenHeThongRap','logo']));
  console.log('arr',Rap);

  const renderlink = () =>{
      return Rap.map((logo,index) => { 
        return    <li className="col-4 mt-4" key={index}>
                <img   style={{width:'50px'}} src={logo.logo} alt={logo.logo} />
                <a className="text-black hover:text-gray-800">{logo.TenHeThongRap}</a>
              </li>
     
      })
  }

  return ( 
<footer  >
    <div className="footer" style={{color:"grey",fontWeight:'600',backgroundColor:"rgba(42,42,45,23.8)",paddingTop:'100px'}}>
    <div className="container ">
    <div className="row">
        <div className="col-4 mt-4">
            <a className="d-flex">
              <img style={{width:"50%"}} src="./img/logo-full.png">
              </img>
              <span className="ml-3 mt-4 text-xl">APP_MOVIES</span>
            </a>
            <p className="mt-5 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
        
        </div>
        <div className="mobile col-8 mt-4">
          <div className="row" style={{width:'100%',textDecoration:"none"}}>
          <div className="col-6 ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NHÀ TÀI TRỢ</h2>
            <nav >
                <ul className="row" >
                  {renderlink()}  
                </ul>           
            </nav>
          </div>
          <div className="col-6 px-3" >
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
                <img style={{width:"30%"}} src="./img/Volibear_Emote.webp"></img>
            </nav>
          </div>
       
          </div>
       
        </div>
       
    </div>
  
  </div>
  <div className="w-full" style={{backgroundColor:"rgba(0, 0, 0,6.8)",marginTop:'60px'}}>
        <div className="container">
          <div className="row" style={{paddingTop:"20px"}}>
              <p className="text-gray-500 text-sm text-center sm:text-left col-3">© 2022 DỰ ÁN MOVIE —
                <a  rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@PTB</a>
              </p>
              <div className="col-8" style={{width:"100%"}} >
                <ul  style={{display:"flex",justifyContent:"flex-end"}}>
                <li className="text-white ml-3">
                  <svg  style={{display:"flex",width:"20px",height:'20px',lineHeight:"15px"}} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" >
                    <path  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </li>
                <li className="ml-3 text-white">
                  <svg style={{display:"flex",width:"20px",height:'20px',lineHeight:"15px"}}  fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </li>
                <li className="ml-3 text-white">
                  <svg style={{display:"flex",width:"20px",height:'20px',lineHeight:"15px"}} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </li>
                <li className="ml-3 text-white">
                  <svg style={{display:"flex",width:"20px",height:'20px',lineHeight:"15px"}} fill="currentColor"    >
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  </svg>
                </li>
                </ul>
             
              </div>
          </div>
       
        </div>
  </div>
    </div>
</footer>


  );
}
