import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import '../Carousel/HomeCarousel.css'
import { getCarouselAction } from "../../../../Redux/Action/CarouselAction";

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "cover",
  backgroundSize: "contain",
  width: "100%",
};
export default function CarouselHome() {
  const { ImgArr } = useSelector((state) => state.CarouselReducer);
  console.log(ImgArr, "img");

  const dispatch = useDispatch();

  //useefffect tự kích hoạt khi component load ra
  useEffect(() => {
    // dispath có 2 loại:
    // +1 : action{type:'';data}
    // +2: phải cài middleware: callbaclfuntion(dispath)
        dispatch(getCarouselAction);
  }, []);
  

  const renderImg = () => {
    return ImgArr.map((item, index) => {
      return (
        <div
          style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          key={index}
        >
          <img
            style={{ width: "100%", height: "500px",backgroundPosition:'center',backgroundSize:'cover' }}
            className="w-full opacity-5"
            src={item.hinhAnh}
            alt=""
          />
        </div>
      );
    });
  };

  return <div >
  
    <Carousel autoplay >{renderImg()}</Carousel>

    </div>;
}
