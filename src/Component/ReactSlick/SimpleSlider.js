import React from "react";
import "../ReactSlick/slick.css";
import ListFilm from "../Film/ListFilm";
import Slider from "react-slick";
import styleSlick from 'react-slick'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const settings = {
  className: "center variable-width",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  speed: 1,
  rows: 2,
  slidesPerRow: 1,
  slidesToShow: 3,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CustomArrows = (props) =>  {
 const renderfilm = () => {
    return props.Filmarr.map((ds, index) => {
      return (
        <div className={`${styleSlick['width-item']}`} key={index}>
          <ListFilm film={ds} />
        </div>
      );
    });
  };


    return (
      <div>
        <Slider className="row" {...settings}>
         {renderfilm()}
        </Slider>
      </div>
    );
  }


  export default CustomArrows
